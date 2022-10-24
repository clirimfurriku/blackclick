import { Typography, Button, Grid } from "@mui/material";

import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import { useParams } from "react-router-dom";

interface PageHeaderProps {
  onAddJob: () => void;
}

function PageHeader({ onAddJob }: PageHeaderProps) {
  const { campaignID } = useParams();

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Jobs
        </Typography>
        <Typography variant="subtitle2">Here are all scheduled jobs</Typography>
      </Grid>
      {campaignID && (
        <Grid item>
          <Button
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
            startIcon={<AddTwoToneIcon fontSize="small" />}
            onClick={onAddJob}
          >
            Create new job
          </Button>
        </Grid>
      )}
    </Grid>
  );
}

export default PageHeader;
