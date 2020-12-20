import React, { useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NewLogin from './NewLogin';
import { LearnMoreLink } from 'src/components/atoms';
import { SectionHeader } from 'src/components/molecules';
import { Section } from 'src/components/organisms';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Page from 'src/components/Page';
import { colors, Box, Typography} from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    height: '100vh',
  },
  formContainer: {
    // height: '100%',
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
    maxWidth: 450,
    margin: 'auto',
    // justifyContent: 'center',
  },
  section: {
    // paddingTop: 74,
  },
  title: {
    color: '#fff'
  },
  bottomBox: {
    display: 'flex',
    justifyContent: 'space-around',
    '& a': {
      [theme.breakpoints.down('xs')]: {
        fontSize: 12,
      },
    },

  },
  bottomBoxText: {
    color: '#fff',
    '&:hover': {
      textDecoration: 'underline',
    }
  }
}));

const SignInPage = ({loginStatus, handleLogin, history}) => {
  const classes = useStyles();

  return (
    <Page title="Login " className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            title="Log in to Insight Moving"
            titleProps={{
              variant: 'h3',
              className: classes.title
            }}
          />
          <NewLogin handleLogin={handleLogin} history={history} loginStatus={loginStatus}/>
          <Box className={classes.bottomBox} mt={4}>
            <Typography
              component={RouterLink}
              variant='body2'
              to='#'
              className={classes.bottomBoxText}
            >
              Forgot password?
            </Typography>
            <Typography
              variant='body2'
              className={classes.bottomBoxText}
            >
              &middot;
            </Typography>
            <Typography
              component={RouterLink}
              variant='body2'
              to='#'
              className={classes.bottomBoxText}
            >
              Don't have an account?
            </Typography>
            <Typography
              variant='body2'
              className={classes.bottomBoxText}
            >
              &middot;
            </Typography>
            <Typography
              component={RouterLink}
              variant='body2'
              to='/privacy'
              className={classes.bottomBoxText}
            >
              Privacy Policy
            </Typography>
          </Box>
        </div>
      </Section>
    </Page>
  );
};

export default SignInPage;
