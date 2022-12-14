import { Typography, Button, Grid } from "@mui/material";

import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";

interface PageHeaderProps {
  onAddCampaign: () => void;
}

function PageHeader({ onAddCampaign }: PageHeaderProps) {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Campaigns
        </Typography>
        <Typography variant="subtitle2">
          Here are all the created campaigns
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={onAddCampaign}
        >
          Create new campaign
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
