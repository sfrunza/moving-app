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
  },
  grid: {
    marginTop: theme.spacing(2)
  },
  otherActions: {
    marginTop: '2em'
  },
  container: {
    padding: theme.spacing(3),
  }
}));

function JobDetails({ match, history, user, ...rest }) {
  const classes = useStyles();
  const [job, setJob] = useState();
  const [images, setImages] = useState();
  const path = match.params.id

  useEffect(() => {
    let mounted = true;

    const fetchJob = () => {
      axios.get(`/api/v1/jobs/${path}`).then((response) => {
        if (mounted) {
          setJob(response.data);
          setImages(response.data.images)
        }
      });
    };
    fetchJob();

    return () => {
      mounted = false;
      setJob(null);
      setImages(null)
    };
  }, [path]);

  if (!job || !images) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Job Details &#8226; InsightMoving"
    >
      <Container maxWidth={false} className={classes.container}>
        <MovingDetails job={job} images={images} setImages={setImages}/>
      </Container>
    </Page>
  );
}

export default JobDetails;
