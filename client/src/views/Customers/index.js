import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import axios from 'src/utils/axios';
import Page from 'src/components/Page';
import SearchBar from 'src/components/SearchBar';
import Header from './Header';
import Results from './Results';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

function CustomerManagementList() {
  const classes = useStyles();
  const [customers, setCustomers] = useState([]);

  const handleFilter = (e) => {};

  const handleSearch = (e) => {};

  useEffect(() => {
    let mounted = true;

    const fetchCustomers = () => {
      axios.get('http://localhost:3001/api/v1/customers.json').then((response) => {
        if (mounted) {
          setCustomers(response.data);
        }
      });
    };

    fetchCustomers();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Page
      className={classes.root}
      title="Customer Management List"
    >
      <Container maxWidth={false}>
        <Header />
        <SearchBar
          onFilter={handleFilter}
          onSearch={handleSearch}
        />
        {customers && (
          <Results
            className={classes.results}
            customers={customers}
          />
        )}
      </Container>
    </Page>
  );
}

export default CustomerManagementList;
