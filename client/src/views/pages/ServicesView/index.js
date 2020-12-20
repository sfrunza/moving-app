import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  Drawer,
} from '@material-ui/core';
import clsx from 'clsx';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import Page from 'src/components/Page';
import { ContactForm } from 'src/common';
import { Section, SectionAlternate } from 'src/components/organisms';
import { Parallax } from 'src/components/organisms';
import Interstate from './Interstate'
import Packing from './Packing'
import Storage from './Storage'
import Header from './Header'
import Local from './Local'
import backgroundImage from 'src/assets/img/services-background-min.jpg'
import { services } from './data';
import IncludeSection from 'src/views/pages/HomeView/IncludeSection';
import { properties } from 'src/views/pages/HomeView/data';
import Contact from 'src/views/pages/HomeView/Contact';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(12),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(12),
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
    width: '100% !important',
    maxHeight: '78vh !important',
    objectFit: 'cover',
    // top: '8em',
  }
}));

const ServicesView = () => {
  const classes = useStyles();

  const [openBottombar, setOpenBottombar] = React.useState(false);

  const handleBottombarOpen = () => {
    setOpenBottombar(true);
  };

  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };

  return (
    <Page title="Services" className={classes.root}>
      <Parallax
        backgroundImage={backgroundImage}
        title="Moving Services"
        typedText={['Reliable','Responsible', 'Efficient']}
      />

      <Section className={classes.pagePaddingTop}>

        <Local data={services} />

        <Section>
          <Divider />
        </Section>

        <Interstate />

        <Section>
          <Divider />
        </Section>

        <Packing />

        <Section>
          <Divider />
        </Section>

        <Storage />

        <Section>
          <Divider />
        </Section>

        <IncludeSection data={properties} />

        <Section>
          <Divider />
        </Section>

        <SectionAlternate>
          <Contact />
        </SectionAlternate>


      </Section>

      <Divider />
    </Page>
  );
};

export default ServicesView;
