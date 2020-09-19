import React, { useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NewLogin from './NewLogin';
import { LearnMoreLink } from 'src/components/atoms';
import { SectionHeader } from 'src/components/molecules';
import { Section } from 'src/components/organisms';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const useStyles = makeStyles(theme => ({
  root: {},
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
    maxWidth: 500,
    margin: `10em auto auto`,
  },
  section: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const SignInPage = ({loggedInStatus, handleLogin, history}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            title="Sign in"
            titleProps={{
              variant: 'h3',
            }}
          />
          <NewLogin handleLogin={handleLogin} history={history} loggedInStatus={loggedInStatus}/>
        </div>
      </Section>
    </div>
  );
};

export default SignInPage;
