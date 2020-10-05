import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import TopBar from './TopBar';
import Sidebar from './Sidebar';
import LoadingScreen from 'src/components/LoadingScreen';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
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
  }
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

  if (user.email === undefined) {
    return <LoadingScreen />
  }
  else if (user.customer) {
    return <Redirect to="/404" />
  } else {
    return (
      <div
        className={clsx({
          [classes.root]: true,
        })}
      >
        <TopBar
          onSidebarOpen={handleSidebarOpen}
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
      </div>
    );
  }
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
