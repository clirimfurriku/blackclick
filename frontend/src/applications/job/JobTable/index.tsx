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
import {
  PaginatedCampaignList,
  PaginatedTaskList,
  Task,
} from "../../../apiClient/data-contracts";
import useClient from "../../../hooks/useClient";
import { Campaign } from "../../../apiClient/data-contracts";
import JobRow from "./JobRow";
import CampaignEditCreate from "../../campaign/CampaignEditCreate";
import JobEditCreate from "../JobEditCreate";
// import CampaignEditCreate from "../CampaignEditCreate";

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
  const [toggleEditJob, setToggleEditJob] = useState<boolean>(false);

  const [page, setPage] = useState<number>(0);
  // const {t} = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [jobs, setJobs] = useState<PaginatedTaskList | undefined>(undefined);
  const [selectedJob, setSelectedJob] = useState<Task | undefined>(undefined);
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

  const fetchJobs = useCallback(async () => {
    setIsLoading(true);
    const resp = await client?.jobsTasksList({
      page: page + 1,
      status: status,
    });

    setJobs(resp);
    setIsLoading(false);
  }, [page, status]);

  useEffect(() => {
    fetchJobs().then();
  }, [fetchJobs, client, page, status]);

  const handleDelete = async (job: Task) => {
    await client?.jobsTasksDestroy(job.id);
    await fetchJobs();
  };

  const handleEdit = async (job: Task) => {
    setSelectedJob(job);
    setToggleEditJob(true);
  };

  return (
    <Card>
      {toggleEditJob && (
        <JobEditCreate
          onClose={() => {
            setToggleEditJob(false);
            fetchJobs().then();
          }}
          open={toggleEditJob}
          job={selectedJob}
          campaign={1}
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
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs &&
              (jobs?.results ?? []).map((job: Task) => (
                <JobRow
                  key={job.id}
                  job={job}
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
          count={jobs?.count ?? 0}
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
