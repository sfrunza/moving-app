import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {}
}));

function Header({ customer, className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography
        component="h2"
        gutterBottom
        variant="overline"
      >
      <Link to="/admin/customers" style={{ color: '#4a4a4a' }}>
        <span style={{ position: 'relative', fontSize: '16px', marginRight: '3px' }}>&#171;</span>Customers
      </Link>
      </Typography>
      <Typography
        component="h1"
        variant="h3"
      >
        {customer.first_name} {customer.last_name.toUpperCase()}
      </Typography>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.object
};

export default Header;
