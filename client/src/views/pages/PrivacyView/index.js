import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import PrivacyPolicy from './PrivacyPolicy'

const useStyles = makeStyles(() => ({
  root: {}
}));

function PrivacyView() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Privacy"
    >
      <PrivacyPolicy />
    </Page>
  );
}

export default PrivacyView;
