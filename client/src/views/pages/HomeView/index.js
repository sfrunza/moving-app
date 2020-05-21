import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import SubHeader from './SubHeader'
import Rates from './Rates';
import Services from './Services'
import Testimonials from './Testimonials';
import CTA from './CTA';
import FAQS from './FAQS';

const useStyles = makeStyles(() => ({
  root: {}
}));

function HomeView() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Home"
    >
      <Header />
      <SubHeader />
      <Services />
      <Rates />
      <Testimonials />
      <CTA />
      <FAQS />
    </Page>
  );
}

export default HomeView;
