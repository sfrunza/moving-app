import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid } from '@material-ui/core';
import axios from 'axios';
import Page from 'src/components/Page';
import Header from './Header';
import CustomerDetails from './CustomerDetails';
import MovingDetails from './MovingDetails';
import OtherActions from './OtherActions';
import LoadingScreen from 'src/components/LoadingScreen';

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

function JobDetails({ match, history, user, ...rest }) {
  const classes = useStyles();
  const [jobs, setJobs] = useState();
  const path = user.id
  const [jobDetails, setJobDetails] = useState(() => JSON.parse(localStorage.getItem('jobDetails')));

  useEffect(() => {
    let mounted = true;


    const fetchJobs = () => {

      axios.get(`/api/v1/users/${path}`).then((response) => {
        if (mounted) {
          setJobs(response.data.jobs);
          setJobDetails(response.data.jobs[0]);
          localStorage.setItem('jobDetails', JSON.stringify(response.data.jobs[0]))
        }
      });
    };
    fetchJobs();

    return () => {
      mounted = false;
    };
  }, [path]);

  if (!jobs || !jobDetails) {
    return <LoadingScreen />;
  }
console.log(jobDetails);

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
              <CustomerDetails user={user} job={jobDetails} />
              <OtherActions jobs={jobs} className={classes.otherActions} setJobDetails={setJobDetails}/>
            </Grid>
          </Grid>
          <Grid
            item
            md={8}
            xl={9}
            xs={12}
          >
            <MovingDetails job={jobDetails}/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default JobDetails;
