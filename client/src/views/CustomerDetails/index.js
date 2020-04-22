import React, { useState, useEffect } from 'react';
import axios from 'src/utils/axios';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Tabs,
  Tab,
  Divider,
  colors
} from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import Summary from './Summary';
import Invoices from './Invoices';
import Logs from './Logs';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  tabs: {
    marginTop: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

function CustomerManagementDetails({ match, history }) {
  const classes = useStyles();
  const { id, tab: currentTab } = match.params;

  const tabs = [
    { value: 'summary', label: 'Summary' },
    { value: 'invoices', label: 'Invoices' },
    { value: 'logs', label: 'Logs' }
  ];

  const handleTabsChange = (event, value) => {
    history.push(value);
  };

  const [customer, setCustomer] = useState();

  useEffect(() => {
    let mounted = true;

    const fetchCustomer = () => {
      axios.get(`http://localhost:3001/api/v1/customers/${match.params.id}`).then((response) => {
        if (mounted) {
          setCustomer(response.data.customer);
        }
      });
    };

    fetchCustomer();

    return () => {
      mounted = false;
    };
  }, []);

  if (!customer) {
    return null;
  }


  if (!currentTab) {
    return <Redirect to={`/admin/customers/${match.params.id}/summary`} />;
  }

  if (!tabs.find((tab) => tab.value === currentTab)) {
    return <Redirect to="/errors/error-404" />;
  }

  return (
    <Page
      className={classes.root}
      title="Customer Management Details"
    >
      <Container maxWidth={false}>
        <Header customer={customer}/>
        <Tabs
          className={classes.tabs}
          onChange={handleTabsChange}
          scrollButtons="auto"
          value={currentTab}
          variant="scrollable"
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.value}
              label={tab.label}
              value={tab.value}
            />
          ))}
        </Tabs>
        <Divider className={classes.divider} />
        <div className={classes.content}>
          {currentTab === 'summary' && <Summary match={match} history={history}/>}
          {currentTab === 'invoices' && <Invoices />}
          {currentTab === 'logs' && <Logs />}
        </div>
      </Container>
    </Page>
  );
}

CustomerManagementDetails.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default CustomerManagementDetails;
