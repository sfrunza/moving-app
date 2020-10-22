import React, { useEffect, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid } from '@material-ui/core';
import axios from 'axios';
import Page from 'src/components/Page';
import Header from './Header';
import CustomerDetails from './CustomerDetails';
import OtherActions from './OtherActions'
import MovingDetails from './MovingDetails';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  root: {
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

function JobDetailsView({ match, history }) {
  const classes = useStyles();
  const [job, setJob] = useState();
  const path = match.params.id;
  const isMountedRef = useIsMountedRef();
  const [images, setImages] = useState();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteImage = (id) => {
    fetch(`/api/v1/images/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        const newList = images.filter((item) => item.id !== id);
        setImages(newList)
        enqueueSnackbar('Image Deleted', {
          variant: 'error'
        });
      })
  }

  const handleDeleteJob = (job) => {
    fetch(`/api/v1/jobs/${path}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        history.push('/app/jobs')
      })
  }

  const getJob = useCallback(() => {
    axios
      .get(`/api/v1/jobs/${path}`)
      .then((response) => {
        if (isMountedRef.current) {
          setJob(response.data);
          setImages(response.data.images)
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getJob()
  }, [path, setImages, setJob]);

  if (!job || !images) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Job Details"
    >
      <Container maxWidth={false}>
        <Header job={job.job} handleDeleteJob={handleDeleteJob}/>
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
              <CustomerDetails job={job.job} />
              <OtherActions
                job={job.job}
                userId={job.job.user_id}
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
            <MovingDetails job={job} images={images} setImages={setImages} handleDeleteImage={handleDeleteImage}/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default JobDetailsView;
