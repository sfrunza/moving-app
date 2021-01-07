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
import { Parallax } from 'src/components/organisms';
import Gallery from './Gallery'
import Partners from './Partners'
import Reviews from 'src/views/pages/HomeView/Testimonials'
import BookSection from 'src/views/pages/HomeView/BookSection'
import {
  reviews,
  partners
} from 'src/views/pages/HomeView/data';
import backgroundImage from 'src/assets/img/work-background-min2.jpg'
import Contact from 'src/views/pages/HomeView/Contact';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    // maxWidth: 1500,
    // margin: 'auto',
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
    width: '100% !important',
    maxHeight: '79vh !important',
    objectFit: 'cover',
    // top: '10.7em',
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
            arr.push({ "src" : image.photo.url, lightboxCaption: '' })
          }
          else return null

        })
        if (isMountedRef.current) {
          setImages(arr);
        }
      });
  }, [isMountedRef]);

  return (
    <Page title="Our Work" className={classes.root}>
      <Parallax
        backgroundImage={backgroundImage}
        title="Our Work"
        typedText={['Professional Movers','Furniture Protection', 'Handle With Care']}
      />
      <Section className={classes.pagePaddingTop}>
        <Partners data={partners} />
        <Gallery images={images}/>
        <Section>
          <Divider />
        </Section>
        <Reviews data={reviews}/>
        <Section>
          <Divider />
        </Section>
        <BookSection />
        <Section>
          <Divider />
        </Section>
        <Contact />
      </Section>
    </Page>
  );
};

export default WorkView;
