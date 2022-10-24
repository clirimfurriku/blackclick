import {
  IconButton,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { format } from "date-fns";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { FC } from "react";
import { StatusEnum, Task } from "../../../apiClient/data-contracts";

import Label from "../../../components/Label";

interface CampaignRowProps {
  className?: string;
  job: Task;
  onDelete: (campaign: Task) => void;
  onEdit: (campaign: Task) => void;
}

const getStatusLabel = (campaignStatus: StatusEnum): JSX.Element => {
  const map = {
    c: {
      text: "Created",
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

const JobRow: FC<CampaignRowProps> = ({ job, onDelete, onEdit }) => {
  const theme = useTheme();

  return (
    <TableRow hover key={job.id}>
      <TableCell>
        <Typography
          variant="body1"
          fontWeight="bold"
          color="text.primary"
          gutterBottom
          noWrap
        >
          {job.id}
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
          {job.query}
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
          From: {format(Date.parse(job.start_time), "HH:mm MMMM dd yyyy")}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          To: {format(Date.parse(job.end_time), "HH:mm MMMM dd yyyy")}
        </Typography>
      </TableCell>
      <TableCell align="right">
        {getStatusLabel(job.status as StatusEnum)}
      </TableCell>
      <TableCell align="right">
        <Tooltip title="Edit Campaign" arrow>
          <IconButton
            sx={{
              "&:hover": {
                background: theme.colors.primary.lighter,
              },
              color: theme.palette.primary.main,
            }}
            onClick={() => onEdit(job)}
            color="inherit"
            size="small"
          >
            <EditTwoToneIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete Campaign" arrow>
          <IconButton
            sx={{
              "&:hover": { background: theme.colors.error.lighter },
              color: theme.palette.error.main,
            }}
            color="inherit"
            size="small"
            onClick={() => onDelete(job)}
          >
            <DeleteTwoToneIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

export default JobRow;
