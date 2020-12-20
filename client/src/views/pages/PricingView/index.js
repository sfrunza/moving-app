import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  Drawer,
  colors
} from '@material-ui/core';
import clsx from 'clsx';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import Page from 'src/components/Page';
import { IconAlternate } from 'src/components/molecules';
import { Section, SectionAlternate } from 'src/components/organisms';
import { Parallax, Background } from 'react-parallax';
import Header from './Header';
import Interstate from './Interstate';
import Local from './Local';
import Packing from './Packing';
import Storage from './Storage';
import PricingTableNew from './PricingTableNew';
import backgroundImage from 'src/assets/img/home-background.jpg'
import FAQS from 'src/views/pages/HomeView/FAQS';
import Contact from 'src/views/pages/HomeView/Contact';
import {
  pricings,
  interstate,
} from './data';
import {
  faq,
} from 'src/views/pages/HomeView/data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  headerSection: {
    backgroundColor: '#00000080',
  },
  fullHeight: {
    width: '100%',
    height: 'auto',
    minHeight: '73vh',
    padding: '1rem 0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    // height: '75vh !important',
    width: '100% !important',
    // top: '20% !important',
    minWidth: '1000px !important',
    minHeight: '80vh !important',
  }
}));

const PricingVew = () => {
  const classes = useStyles();

  const [openBottombar, setOpenBottombar] = React.useState(false);

  const handleBottombarOpen = () => {
    setOpenBottombar(true);
  };

  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };

  return (
    <Page title="Pricing" className={classes.root}>

      <Header data={pricings}/>

      <Section className={classes.pagePaddingTop}>

        <Divider />

        <Section>
          <PricingTableNew />
        </Section>

        <Divider />

        <Section>
          <Interstate data={interstate}/>
        </Section>

        <Divider />

        <Section>
          <FAQS data={faq} />
        </Section>

        <Divider />

        <Section>
          <Contact />
        </Section>

      </Section>
      <Divider />
    </Page>
  );
};

export default PricingVew;
