import React, { useState, useEffect, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Divider,
} from '@material-ui/core';
import clsx from 'clsx';
import axios from 'axios';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import Page from 'src/components/Page';
import { Section } from 'src/components/organisms';
import { Parallax } from 'react-parallax';
import Header from './Header'
import Gallery from './Gallery'
import Partners from './Partners'
import Reviews from 'src/views/pages/HomeView/Testimonials'
import BookSection from 'src/views/pages/HomeView/BookSection'
import {
  reviews,
  partners
} from 'src/views/pages/HomeView/data';
import backgroundImage from 'src/assets/img/work-background.jpg'
import Contact from 'src/views/pages/HomeView/Contact';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

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
    width: '100% !important',
    maxHeight: '79vh !important',
    objectFit: 'cover',
    top: '10.7em',
    [theme.breakpoints.down('xs')]: {
      objectPosition: '7%',
    },
  }
}));

const WorkView = props => {
  const classes = useStyles();
  const [images, setImages] = useState();
  const isMountedRef = useIsMountedRef();


  useEffect(() => {
    getImages();
  }, [getImages]);


  const getImages = useCallback(() => {
    var arr = []
    axios
      .get('/api/v1/images.json')
      .then((response) => {
        let data = response.data;
        data.map((image) => {
          if(image.job_id === null ){
            arr.push({ "src" : image.photo.url })
          }
          else return null

        })
        if (isMountedRef.current) {
          setImages(arr);
        }
      });
  }, [isMountedRef]);


  if (!images) {
    return null;
  }

  return (
    <Page title="Our Work" className={classes.root}>
      <Parallax
            bgImage={backgroundImage}
            bgImageAlt="bg"
            strength={400}
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

        <Gallery images={images}/>

        <Section>
          <Reviews data={reviews}/>
        </Section>

        <Divider />

        <Section>
          <BookSection />
        </Section>

        <Divider />

        <Section>
          <Contact />
        </Section>

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

export default WorkView;
