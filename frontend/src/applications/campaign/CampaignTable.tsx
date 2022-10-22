import { FC, ChangeEvent, useState } from "react";
import { format } from "date-fns";
import numeral from "numeral";
import PropTypes from "prop-types";
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
  useTheme,
  CardHeader,
  SelectChangeEvent,
} from "@mui/material";

import Label from "../../components/Label";

import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { Campaign, StatusEnum } from "../../apiClient/data-contracts";

interface CampaignTableProps {
  className?: string;
  campaigns: Campaign[];
}

interface Filters {
  status?: StatusEnum | null;
}

const getStatusLabel = (campaignStatus: StatusEnum): JSX.Element => {
  const map = {
    c: {
      text: "Completed",
      color: "success",
    },
    u: {
      text: "Picked Up",
      color: "warning",
    },
    p: {
      text: "In progress",
      color: "warning",
    },
    f: {
      text: "Failed",
      color: "error",
    },
    d: {
      text: "Completed",
      color: "success",
    },
  };

  const { text, color }: any = map[campaignStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (campaigns: Campaign[], filters: Filters): Campaign[] => {
  return campaigns.filter((campaign) => {
    let matches = true;

    if (filters.status && campaign.name !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  campaigns: Campaign[],
  page: number,
  limit: number
): Campaign[] => {
  return campaigns.slice(page * limit, page * limit + limit);
};

const CampaignTable: FC<CampaignTableProps> = ({ campaigns }) => {
  const [selectedCampaigns, setSelectedCampaigns] = useState<number[]>([]);

  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: null,
  });

  const statusOptions = [
    {
      id: "all",
      name: "All",
    },
    {
      id: "c",
      name: "Completed",
    },
    {
      id: "u",
      name: "Picked up",
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

  const handleStatusChange = (
    e: SelectChangeEvent<StatusEnum | "all">
  ): void => {
    let value: StatusEnum | null = null;

    if (e.target.value !== "all") {
      value = e.target.value as StatusEnum;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value,
    }));
  };

  const handleSelectAllCampaigns = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedCampaigns(
      event.target.checked ? campaigns.map((campaign) => campaign.id) : []
    );
  };

  const handleSelectOneCampaign = (
    event: ChangeEvent<HTMLInputElement>,
    campaignId: number
  ): void => {
    if (!selectedCampaigns.includes(campaignId)) {
      setSelectedCampaigns((prevSelected) => [...prevSelected, campaignId]);
    } else {
      setSelectedCampaigns((prevSelected) =>
        prevSelected.filter((id) => id !== campaignId)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredCampaigns = applyFilters(campaigns, filters);
  const paginatedCampaigns = applyPagination(filteredCampaigns, page, limit);
  const selectedSomeCampaigns =
    selectedCampaigns.length > 0 && selectedCampaigns.length < campaigns.length;
  const selectedAllCampaigns = selectedCampaigns.length === campaigns.length;
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        action={
          <Box width={150}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Status</InputLabel>
              <Select
                value={filters.status || "all"}
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
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={selectedAllCampaigns}
                  indeterminate={selectedSomeCampaigns}
                  onChange={handleSelectAllCampaigns}
                />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Time</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCampaigns.map((campaign) => {
              const isCampaignSelected = selectedCampaigns.includes(
                campaign.id
              );
              return (
                <TableRow hover key={campaign.id} selected={isCampaignSelected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isCampaignSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneCampaign(event, campaign.id)
                      }
                      value={isCampaignSelected}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {campaign.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {format(Date.parse(campaign.created_at), "MMMM dd yyyy")}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {campaign.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {format(Date.parse(campaign.end_time), "MMMM dd yyyy")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {format(Date.parse(campaign.start_time), "MMMM dd yyyy")}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {getStatusLabel(campaign.status as StatusEnum)}
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Edit Order" arrow>
                      <IconButton
                        sx={{
                          "&:hover": {
                            background: theme.colors.primary.lighter,
                          },
                          color: theme.palette.primary.main,
                        }}
                        color="inherit"
                        size="small"
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Order" arrow>
                      <IconButton
                        sx={{
                          "&:hover": { background: theme.colors.error.lighter },
                          color: theme.palette.error.main,
                        }}
                        color="inherit"
                        size="small"
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredCampaigns.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
  );
};

CampaignTable.propTypes = {
  campaigns: PropTypes.array.isRequired,
};

CampaignTable.defaultProps = {
  campaigns: [],
};

export default CampaignTable;
