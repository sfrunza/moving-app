import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid } from '@material-ui/core';
import axios from 'axios';
import Page from 'src/components/Page';
import Header from './Header';
import CustomerDetails from './CustomerDetails';
import MovingDetails from './MovingDetails';
import OtherActions from './OtherActions'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  grid: {
    marginTop: theme.spacing(2)
  },
  otherActions: {
    marginTop: '2em'
  }
}));

function JobDetails({ match, history }) {
  const classes = useStyles();
  const jobPath = match.params.jobId;
  const [jobDetails, setJobDetails] = useState();
  const [images, setImages] = useState();

  useEffect(() => {
    let mounted = true;


    const fetchJob = () => {
      axios.get(`/api/v1/jobs/${jobPath}`).then((response) => {
        if (mounted) {
          setJobDetails(response.data.job);
          setImages(response.data.images)
        }
      })
      .catch(error => {history.push('/calendar')})
    };

    fetchJob();

    return () => {
      mounted = false;
    };
  }, [jobPath]);

  if (!jobDetails) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Job Details"
    >
      <Container maxWidth={false}>
        <Header job={jobDetails}/>
        <Grid
          className={classes.grid}
          container
          spacing={3}
        >
          <Grid
            item
            md={4}
            xl={3}
            xs={12}
          >
            <Grid item>
              <CustomerDetails
                userId={jobDetails.user_id}
                job={jobDetails}
              />
              <OtherActions
                job={jobDetails}
                userId={jobDetails.user_id}
                className={classes.otherActions}
                history={history}
              />
            </Grid>
          </Grid>
          <Grid
            item
            md={8}
            xl={9}
            xs={12}
          >
            <MovingDetails job={jobDetails} images={images} setImages={setImages}/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default JobDetails;
