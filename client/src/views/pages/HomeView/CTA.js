import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  Box,
  Button,
  Container,
  Typography,
  makeStyles,
  Link
} from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: 128,
    paddingBottom: 128,
  },
  browseButton: {
    fontFamily: "Maison Neue Demi",
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    '&:hover': {
      backgroundColor: deepPurple[700],
    },
    padding: '10px 10px',
    borderRadius: '4px',
    display: 'flex',
    width: '16em',
    justifyContent: 'center',
    margin: '2em auto',
    fontSize: '16px'
  },
  subHeader: {
    color: deepPurple['A200'],
    fontFamily: 'Maison Neue Demi',
  },
  link: {
    '&:hover' :{
      textDecoration: 'none'
    }
  }
}));

function CTA({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h1"
          align="center"
          color="textPrimary"
          style={{fontFamily: "Maison Neue Bold" }}
        >
          We make moving easy.
        </Typography>
        <Typography
          variant="h4"
          align="center"
          className={classes.subHeader}
        >
          Our quick application process takes only 2 minutes.
        </Typography>
          <Link
            className={classes.browseButton}
            color="textSecondary"
            component={RouterLink}
            to="/book"
            underline="none"
            variant="body2"
          >
            Request Your Move Online
          </Link>
      </Container>
    </div>
  );
}

CTA.propTypes = {
  className: PropTypes.string
};

export default CTA;
