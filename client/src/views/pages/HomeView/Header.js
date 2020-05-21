import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import Calculator from './Calculator'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(https://s3-us-east-2.amazonaws.com/redefined/wp-content/uploads/2020/03/12175952/Boston_cytis_pixabay.jpg)',
    backgroundSize: '100% 110%',
    paddingTop: 100,
    paddingBottom: 100,
    [theme.breakpoints.down('md')]: {
      paddingTop: 60,
      paddingBottom: 60
    }
  },
  image: {
    perspectiveOrigin: 'left center',
    transformStyle: 'preserve-3d',
    perspective: 1500,
    '& > div': {
      maxWidth: '80%',
      height: 'auto',
      // transform: 'rotateY(-35deg) rotateX(15deg)',
      backfaceVisibility: 'hidden',
      boxShadow: '0 0 1px 0 rgba(0,0,0,1), 0 11px 20px -8px rgba(0,0,0,1)',
      margin: 'auto',
      borderRadius: '4px'
    },
    '& > div:visited': {
      transform: 'none',
    },
    '& > div:hover': {
      transform: 'none',
      transition: '1s ease'
    }
  },
  shape: {
    position: 'absolute',
    top: 0,
    left: 0,
    '& > img': {
      width: '102%',
      height: '400px',
      display: 'none'
    }
  }
}));

function Header({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
            md={5}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
            >
              <Typography
                variant="h1"
                style={{color: '#fff', fontFamily: "Maison Neue Bold"}}
              >
                A Badass Moving Company in Boston.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
          >
            <Box position="relative">
              <div className={classes.shape}>
                <img
                  alt="Shapes"
                  src="/static/home/shapess.png"
                />
              </div>
              <div className={classes.image}>
                <Calculator />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
