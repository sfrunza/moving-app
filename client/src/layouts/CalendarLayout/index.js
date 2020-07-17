import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import TopBar from './TopBar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
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

function CalendarLayout({ children, user, loggedInStatus, handleLogout, history }) {
  const classes = useStyles();

      return (
        <div className={classes.root}>
          <TopBar user={user} loggedInStatus={loggedInStatus} handleLogout={handleLogout} history={history}/>
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

CalendarLayout.propTypes = {
  children: PropTypes.any
};

export default CalendarLayout;
