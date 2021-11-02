import React, { useEffect, useState, useCallback } from "react";
import { makeStyles } from "@material-ui/styles";
import { Container, Divider, Grid, Box, Typography } from "@material-ui/core";
import axios from "axios";
import Page from "src/components/Page";
import MovingDetails from "./MovingDetails";
import { useSnackbar } from "notistack";
import moment from "moment";
import { useSelector } from "src/store";
// import useIsMountedRef from "src/components/useIsMountedRef";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    // padding: theme.spacing(3),
    // [theme.breakpoints.down("xs")]: {
    //   padding: theme.spacing(1),
    // },
  },
}));

function JobDetails({ match, ...rest }) {
  const classes = useStyles();
  const { customer } = useSelector((state) => state.customers);
  // const job = customer.jobs[path]
  const [images, setImages] = useState();
  const path = match.params.id;
  const job = customer.jobs[path - 1];
  const { enqueueSnackbar } = useSnackbar();
  // const isMountedRef = useIsMountedRef();

  const removeAddPickup = (id) => {
    let values = {
      ...job,
      origin: {
        ...job.origin,
        add_address: null,
      },
    };
    // setJob(values);
    enqueueSnackbar("Address Removed", {
      variant: "error",
    });
    fetch(`/api/v1/origins/${id}`, {
      method: "PUT",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleDeleteImage = (id) => {
    fetch(`/api/v1/images/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      const newList = images.filter((item) => item.id !== id);
      setImages(newList);
      enqueueSnackbar("Image Deleted", {
        variant: "error",
      });
    });
  };

  console.log(path);

  // const getJob = useCallback(() => {
  //   isMountedRef.current = true;
  //   axios.get(`/api/v1/jobs/${path}`).then((response) => {
  //     if (isMountedRef.current) {
  //       setJob(response.data);
  //       setImages(response.data.images);
  //     }
  //   });
  //   return () => {
  //     isMountedRef.current = false;
  //     setJob(null);
  //     setImages(null);
  //   };
  // }, [path, isMountedRef]);

  // useEffect(() => {
  //   getJob();
  // }, [getJob, JSON.stringify(job)]);

  // if (!job || !images) {
  //   return null;
  // }

  console.log(job);

  return (
    <Page
      className={classes.root}
      title={`Request ID ${job.id} | Company Name`}
    >
      <Container maxWidth={false}>
        <MovingDetails job={job} />
        <Divider />
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
              <Typography variant="body1" color="textPrimary">
                Status provided by InsightMoving. Last updated on{" "}
                {moment(job.updated_at).format("MMMM Do YYYY, h:mm:ss a")}
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
            <Box mt={2} pb={4}>
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
                InsightMoving authorizes you to use our order status system for
                your convinience only. Any other use of the system and
                information is strictly prohibited.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Page>
  );
}

export default JobDetails;
