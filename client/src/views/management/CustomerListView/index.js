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
    paddingBottom: theme.spacing(3)
  }
}));

function CustomerListView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [customers, setCustomers] = useState(null);
  const [jobs, setJobs] = useState(null);

  const getCustomers = useCallback(() => {
    axios
      .get('/api/v1/users.json')
      .then((response) => {
        if (isMountedRef.current) {
          let obj = response.data.users
          Object.keys(obj).forEach(key => {
            if (!obj[key].customer) delete obj[key];
          });
          setCustomers(obj);
        }
      });
  }, [isMountedRef]);

  const getJobs = useCallback(() => {
    axios
      .get('/api/v1/jobs.json')
      .then((response) => {
        if (isMountedRef.current) {
          let obj = response.data
          setJobs(obj);
        }
      })
  }, [isMountedRef]);

  useEffect(() => {
    getCustomers();
    getJobs()
  }, [getCustomers]);

  if (!customers || !jobs) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Customer List"
    >
      <Container maxWidth={false}>
        <Header />
        {customers && (
          <Box mt={3}>
            <Results customers={customers} jobs={jobs}/>
          </Box>
        )}
      </Container>
    </Page>
  );
}

export default CustomerListView;
