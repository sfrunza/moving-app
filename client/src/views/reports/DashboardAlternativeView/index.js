import React, {
  useCallback,
  useState,
  useEffect
} from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import CustomerActivity from './CustomerActivity';
import EarningsSegmentation from './EarningsSegmentation';
import FinancialStats from './FinancialStats';
import Header from './Header';
import LatestOrders from './LatestOrders';
import MostProfitableProducts from './MostProfitableProducts';
import Overview from './Overview';
import TopReferrals from './TopReferrals';
import axios from 'axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  container: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 64,
      paddingRight: 64
    }
  }
}));

function DashboardAlternativeView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [jobs, setJob] = useState(null);
  const [users, setUsers] = useState(null);

  const getJobs = useCallback(() => {
    axios
      .get('/api/v1/jobs.json')
      .then((response) => {
        if (isMountedRef.current) {
          setJob(response.data.slice(0, 6));
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

  if (!jobs || !users) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Dashboard Alternative"
    >
      <Container
        maxWidth={false}
        className={classes.container}
      >
        <Header />
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
          >
            <Overview />
          </Grid>
          <Grid
            item
            lg={8}
            xs={12}
          >
            <LatestOrders users={users} jobs={jobs}/>
          </Grid>
          <Grid
            item
            lg={4}
            xs={12}
          >
            <CustomerActivity users={users}/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default DashboardAlternativeView;
