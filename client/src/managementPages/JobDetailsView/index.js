import React, { useEffect, useState } from "react";
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
import ChangesMade from "./ChangesMade";
import { getRates } from "src/slices/rates";

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
  const { rates } = useSelector((state) => state.rates);
  const cloned = {};
  Object.assign(cloned, event);
  const [formState, setFormState] = useState(event);
  const [recalc, setRecalc] = useState(false);
  const [saveAndUpdate, setSaveAndUpdate] = useState(false);
  const dispatch = useDispatch();

  const shallowEqual = (object1, object2) => {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    dispatch(getEvent(path));
    dispatch(getUsers());
    dispatch(getRates());
    return () => {
      dispatch(cleanEvent());
    };
  }, [dispatch, path]);

  useEffect(() => {
    setFormState(event);
    return () => {
      setFormState(null);
    };
  }, [event]);

  if (!event || !formState) {
    return null;
  }

  console.log(formState);

  const init = {
    job_duration: event.estimated_time[0],
    total_amount: event.estimated_quote[0],
    job_status: "Completed",
    user_ids: [],
  };

  // console.log(shallowEqual(event, formState));

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
          <Header job={event} history={history} />
          <Grid className={classes.grid} container spacing={2}>
            <Grid item md={4} xl={3} xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CustomerDetails
                    customer={event.customer}
                    job={event}
                    init={init}
                    users={users}
                  />
                </Grid>
                {(!shallowEqual(event, formState) ||
                  event.job_type === "Moving from Storage") && (
                  <Grid item xs={12}>
                    <ChangesMade
                      formState={formState}
                      event={event}
                      dispatch={dispatch}
                      setFormState={setFormState}
                      rates={rates}
                      recalc={recalc}
                      setRecalc={setRecalc}
                      saveAndUpdate={saveAndUpdate}
                      setSaveAndUpdate={setSaveAndUpdate}
                    />
                  </Grid>
                )}
                <Grid item xs={12}>
                  <OtherActions
                    customer={event.customer}
                    event={event}
                    history={history}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={8} xl={9} xs={12}>
              <MovingDetails
                job={event}
                dispatch={dispatch}
                setFormState={setFormState}
                formState={formState}
                recalc={recalc}
                setRecalc={setRecalc}
                saveAndUpdate={saveAndUpdate}
                setSaveAndUpdate={setSaveAndUpdate}
                rates={rates}
              />
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
