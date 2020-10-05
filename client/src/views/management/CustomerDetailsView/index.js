import React, {
  useCallback,
  useState,
  useEffect
} from 'react';
import {
  Box,
  Container,
  Divider,
  Tab,
  Tabs,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import axios from 'axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Header from './Header';
import Details from './Details';
import Jobs from './Jobs';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function CustomerDetailsView({ match, history }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [customer, setCustomer] = useState(null);
  const [currentTab, setCurrentTab] = useState('details');
  const path = match.params.id;
  const tabs = [
    { value: 'details', label: 'Details' },
    { value: 'invoices', label: 'Jobs' },
  ];

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  const getCustomer = useCallback(() => {
      axios.get(`/api/v1/users/${path}`)
      .then((response) => {
        if (isMountedRef.current) {
          setCustomer(response.data.user);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getCustomer();
  }, [getCustomer]);

  if (!customer) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Customer Details"
    >
      <Container maxWidth={false}>
        <Header customer={customer} />
        <Box mt={3}>
          <Tabs
            onChange={handleTabsChange}
            scrollButtons="auto"
            value={currentTab}
            variant="scrollable"
            textColor="secondary"
            className={classes.tabs}
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
              />
            ))}
          </Tabs>
        </Box>
        <Divider />
        <Box mt={3}>
          {currentTab === 'details' && <Details customer={customer} />}
          {currentTab === 'invoices' && <Jobs customer={customer}/>}
        </Box>
      </Container>
    </Page>
  );
}

export default CustomerDetailsView;
