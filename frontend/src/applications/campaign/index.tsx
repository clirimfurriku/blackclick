import { Helmet } from "react-helmet-async";
import CampaignHeader from "./CampaignHeader";
import PageTitleWrapper from "../../components/PageTitleWrapper";
import { Grid, Container, Card } from "@mui/material";
import CampaignTable from "./CampaignTable";
import useClient from "../../hooks/useClient";
import { useCallback, useEffect, useState } from "react";
import { PaginatedCampaignList } from "../../apiClient/data-contracts";

function Campaigns() {
  const [value, setValue] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  // const {t} = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [patients, setPatients] = useState<
    PaginatedCampaignList | null | undefined
  >(null);
  const client = useClient();

  const fetchUsers = useCallback(async () => {
    setIsLoading(true);
    const resp = await client?.campaignCampaignsList({
      page: page,
    });

    setPatients(resp);
    setIsLoading(false);
  }, [page, value]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers, client, page, value]);

  const handleFilter = useCallback((val: string) => {
    setValue(val);
  }, []);

  return (
    <>
      <Helmet>
        <title>Transactions - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        <CampaignHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card>
              <CampaignTable campaigns={patients?.results ?? []} />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Campaigns;
