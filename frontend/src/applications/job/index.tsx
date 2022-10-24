import { Helmet } from "react-helmet-async";
import JobHeader from "./JobHeader";
import PageTitleWrapper from "../../components/PageTitleWrapper";
import { Card, Container, Grid } from "@mui/material";
import JobTable from "./JobTable";
import { useState } from "react";
import JobEditCreate from "./JobEditCreate";
import { useParams } from "react-router-dom";

function Jobs(props: any) {
  const [toggleCreateJob, setToggleCreateJob] = useState<boolean>(false);

  const { campaignID } = useParams();

  return (
    <>
      <Helmet>
        <title>Jobs</title>
      </Helmet>
      <PageTitleWrapper>
        <JobHeader onAddJob={() => setToggleCreateJob(true)} />
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
            {toggleCreateJob && campaignID && (
              <JobEditCreate
                onClose={() => setToggleCreateJob(false)}
                open={toggleCreateJob}
                campaign={+campaignID}
              />
            )}
            <Card>
              <JobTable />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Jobs;
