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
import { ContactForm } from 'src/common';
import { IconAlternate } from 'src/components/molecules';
import { Section, SectionAlternate } from 'src/components/organisms';
import { Parallax, Background } from 'react-parallax';
import Header from './Header';
import Services from './Services';
import Rates from './Rates';
import Places from './Places';
import Testimonials from './Testimonials';
import BookSection from './BookSection';
import SubHeader from './SubHeader';
import FAQS from './FAQS';
import Contact from './Contact';
import IncludeSection from './IncludeSection';
import Sticky from 'react-stickynode';
import backgroundImage from 'src/assets/img/home-background.jpg'
import {
  services,
  places,
  reviews,
  partners,
  faq,
  properties
} from './data';

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
    // height: '75vh !important',
    width: '100% !important',
    // top: '20% !important',
    minWidth: '1000px !important',
    minHeight: '80vh !important',
  }
}));

const HomeView = () => {
  const classes = useStyles();

  const [openBottombar, setOpenBottombar] = React.useState(false);

  const handleBottombarOpen = () => {
    setOpenBottombar(true);
  };

  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };
  const sides = {
          top: 0, // Sticks when it scrolls past the top edge
          bottom: 0, // Sticks when it scrolls past the bottom edge
          left: 10, // Sticks 10px from the left edge
          right: -20, // Sticks 20px past the right edge (useful for content that should stick only when it's fully out of the frame)
        };

  return (
    <Page title="Insigh Moving | Boston Movers" className={classes.root}>
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

      <SubHeader data={partners} />

      <Section className={classes.pagePaddingTop}>

        <Services data={services} />

        <Section>
          <Divider />
        </Section>

        <Rates />

        <Section>
          <Divider />
        </Section>

        <Places data={places} />

        <Section>
          <Divider />
        </Section>

        <SectionAlternate>
          <IncludeSection data={properties} />
        </SectionAlternate>

        <Section>
          <Divider />
        </Section>

        <Testimonials data={reviews} />

        <Section>
          <Divider />
        </Section>

        <BookSection />

        <Section>
          <Divider />
        </Section>

        <FAQS data={faq} />

        <Section>
          <Divider />
        </Section>

        <Contact />


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

export default HomeView;
