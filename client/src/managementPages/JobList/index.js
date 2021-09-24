import React, { useEffect } from "react";
import { Box, Container } from "@material-ui/core";
import Page from "src/components/Page";
import Header from "./Header";
import Results from "./Results";
import { useSelector, useDispatch } from "src/store";
import { getEvents } from "src/slices/calendar";

function JobList() {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.calendar);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <Page title="Job List">
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          paddingY: 8,
        }}
      >
        <Container maxWidth={false}>
          <Header />
          {events && (
            <Box mt={3}>
              <Results jobs={events} />
            </Box>
          )}
        </Container>
      </Box>
    </Page>
  );
}

export default JobList;
