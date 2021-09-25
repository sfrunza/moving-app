import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Container, Grid, Box, Typography, Divider } from "@material-ui/core";
import Page from "src/components/Page";
import Header from "./Header";
import CustomerDetails from "./CustomerDetails";
import moment from "moment";
import { useSelector, useDispatch } from "src/store";
import { cleanEvent, getEvent } from "src/slices/calendar";
import MovingDetails from "./MovingDetails";
import OtherActions from "./OtherActions";
import { getUsers } from "src/slices/employees";

const useStyles = makeStyles((theme) => ({
  root: {},
  grid: {
    marginTop: theme.spacing(2),
  },
}));

function JobDetailsView({ match, history }) {
  const classes = useStyles();
  const path = match.params.id;
  const { event } = useSelector((state) => state.calendar);
  const { users } = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const handleDeleteJob = (id) => {};

  useEffect(() => {
    dispatch(getEvent(path));
    dispatch(getUsers());
    return () => {
      dispatch(cleanEvent());
    };
  }, [dispatch, path]);

  if (!event) {
    return null;
  }

  const init = {
    job_duration: event.estimated_time[0],
    total_amount: event.estimated_quote[0],
    job_status: "Completed",
    crew: event.crew,
  };

  return (
    <Page className={classes.root} title="Job Details">
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          paddingY: 8,
        }}
      >
        <Container maxWidth={false}>
          <Header job={event} handleDeleteJob={handleDeleteJob} />
          <Grid className={classes.grid} container spacing={2}>
            <Grid item md={4} xl={3} xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CustomerDetails
                    user={event.user}
                    job={event}
                    init={init}
                    users={users}
                  />
                </Grid>
                <Grid item xs={12}>
                  <OtherActions
                    user={event.user}
                    event={event}
                    history={history}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={8} xl={9} xs={12}>
              <MovingDetails job={event} />
            </Grid>
            <Grid item md={3} xs={12}></Grid>
            <Divider style={{ marginTop: 40, width: "100%" }} />
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                mt={5}
                style={{
                  width: "100%",
                  maxWidth: 700,
                  textAlign: "center",
                }}
              >
                <Box>
                  <Typography variant="body1">
                    Status provided by InsightMoving. Last updated on{" "}
                    {moment(event?.updated_at).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                  </Typography>
                </Box>
              </Box>
              <Box
                style={{
                  width: "100%",
                  maxWidth: 700,
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                <Box mt={2} pb={10}>
                  <Typography variant="body2" color="textSecondary">
                    <span
                      style={{
                        color: "red",
                        marginRight: 5,
                        fontWeight: 600,
                      }}
                    >
                      NOTICE:
                    </span>
                    InsightMoving authorizes you to use our order status system
                    for your convinience only. Any other use of the system and
                    information is strictly prohibited.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Page>
  );
}

export default JobDetailsView;
