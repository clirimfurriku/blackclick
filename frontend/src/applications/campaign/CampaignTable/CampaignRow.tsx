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
import ArrowForward from "@mui/icons-material/ArrowForward";
import { FC } from "react";
import { Campaign, StatusEnum } from "../../../apiClient/data-contracts";

import Label from "../../../components/Label";
import { useNavigate } from "react-router-dom";

interface CampaignRowProps {
  className?: string;
  campaign: Campaign;
  onDelete: (campaign: Campaign) => void;
  onEdit: (campaign: Campaign) => void;
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

const CampaignRow: FC<CampaignRowProps> = ({ campaign, onDelete, onEdit }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <TableRow hover key={campaign.id}>
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
          {campaign.name}
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
          From:{" "}
          {format(Date.parse(campaign.start_time), "hh:mm a MMMM dd yyyy")}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          To: {format(Date.parse(campaign.end_time), "hh:mm a MMMM dd yyyy")}
        </Typography>
      </TableCell>
      <TableCell align="right">
        {getStatusLabel(campaign.status as StatusEnum)}
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
            onClick={() => onEdit(campaign)}
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
            onClick={() => onDelete(campaign)}
          >
            <DeleteTwoToneIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </TableCell>
      <TableCell align="center">
        <Tooltip title="View jobs" arrow>
          <IconButton
            sx={{
              "&:hover": { background: theme.colors.success.lighter },
              color: theme.palette.success.main,
            }}
            color="inherit"
            size="small"
            onClick={() => navigate(`${campaign.id}`)}
          >
            <ArrowForward fontSize="medium" />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

export default CampaignRow;
