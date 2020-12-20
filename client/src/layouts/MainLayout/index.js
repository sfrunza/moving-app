import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Toolbar, IconButton, AppBar } from '@material-ui/core';
import TopBar from './TopBar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: 'fit-content',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  },
  appBarBottom: {
    top: 'auto',
    bottom: 0,
    background: 'transparent',
    boxShadow: 'none',
  },
  toolbarBottom: {
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  phoneIconButton: {
    position: 'absolute',
    right: theme.spacing(3),
    left: 'auto',
    top: theme.spacing(-3),
    background: theme.palette.success.main,
    width: 55,
    height: 55,
    boxShadow: '0 2px 6px 0 rgba(0,0,0,.4)',
    '&:hover': {
      background: theme.palette.success.main,
    },
  },
  phoneIcon: {
    color: 'white',
    width: 30,
    height: 30,
  },
}));

function MainLayout({ children, user, loggedInStatus, handleLogout, history }){
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const pages = {
    landings: {
      title: 'Landings',
      id: 'landing-pages',
      children: {
        services: {
          groupTitle: 'Services',
          pages: [
            {
              title: 'Home',
              href: '/',
            },
            {
              title: 'Services',
              href: '/services',
            },
            {
              title: 'Pricing',
              href: '/pricing',
            },
            {
              title: 'Our Work',
              href: '/work',
            },
            {
              title: 'Client Login',
              href: '/sign_in',
            },
          ],
        },
      },
    },
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;


  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <TopBar
        onSidebarOpen={handleSidebarOpen}
        pages={pages}
        loggedInStatus={loggedInStatus}
        handleLogout={handleLogout}
        user={user}
        history={history}
      />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
        loggedInStatus={loggedInStatus}
        handleLogout={handleLogout}
        user={user}
      />
      <main>{children}</main>
      {history.location.pathname !== '/login' && history.location.pathname !== '/book'  &&
      <AppBar position="fixed" className={classes.appBarBottom}>
        <Toolbar disableGutters className={classes.toolbarBottom}>
          <IconButton
            className={classes.phoneIconButton}
            href="#"
          >
            <PhoneRoundedIcon className={classes.phoneIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      }

      {history.location.pathname !== '/login' && history.location.pathname !== '/book' && <Footer pages={pages} />}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
