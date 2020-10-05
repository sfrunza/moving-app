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
  const [job, setJob] = useState(null);
  const jobPath = match.params.jobId;
  const [jobDetails, setJobDetails] = useState();

  useEffect(() => {
    let mounted = true;


    const fetchJob = () => {
      axios.get(`/api/v1/jobs/${jobPath}`).then((response) => {
        if (mounted) {
          setJob(response.data.job);
          setJobDetails(response.data.job);
        }
      });
    };

    fetchJob();

    return () => {
      mounted = false;
    };
  }, [jobPath]);

  if (!job || !jobDetails) {
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
                userId={job.user_id}
                job={jobDetails}
              />
              <OtherActions
                job={job}
                userId={job.user_id}
                className={classes.otherActions}
                setJobDetails={setJobDetails}
              />
            </Grid>
          </Grid>
          <Grid
            item
            md={8}
            xl={9}
            xs={12}
          >
            <MovingDetails job={jobDetails} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default JobDetails;
