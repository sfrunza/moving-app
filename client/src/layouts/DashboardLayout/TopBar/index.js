import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  SvgIcon
} from '@material-ui/core';
import { Menu as MenuIcon } from 'react-feather';
import Logo from 'src/components/Logo';
import { THEMES } from 'src/constants';
import Account from './Account';
import Contacts from './Contacts';
import Notifications from './Notifications';
import Search from './Search';
import Settings from './Settings';
import logo from 'src/assets/img/logowhite.png'

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: '1',
    ...theme.name === THEMES.LIGHT ? {
      boxShadow: 'none',
      backgroundColor: theme.palette.primary.main
    } : {},
    ...theme.name === THEMES.ONE_DARK ? {
      backgroundColor: theme.palette.background.default
    } : {}
  },
  toolbar: {
    minHeight: 54
  }
}));

function TopBar({
  className,
  onMobileNavOpen,
  user,
  handleLogout,
  ...rest
}) {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <SvgIcon fontSize="small">
              <MenuIcon />
            </SvgIcon>
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <RouterLink to="/">
            <Logo logo={logo}/>
          </RouterLink>
        </Hidden>
        <Box
          ml={2}
          flexGrow={1}
        />
        <Settings />
        <Box ml={2}>
          <Account user={user} handleLogout={handleLogout}/>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
