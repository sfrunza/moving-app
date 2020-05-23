import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import axios from 'axios';
import Page from 'src/components/Page';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Header from './Header';
import Results from './Results';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: 100
  }
}));

function JobListView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [jobs, setJobs] = useState(null);

  const getJobs = useCallback(() => {
    axios
      .get('http://localhost:3001/api/v1/jobs.json')
      .then((response) => {
        if (isMountedRef.current) {
          setJobs(response.data);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getJobs();
  }, [getJobs]);

  if (!jobs) {
    return null;
  }
  return (
    <Page
      className={classes.root}
      title="Job List"
    >
      <Container maxWidth={false}>
        <Header />
        {jobs && (
          <Box mt={5}>
            <Results jobs={jobs} />
          </Box>
        )}
      </Container>
    </Page>
  );
}

export default JobListView;
