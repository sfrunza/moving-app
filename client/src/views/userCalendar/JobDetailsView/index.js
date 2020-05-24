import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid } from '@material-ui/core';
import axios from 'axios';
import Page from 'src/components/Page';
import Header from './Header';
import CustomerDetails from './CustomerDetails';
import MovingDetails from './MovingDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  grid: {
    marginTop: theme.spacing(2)
  }
}));

function JobDetails({ match, history }) {
  const classes = useStyles();
  const [job, setJob] = useState(null);
  const jobPath = match.params.jobId;

  useEffect(() => {
    let mounted = true;


    const fetchJob = () => {
      axios.get(`/api/v1/jobs/${jobPath}`).then((response) => {
        if (mounted) {
          setJob(response.data);
        }
      });
    };

    fetchJob();

    return () => {
      mounted = false;
    };
  }, []);

  if (!job) {
    return null;
  }

  const handleDelete = (job) => {
    fetch(`/api/v1/jobs/${jobPath}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        setJob(job)
        history.push('/app/management/jobs')
      })
  }

  return (
    <Page
      className={classes.root}
      title="Job Details"
    >
      <Container maxWidth={false}>
        <Header job={job} handleDelete={handleDelete}/>
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
            <CustomerDetails job={job} />
          </Grid>
          <Grid
            item
            md={8}
            xl={9}
            xs={12}
          >
            <MovingDetails job={job} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default JobDetails;
