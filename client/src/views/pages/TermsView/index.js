import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Main from './Main'

const useStyles = makeStyles(() => ({
  root: {}
}));

function TermsView() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Privacy"
    >
      <Main />
    </Page>
  );
}

export default TermsView;
