import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Divider,
} from '@material-ui/core';
import clsx from 'clsx';
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
    [theme.breakpoints.down('xs')]: {
      left: '82% !important',
    },
  }
}));

const WorkView = props => {
  const classes = useStyles();
  const [images, setImages] = useState()

  useEffect(() => {
    setImages(props.images)
  });

  return (
    <Page title="Our Work" className={classes.root}>
      <Parallax
            bgImage='https://lh3.googleusercontent.com/proxy/CXNTNtzgxCGljho7QTs0iG-hbQ23uwcyUr5Qj8c-OWqpVGAHWAmk0GnMTvExZ9rF17GDO5CbPPKyECQbZd9SqJ8ajz4g1eucEL1r5RmEp3_1xlI3ln6gxRCHYQEFnJEZ'
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

        <Gallery images={!images ? null : images} />

        <Section>
          <Reviews data={reviews}/>
        </Section>

        <Divider />

        <Section>
          <BookSection />
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
