import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import {
  Button,
  Container,
  Typography,
  makeStyles,
  Link
} from '@material-ui/core';
import PricingTable from './PricingTable';
import { deepPurple } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: 128,
    paddingBottom: 128
  },
  media: {
    height: 165,
    marginBottom: '3em',
    borderRadius: '3px'
  },
  subHeader: {
    color: deepPurple['A200']
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  },
  button: {
    display: 'flex',
    textTransform: 'uppercase',
    margin: '3em auto',
    width: '15em',
    justifyContent: 'center',
    padding: '0.7em',
    borderRadius: '4px',
    fontSize: '0.875rem',
    fontFamily: "Maison Neue Demi",
    [theme.breakpoints.down('sm')]: {
      display: 'flex'
    },
    color: deepPurple[600],
    backgroundColor: theme.palette.common.white,
    border: '1.4px solid',
    borderColor: deepPurple[500],
    '&:hover': {
      backgroundColor: deepPurple[50],
    }
  },
}));

function Local({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg" id='hourly-rates'>
        <Typography
          variant="h1"
          align="center"
          color="textPrimary"
        >
          Hourly Rates
        </Typography>
        <Typography
          component="p"
          variant="overline"
          align="center"
          className={classes.subHeader}
        >
          Our local moving and packing rates are hourly based with 15 minutes increment and a 2 hours minimum charge policy, in case your move takes less then 2 hours.
        </Typography>
        <PricingTable />
        <Link
          className={classes.button}
          color="textSecondary"
          component={RouterLink}
          to="/book"
          underline="none"
          variant="body2"
        >
          Book Us Now
        </Link>
      </Container>
    </div>
  );
}

Local.propTypes = {
  className: PropTypes.string
};

export default Local;
