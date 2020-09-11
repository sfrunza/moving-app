import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  Drawer,
} from '@material-ui/core';
import axios from 'axios'
import clsx from 'clsx';
import ForumIcon from '@material-ui/icons/Forum';
import Page from 'src/components/Page';
import { ContactForm } from 'src/common';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { Section, SectionAlternate } from 'src/components/organisms';
import { Parallax, Background } from 'react-parallax';
import Header from './Header'
import Gallery from './Gallery'
import Partners from './Partners'
import Reviews from 'src/views/pages/HomeView/Testimonials'
import {
  reviews
} from 'src/views/pages/HomeView/data';

import { gallery, partners } from './data';

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
  chatIconButton: {
    position: 'absolute',
    right: theme.spacing(3),
    left: 'auto',
    top: theme.spacing(-3),
    background: theme.palette.primary.main,
    width: 55,
    height: 55,
    boxShadow: '0 2px 10px 0 rgba(23,70,161,.11)',
    '&:hover': {
      background: theme.palette.primary.main,
    },
  },
  forumIcon: {
    color: 'white',
    width: 25,
    height: 25,
  },
  contactForm: {
    padding: theme.spacing(3, 2),
    maxWidth: 800,
    margin: '0 auto',
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

const WorkView = () => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [images, setImages] = useState(null);
  const [openBottombar, setOpenBottombar] = useState(false);

  const getImages = useCallback(() => {
    axios
      .get('/api/v1/images.json')
      .then((response) => {
        if (isMountedRef.current) {
          setImages(response.data);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getImages();
  }, [getImages]);

  if (!images) {
    return null;
  }

  const handleBottombarOpen = () => {
    setOpenBottombar(true);
  };

  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };

  return (
    <Page title="Our Work" className={classes.root}>
      <Parallax
            bgImage='https://leesmovers.com/wp-content/uploads/banner.jpg'
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

        <Partners data={partners} />

        <Gallery images={images} />

        <Section>
          <Reviews data={reviews}/>
        </Section>

      </Section>
      <Divider />
      <AppBar position="fixed" className={classes.appBarBottom}>
        <Toolbar disableGutters className={classes.toolbarBottom}>
          <IconButton
            className={classes.chatIconButton}
            onClick={handleBottombarOpen}
          >
            <ForumIcon className={classes.forumIcon} />
          </IconButton>
          <Drawer
            anchor="bottom"
            open={openBottombar}
            onClose={handleBottombarClose}
          >
            <div className={classes.contactForm}>
              <ContactForm />
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Page>
  );
};

export default WorkView;
