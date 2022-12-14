import { Helmet } from "react-helmet-async";
import CampaignHeader from "./CampaignHeader";
import PageTitleWrapper from "../../components/PageTitleWrapper";
import { Card, Container, Grid } from "@mui/material";
import CampaignTable from "./CampaignTable";
import { useState } from "react";
import CampaignEditCreate from "./CampaignEditCreate";

function Campaigns() {
  const [toggleCreateCampaign, setToggleCreateCampaign] =
    useState<boolean>(false);
  // const {t} = useTranslation();

  return (
    <>
      <Helmet>
        <title>Campaigns</title>
      </Helmet>
      <PageTitleWrapper>
        <CampaignHeader onAddCampaign={() => setToggleCreateCampaign(true)} />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
          justifyItems="stretch"
        >
          <Grid item xs={12}>
            {toggleCreateCampaign && (
              <CampaignEditCreate
                onClose={() => setToggleCreateCampaign(false)}
                open={toggleCreateCampaign}
              />
            )}
            <Card>
              <CampaignTable />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Campaigns;
