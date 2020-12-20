import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  Drawer,
  colors,
  Button,
  useMediaQuery
} from '@material-ui/core';
import clsx from 'clsx';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import Page from 'src/components/Page';
import { ContactForm } from 'src/common';
import { IconAlternate, TypedText } from 'src/components/molecules';
import { Section, SectionAlternate } from 'src/components/organisms';
import { Parallax } from 'src/components/organisms'; //COSTUM MADE BY ME
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
import backgroundImage from 'src/assets/img/home-background.webp'
import {
  services,
  places,
  reviews,
  partners,
  faq,
  properties
} from './data';
import { Calculator } from 'src/common';

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
  calculator: {
    padding: theme.spacing(3, 2),
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: 650,
    },
  },
  drawer: {
    borderRadius: '16px 16px 0px 0px',
  },
  button: {
    // borderRadius: '24px',
    borderColor: '#fff',
    fontWeight: 600,
    backgroundColor: '#00000066',
    // padding: '12px 20px',
    color: '#fff',
    '&:hover': {
      // color: '#fff',
      backgroundColor: '#00000066',
      // border: 'none',
    },
  },
}));

const HomeView = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openBottombar, setOpenBottombar] = React.useState(false);

  const handleBottombarOpen = () => {
    setOpenBottombar(true);
  };

  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };

  return (
    <Page title="Insigh Moving | Boston Movers" className={classes.root}>
      <Parallax
        backgroundImage={backgroundImage}
        title="Insight Moving"
        typedText={['A Badass','Moving Company', 'In Boston']}
        subtitle="InsighMoving is your friendly and trustworthy moving, storage, and delivery company."
        buttons={[
          <Toolbar disableGutters className={classes.toolbarBottom}>
            <Button
              variant="outlined"
              size={isMd ? 'large' : 'medium'}
              onClick={handleBottombarOpen}
              className={classes.button}
            >
              Get a free Quote
            </Button>
            <Drawer
              anchor="bottom"
              open={openBottombar}
              onClose={handleBottombarClose}
              className={classes.drawer}
              transitionDuration={300}
              classes={{
                paper: classes.drawer,
              }}
              >
                <div className={classes.calculator}>
                  <Calculator onClose={handleBottombarClose}/>
                </div>
              </Drawer>
            </Toolbar>
          ]}
      />

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

    </Page>
  );
};

export default HomeView;
