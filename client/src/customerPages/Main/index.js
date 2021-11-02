import React, { useEffect, useState, useCallback } from "react";
// import { useSelector } from 'react-redux';
import PropTypes from "prop-types";
import {
  Grid,
  makeStyles,
  Typography,
  Divider,
  Box,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Page from "src/components/Page";
import SectionHeader from "src/components/SectionHeader";
import moment from "moment";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";
import { useSelector } from "src/store";
import StatusLabel from "src/components/StatusLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    height: "100%",
  },
  jobBox: {
    display: "flex",
    flexDirection: "column",
    boxShadow: theme.shadows[1],
    borderRadius: theme.spacing(1),
    maxWidth: 300,
    padding: theme.spacing(2),
    margin: "1rem auto",
    "&:hover": {
      cursor: "pointer",
      boxShadow: theme.shadows[2],
    },
  },
  recent: {
    marginTop: theme.spacing(3),
  },
  statusBox: {
    marginTop: "-10px",
    "& span ": {
      fontSize: "10px",
      backgroundColor: "transparent",
    },
  },
  jobs: {
    margin: 4,
    fontWeight: 600,
    fontSize: 16,
  },
  jobsStats: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    marginTop: theme.spacing(3),
    maxWidth: 400,
    margin: "auto",
  },
}));

function Main({ className, handleUserUpdate, ...rest }) {
  const classes = useStyles();
  const history = rest.history;
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const { customer } = useSelector((state) => state.customers);

  const getCity = (string) => {
    var arr = string.split(",");
    var fst = arr.splice(1, 2).join(",");
    return fst;
  };

  // const theJobs = useCallback(
  //   (status) => {
  //     let total = 0;
  //     if (jobs) {
  //       for (let i = 0; i < jobs.length; i++) {
  //         if (jobs[i].job_status === status) {
  //           total += 1;
  //         }
  //       }
  //     }

  //     return total;
  //   },
  //   [jobs]
  // );

  // const fetchJob = useCallback(
  //   (id) => {
  //     isMountedRef.current = true;
  //     axios.get(`/api/v1/jobs/${id}`).then((response) => {
  //       if (isMountedRef.current) {
  //         let job = response.data;
  //         setJob(job);
  //       }
  //     });
  //     return () => {
  //       setJob(null);
  //       isMountedRef.current = false;
  //     };
  //   },
  //   [isMountedRef, jobs[0]]
  // );

  // useEffect(() => {
  //   fetchJob(jobs[0].id);
  //   theJobs();
  // }, [fetchJob, theJobs]);

  if (!customer) {
    return null;
  }

  return (
    <Page className={classes.root} title="Account | Company Name">
      <SectionHeader
        title="Account overview"
        disableGutter
        titleVariant="h5"
        subtitle={`Use the ${
          isMd ? "sidebar" : "menu"
        } to navigate through your account`}
      />
      <Divider />
      <Grid container style={{ alignItems: "center" }}>
        <Grid item xs={12} sm={6} className={classes.recent}>
          <Grid item>
            <Typography variant="body2" align="center">
              <b>Your lates move</b>
            </Typography>
          </Grid>
          <Grid item>
            <Box
              mt={2}
              className={classes.jobBox}
              onClick={() =>
                history.push(`/account/requests/${customer.jobs[0].id}`)
              }
            >
              <Typography variant="body2" align="center">
                <b>
                  {moment(customer.jobs[0]?.pick_up_date).format(
                    "dddd, MMMM D, YYYY"
                  )}
                </b>
              </Typography>
              <Box
                flexDirection="row"
                display="flex"
                justifyContent="space-evenly"
              >
                <Typography variant="body2" align="center">
                  {customer.jobs[0].origin.city},{" "}
                  {customer.jobs[0].origin.state}
                </Typography>
                <Typography variant="body2" align="center">
                  <ArrowRightAltRoundedIcon />
                </Typography>
                <Typography variant="body2" align="center">
                  {customer.jobs[0].destination.city},{" "}
                  {customer.jobs[0].destination.state}
                </Typography>
              </Box>
              <Box
                flexDirection="row"
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Typography variant="body2" align="center">
                  {customer.jobs[0].job_size}
                </Typography>
                <Typography variant="body2" align="center">
                  <StatusLabel status={customer.jobs[0].job_status} />
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="body2" align="center">
              placeholder
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box className={classes.jobsStats}>
        <Typography variant="body2" align="center">
          <span className={classes.jobs}>{customer.jobs.length}</span>
          {customer.jobs.length > 1 ? "jobs" : "job"}
        </Typography>
        {/* {theJobs("Completed") === 0 ? null : (
          <Typography variant="body2" align="center">
            <span className={classes.jobs}>{theJobs("Completed")}</span>
            completed
          </Typography>
        )} */}
        {/* {theJobs("Confirmed") === 0 ? null : (
          <Typography variant="body2" align="center">
            <span className={classes.jobs}>{theJobs("Confirmed")}</span>
            confirmed
          </Typography>
        )}
        {theJobs("Canceled") === 0 ? null : (
          <Typography variant="body2" align="center">
            <span className={classes.jobs}>{theJobs("Canceled")}</span>
            canceled
          </Typography>
        )} */}
      </Box>
    </Page>
  );
}

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
