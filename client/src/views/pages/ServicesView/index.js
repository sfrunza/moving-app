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
import { Parallax } from 'react-parallax';
import Interstate from './Interstate'
import Packing from './Packing'
import StorageNew from './StorageNew'
import Header from './Header'
import Local from './Local'
import backgroundImage from 'src/assets/img/services-background.jpg'
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
  appBarBottom: {
    top: 'auto',
    bottom: 0,
    background: 'transparent',
    boxShadow: 'none',
  },
  toolbarBottom: {
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  phoneIconButton: {
    position: 'absolute',
    right: theme.spacing(3),
    left: 'auto',
    top: theme.spacing(-3),
    background: theme.palette.success.main,
    width: 55,
    height: 55,
    boxShadow: '0 2px 10px 0 rgba(23,70,161,.11)',
    '&:hover': {
      background: theme.palette.success.main,
    },
  },
  phoneIcon: {
    color: 'white',
    width: 30,
    height: 30,
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
    top: '8em',
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
            bgImage={backgroundImage}
            bgImageAlt="bg"
            strength={300}
            bgClassName={classes.bgImage}
        >
        <div className={clsx(classes.fullHeight, classes.headerSection)}>
          <Section>
            <Header />
          </Section>
        </div>
      </Parallax>

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

        <StorageNew />

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
      <AppBar position="fixed" className={classes.appBarBottom}>
        <Toolbar disableGutters className={classes.toolbarBottom}>
          <IconButton
            className={classes.phoneIconButton}
            href="tel:6172060968"
          >
            <PhoneRoundedIcon className={classes.phoneIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Page>
  );
};

export default ServicesView;
