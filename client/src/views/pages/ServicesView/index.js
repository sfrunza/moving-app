import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Local from './Local'
import Interstate from './Interstate'
import Packing from './Packing'
import Storage from './Storage'
import Header from './Header'

const useStyles = makeStyles(() => ({
  root: {}
}));

function ServicesView() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Services"
    >
      <Header />
      <Local />
      <Interstate />
      <Packing />
      <Storage />


    </Page>
  );
}

export default ServicesView;
