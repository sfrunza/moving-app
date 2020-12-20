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
  SvgIcon,
  colors
} from '@material-ui/core';
import { Menu as MenuIcon } from 'react-feather';
import Logo from 'src/components/Logo';
import { THEMES } from 'src/constants';
import Account from './Account';
import logo from 'src/assets/img/looool.png'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 54,
    color: theme.palette.primary.main,
    borderBottom: `1px solid ${colors.grey[200]}`,
    zIndex: theme.zIndex.drawer + 100,
    ...theme.name === THEMES.LIGHT ? {
      boxShadow: 'none',
      backgroundColor: '#fff',
    } : {},
  },
  toolbar: {
    maxWidth: 1100,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    minHeight: 54,
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
            <Logo src={logo}/>
          </RouterLink>
        </Hidden>
        <Box
          ml={2}
          flexGrow={1}
        />
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
