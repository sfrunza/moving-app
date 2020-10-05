import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Breadcrumbs,
  Link,
  Typography,
  makeStyles
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles(() => ({
  root: {}
}));

function Header({ className, user, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          variant="body1"
          color="inherit"
          to="/app"
          component={RouterLink}
        >
          Dashboard
        </Link>
        <Link
          variant="body1"
          color="inherit"
          to="/app/customers"
          component={RouterLink}
        >
          Customers
        </Link>
        <Link
          variant="body1"
          color="inherit"
          to={`/app/customers/${user.id}`}
          component={RouterLink}
        >
          {user.first_name + " " + user.last_name}
        </Link>
        <Typography
          variant="body1"
          color="textPrimary"
        >
          Edit
        </Typography>
      </Breadcrumbs>
      <Typography
        variant="h3"
        color="textPrimary"
      >
        Edit Customer
      </Typography>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
