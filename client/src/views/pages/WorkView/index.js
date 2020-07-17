import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Services from './Services'

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'hidden'
  }
}));

function HomeView() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Insight Moving"
    >
      <Services />
    </Page>
  );
}

export default HomeView;
