import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import NavBar from './NavBar';
import TopBar from './TopBar';
import LoadingScreen from 'src/components/LoadingScreen';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 54,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
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

function DashboardLayout({ children, user, loggedInStatus, handleLogout, history }) {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  if (user.email === undefined) {
    return <LoadingScreen />
  }
  else if (!user.admin) {
    return <Redirect to="/404" />
  } else {
    return (
      <div className={classes.root}>
        <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} user={user} handleLogout={handleLogout} />
        <NavBar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
          user={user}
        />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

DashboardLayout.propTypes = {
  children: PropTypes.any
};

export default DashboardLayout;
