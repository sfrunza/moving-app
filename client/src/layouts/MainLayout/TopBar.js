import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Toolbar,
  Link,
  makeStyles
} from '@material-ui/core';
import Logo from 'src/components/Logo';
import PersonIcon from '@material-ui/icons/Person';
import { deepPurple } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default
  },
  toolbar: {
    height: 64
  },
  logo: {
    marginRight: theme.spacing(2)
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    display: 'flex',
    alignItems: 'center',
    '& + &': {
      marginLeft: theme.spacing(2)
    },
    '&:hover': {
      color: deepPurple['A200']
    }
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  button: {
    fontFamily: "Maison Neue Demi",
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    '&:hover': {
      backgroundColor: deepPurple[700]
    },
    padding: '5px 10px',
    borderRadius: '4px'
  }
}));

function TopBar({ className, ...rest }) {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      color="default"
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <Logo className={classes.logo} />
        </RouterLink>
        <Box flexGrow={1} />
        <Box flexGrow={2} className={classes.box}>
          <Link
            className={classes.link}
            color="textSecondary"
            component={RouterLink}
            to="/services"
            underline="none"
            variant="body2"
          >
            Services
          </Link>
          <Link
            className={classes.link}
            color="textSecondary"
            component={RouterLink}
            to="/pricing"
            underline="none"
            variant="body2"
          >
            Pricing
          </Link>
          <Link
            className={classes.link}
            color="textSecondary"
            component={RouterLink}
            to="/docs"
            underline="none"
            variant="body2"
          >
            Gallery
          </Link>
          <Link
            className={classes.link}
            color="textSecondary"
            component={RouterLink}
            to="/docs"
            underline="none"
            variant="body2"
          >
            <PersonIcon style={{height: '0.9em'}}/>
            Client Login
          </Link>
        </Box>
        <Box flexGrow={1} />
        <Divider className={classes.divider} />
        <Link
          className={classes.button}
          color="textSecondary"
          component={RouterLink}
          to="/book"
          underline="none"
          variant="body2"
        >
          GET STARTED
        </Link>
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
