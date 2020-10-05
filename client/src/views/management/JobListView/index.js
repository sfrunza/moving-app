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
  const [users, setUsers] = useState(null);

  const getJobs = useCallback(() => {
    axios
      .get('/api/v1/jobs.json')
      .then((response) => {
        if (isMountedRef.current) {
          setJobs(response.data);
        }
      });
  }, [isMountedRef]);

  const getUsers = useCallback(() => {
    axios
      .get('/api/v1/users.json')
      .then((response) => {
        if (isMountedRef.current) {
          setUsers(response.data.users);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getJobs();
    getUsers();
  }, [getJobs, getUsers]);

  if (!jobs && !users) {
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
            <Results jobs={jobs} users={users}/>
          </Box>
        )}
      </Container>
    </Page>
  );
}

export default JobListView;
