import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import { deepPurple, amber, teal, blueGrey } from '@material-ui/core/colors'
import withWidth from '@material-ui/core/withWidth';
import { Link as RouterLink } from 'react-router-dom';

import { Grid, Typography, Button, Drawer, Toolbar, Container, Box, useMediaQuery } from '@material-ui/core';
import { SectionHeader, TypedText } from 'src/components/molecules';
import { Calculator } from 'src/common';
import { makeStyles, useTheme} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
  },
  typed: {
    fontWeight: 'bold',
    color: 'orange'
  },
  calculator: {
    padding: theme.spacing(3, 2),
    maxWidth: 800,
    margin: '0 auto',
  },
  drawer: {
    borderRadius: '16px 16px 0px 0px',
  },
  button: {
    borderRadius: '24px',
    border: '1px solid #673ab7',
    color: '#673ab7',
    padding: '10px 20px',
    backgroundColor: '#fff',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#673ab7',
      border: 'none',
    },
  },
  textWhite: {
    color: 'white',
  },
}));

function Header({ className, ...rest }) {

  const classes = useStyles();
  const [openBottombar, setOpenBottombar] = React.useState(false);

  const handleBottombarOpen = () => {
    setOpenBottombar(true);
  };

  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={
          <>
            <span className={classes.textWhite}>
              Our Work
            </span>
            <br />
            <TypedText
              component="span"
              variant="h1"
              className={classes.typed}
              typedProps={{
                strings: [
                  'A Badass',
                  'Moving Company',
                  'In Boston',
                ],
                typeSpeed: 100,
                loop: true,
              }}
            />
          </>
        }
        subtitle={
          <span className={classes.textWhite}>
            Every move includes professional furniture protection at no extra charge.
          </span>
        }
        align="center"
        titleProps={{
          variant: 'h1',
        }}
        subtitleProps={{
          variant: 'h4',
        }}
        data-aos="fade-up"
        disableGutter
      />
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default withWidth()(Header);