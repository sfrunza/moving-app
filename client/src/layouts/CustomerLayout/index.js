import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Avatar, Box } from '@material-ui/core';
import NavBar from './NavBar';
import TopBar from './TopBar';
import LoadingScreen from 'src/components/LoadingScreen';
import { Redirect } from 'react-router-dom';
import { SectionHeader } from 'src/components/molecules';
import { Section } from 'src/components/organisms';
import clsx from 'clsx';
import axios from 'axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // height: '100%',
    // // overflow: 'hidden',
    // maxWidth: 1100,
    // margin: 'auto',
    // flexWrap: 'wrap',
    // justifyContent: 'space-between',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    background: '#fff',
    margin: '0em 1em',
    boxShadow: '0 2px 10px 0 rgba(23,70,161,.11)',
    borderRadius: '8px',
    width: '100%',
    height: 'fit-content',
    // overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      // paddingLeft: 256,
      margin: '0em 2em',
      flex: '1 1 auto',
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    // overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    // overflow: 'auto'
  },
  backgroundBlue: {
    background: theme.palette.primary.main,
  },
  section: {
    width: '100%',
    height: '100%',
    display: 'flex',
    maxWidth: 1100,
    margin: 'auto',
    alignItems: 'center',
    marginTop: '0px',
    justifyContent: 'center',
    padding: theme.spacing(12, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(12, 5),
      justifyContent: 'flex-start',
    },
  },
  childrenSection: {
    maxWidth: 1100,
    margin: 'auto',
    display: 'flex',
    height: '100%',
    marginTop: '-30px',
    paddingBottom: '10em',
  },
  avatar :{
    width: '80px',
    height: '80px',
    margin: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      width: 130,
      height: 130,
      margin: theme.spacing(0, 3),
    },
  },
  header: {
    display: 'inline',
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
      minWidth: 300,
    },
    minWidth: 270,
  },
  textWhite: {
    color: '#fff',
  },
  title: {
    fontWeight: 'bold',
  },
  jobs: {
    margin: 4,
    fontWeight: 600,
    fontSize: 16,
  }
}));

function CustomerLayout({ children, user, handleLogout, history }) {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const fullName = user.first_name + " " + user.last_name
  const isMountedRef = useIsMountedRef();
  const [jobs, setJobs] = useState(null);

  const getJobs = useCallback(() => {
    axios
      .get(`/api/v1/users/${user.id}`)
      .then((response) => {
        if (isMountedRef.current) {
          setJobs(response.data.jobs);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getJobs();
  }, [getJobs]);

  if (!jobs) {
    return null;
  }
  let total = jobs.length;
  let completed = 0;
  let confirmed = 0;
  for(let i = 0; i < total; i++) {
    if (jobs[i].job_status === "Completed") {
      completed ++;
    } else if (jobs[i].job_status === "Confirmed") {
      confirmed += 1
    }
  }


    return (
      <div className={classes.root}>
        <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} user={user} handleLogout={handleLogout} />
        <div className={classes.backgroundBlue}>
          <div className={classes.section}>
            <Avatar
              alt={user.last_name}
              src="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
              className={classes.avatar}
            />
            <SectionHeader
              title={fullName}
              subtitle={
                <Box
                  display='flex'
                  justifyContent="space-evenly"
                >
                  <Box>
                    <span className={classes.jobs}>{total}</span>jobs
                  </Box>
                  <Box>
                    <span className={classes.jobs}>{confirmed}</span>confirmed
                  </Box>
                  <Box>
                    <span className={classes.jobs}>{completed}</span>completed
                  </Box>
                </Box>
              }
              disableGutter
              className={classes.header}
              titleProps={{
                className: clsx(classes.title, classes.textWhite),
                variant: 'h2',
              }}
              subtitleProps={{
                className: classes.textWhite,
              }}
            />
          </div>
        </div>
        <div className={classes.childrenSection}>
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
      </div>
    );

}

CustomerLayout.propTypes = {
  children: PropTypes.any
};

export default CustomerLayout;
