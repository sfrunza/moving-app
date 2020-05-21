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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://static.cms.yp.ca/ecms/media/1/bigstock-Man-Signing-A-Contract-When-Bu-56872922-1427730291-600x360.jpg)',
    backgroundSize: '100% 110%',
    paddingTop: 200,
    paddingBottom: 200,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      paddingTop: 60,
      paddingBottom: 60,
    }
  },
  image: {
    perspectiveOrigin: 'left center',
    transformStyle: 'preserve-3d',
    perspective: 1500,
    '& > img': {
      maxWidth: '90%',
      height: 'auto',
      transform: 'rotateY(-35deg) rotateX(15deg)',
      backfaceVisibility: 'hidden',
      boxShadow: theme.shadows[16]
    }
  },
  shape: {
    position: 'absolute',
    top: 0,
    left: 0,
    '& > img': {
      maxWidth: '90%',
      height: 'auto'
    }
  },
  header: {
    color: '#fff',
    textShadow: '2px 2px 5px #000',
    zIndex: 1,
  },
  subHeader: {
    color: '#fff',
    textShadow: '2px 2px 5px #000',
    zIndex: 1,
  },
  items: {
    margin: '24px auto auto auto'
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
          style={{justifyContent: 'center'}}
        >
          <Grid
            item
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
            >
              <Typography
                variant="overline"
                color="secondary"
              >
                Introducing
              </Typography>
              <Typography
                variant="h1"
                className={classes.header}
              >
                Best Prices and Affordable Rates
              </Typography>
              <Box mt={3} className={classes.subHeader}>
                <Typography
                  variant="body1"
                >
                  No hidden fees or extra charges
                </Typography>
              </Box>
              <Box mt={3} className={classes.items}>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid item>
                    <Typography
                      variant="h1"
                      color="secondary"
                    >
                      30+
                    </Typography>
                    <Typography
                      variant="overline"
                      color="textSecondary"
                    >
                      Demo Pages
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h1"
                      color="secondary"
                    >
                      UX
                    </Typography>
                    <Typography
                      variant="overline"
                      color="textSecondary"
                    >
                      Complete Flows
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h1"
                      color="secondary"
                    >
                      300+
                    </Typography>
                    <Typography
                      variant="overline"
                      color="textSecondary"
                    >
                      Components
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
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
