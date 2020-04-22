import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import axios from 'src/utils/axios';
import CustomerInfo from './CustomerInfo';
import Invoices from './Invoices';
import SendEmails from './SendEmails';
import OtherActions from './OtherActions';

const useStyles = makeStyles(() => ({
  root: {}
}));

function Summary({ match, history, className, ...rest }) {
  const classes = useStyles();
  const [customer, setCustomer] = useState();

  const handleUpdate = (customer) => {
    fetch(`http://localhost:3001/api/v1/customers/${customer.id}`,
    {
      method: 'PUT',
      body: JSON.stringify({customer: customer}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        setCustomer(customer)
      })
  }

  const handleDelete = (customer) => {
    fetch(`http://localhost:3001/api/v1/customers/${customer.id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        setCustomer(customer)
        history.push('/admin/customers')
      })
  }

  useEffect(() => {
    let mounted = true;

    const fetchCustomer = () => {
      axios.get(`http://localhost:3001/api/v1/customers/${match.params.id}.json`).then((response) => {
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

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
    >
      <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <CustomerInfo
          customer={customer}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </Grid>
    </Grid>
  );
}

Summary.propTypes = {
  className: PropTypes.string
};

export default Summary;
