import { FC, useCallback, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardHeader,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { PaginatedCampaignList } from "../../../apiClient/data-contracts";
import useClient from "../../../hooks/useClient";
import { Campaign } from "../../../apiClient/data-contracts";
import CampaignRow from "./CampaignRow";
import CampaignEditCreate from "../CampaignEditCreate";

interface CampaignTableProps {
  className?: string;
}

const statusOptions = [
  {
    id: "all",
    name: "All",
  },
  {
    id: "c",
    name: "Created",
  },
  {
    id: "p",
    name: "In Progress",
  },
  {
    id: "f",
    name: "Failed",
  },
  {
    id: "d",
    name: "Done",
  },
];

const CampaignTable: FC<CampaignTableProps> = () => {
  const [status, setStatus] = useState<"c" | "d" | "f" | "p" | undefined>(
    undefined
  );
  const [toggleEditCampaign, setToggleEditCampaign] = useState<boolean>(false);

  const [page, setPage] = useState<number>(0);
  // const {t} = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [campaigns, setCampaigns] = useState<PaginatedCampaignList | undefined>(
    undefined
  );
  const [selectedCampaign, setSelectedCampaign] = useState<
    Campaign | undefined
  >(undefined);
  const client = useClient();

  const handleStatusChange = (
    e: SelectChangeEvent<"c" | "d" | "f" | "p" | undefined | "all">
  ): void => {
    let value: "c" | "d" | "f" | "p" | undefined = undefined;

    if (e.target.value !== "all") {
      value = e.target.value as "c" | "d" | "f" | "p" | undefined;
    }

    setStatus(value);
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const fetchCampaigns = useCallback(async () => {
    setIsLoading(true);
    const resp = await client?.campaignCampaignsList({
      page: page + 1,
      status: status,
    });

    setCampaigns(resp);
    setIsLoading(false);
  }, [page, status]);

  useEffect(() => {
    fetchCampaigns().then();
  }, [fetchCampaigns, client, page, status]);

  const handleDelete = async (campaign: Campaign) => {
    await client?.campaignCampaignsDestroy(campaign.id);
    await fetchCampaigns();
  };

  const handleEdit = async (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    setToggleEditCampaign(true);
  };

  return (
    <Card>
      {toggleEditCampaign && (
        <CampaignEditCreate
          onClose={() => {
            setToggleEditCampaign(false);
            fetchCampaigns().then();
          }}
          open={toggleEditCampaign}
          campaign={selectedCampaign}
        />
      )}
      <CardHeader
        action={
          <Box width={150}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Status</InputLabel>
              <Select
                value={status || "all"}
                onChange={handleStatusChange}
                label="Status"
                autoWidth
              >
                {statusOptions.map((statusOption) => (
                  <MenuItem key={statusOption.id} value={statusOption.id}>
                    {statusOption.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        }
        title="Recent Orders"
      />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Time</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Actions</TableCell>
              <TableCell align="center">View Jobs</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {campaigns &&
              (campaigns?.results ?? []).map((campaign: Campaign) => (
                <CampaignRow
                  key={campaign.id}
                  campaign={campaign}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={campaigns?.count ?? 0}
          onPageChange={handlePageChange}
          page={page}
          rowsPerPage={10}
          rowsPerPageOptions={[]}
        />
      </Box>
    </Card>
  );
};

export default CampaignTable;
