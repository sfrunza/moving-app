import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
  CardMedia,
  Link
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { deepPurple, indigo, green } from '@material-ui/core/colors'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import box from 'src/assets/img/graphic-3578346_640.png';
// import loc from 'src/assets/img/loc.png';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.white,
    borderBottom: '15px solid white'
  },
  alert: {
    backgroundColor: 'transparent',
    color: green[500],
    display: 'flex',
    justifyContent: 'center',
    fontFamily: "Maison Neue Bold",
    padding: '6px 1px',
    // [theme.breakpoints.down('sm')]: {
    //   display: 'none'
    // }
  },
  button: {
    display: 'flex',
    width: 'fit-content',
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontFamily: "Maison Neue Normal",
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      width: '100%'
    },
    color: indigo['A400'],
    backgroundColor: "transparent",
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  media: {
    height: 250,
    margin: '1em auto',
    borderRadius: '4px',
    transition: 'all 0.5s ease',
    backgroundSize: 'contain'
  },
  box: {
    margin: 'auto !important',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    padding: '4em 0em'
  },
  header: {
    fontFamily: "Maison Neue Bold",
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  subHeader: {
    fontFamily: "Maison Neue Demi",
    color: deepPurple['A200']
  },
  description: {
    fontFamily: "Maison Neue",
    textAlign: 'center',
    width: '60%',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '80%'
    }
  },
  service: {
    backgroundColor: theme.palette.background.dark,
  },
  mainContainer: {
    paddingLeft: '16px',
    paddingRight: '16px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0px',
      paddingRight: '0px',
    },
  },
  arrow: {
    width: '19px',
  },
}));

function Services({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="xl" className={classes.mainContainer}>
        <Box mt={2}>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              sm={6}
            >
              <Link
                className={classes.service}
                component={RouterLink}
                to="/services"
                underline="none"
                variant="body2"
              >
                <Box display="flex" className={classes.service}>
                  <Box ml={2} className={classes.box}>

                    <Typography
                      variant="h1"
                      gutterBottom
                      color="textPrimary"
                      className={classes.header}
                    >
                      Local Moving
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      className={classes.description}
                    >
                      Hourly based full moving services in Metro Boston and 125 miles around it.
                    </Typography>
                    <Alert severity="success" className={classes.alert}>
                      <AlertTitle>Safe, Fast and Reliable</AlertTitle>
                    </Alert>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      gutterBottom
                      className={classes.button}
                    >
                      Read More <ChevronRightIcon className={classes.arrow}/>
                    </Typography>
                    <CardMedia
                      className={classes.media}
                      image="https://kiwimove.co.nz/wp-content/uploads/2019/06/moving-3671446_1280-1.png"
                      title="Local Moving"
                    />
                  </Box>
                </Box>
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <Link
                className={classes.service}
                component={RouterLink}
                to="/services"
                underline="none"
                variant="body2"
              >
                <Box display="flex" className={classes.service}>
                  <Box ml={2} className={classes.box}>

                    <Typography
                      variant="h1"
                      gutterBottom
                      color="textPrimary"
                      className={classes.header}
                    >
                      Interstate Moving
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      className={classes.description}
                    >
                      Flat Rate Moving. Same or Next Day moving services on distance up to 1,500 miles.
                    </Typography>
                    <Alert severity="success" className={classes.alert}>
                      <AlertTitle>Flat Rate Moving</AlertTitle>
                    </Alert>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      gutterBottom
                      className={classes.button}
                    >
                      Read More <ChevronRightIcon className={classes.arrow}/>
                    </Typography>
                    <CardMedia
                      className={classes.media}
                      image="https://moveinterstate.com/wp-content/uploads/2020/02/Header-1.svg"
                      title="Interstate Moving"
                    />
                  </Box>
                </Box>
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <Link
                className={classes.service}
                component={RouterLink}
                to="/services"
                underline="none"
                variant="body2"
              >
                <Box display="flex" className={classes.service}>
                  <Box ml={2} className={classes.box}>

                    <Typography
                      variant="h1"
                      gutterBottom
                      color="textPrimary"
                      className={classes.header}
                    >
                      Packing Services
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      className={classes.description}
                    >
                      Our experienced movers will have all necessary packing materials to pack up everything.
                    </Typography>
                    <Alert severity="success" className={classes.alert}>
                      <AlertTitle>Full Home Packing Services</AlertTitle>
                    </Alert>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      gutterBottom
                      className={classes.button}
                    >
                      Read More <ChevronRightIcon className={classes.arrow}/>
                    </Typography>
                    <CardMedia
                      className={classes.media}
                      image="https://alltimemoving.ca/wp-content/uploads/2019/06/moving-services@2x.png"
                    />
                  </Box>
                </Box>
              </Link>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
            >
              <Link
                className={classes.service}
                component={RouterLink}
                to="/services"
                underline="none"
                variant="body2"
              >
                <Box display="flex" className={classes.service}>
                  <Box ml={2} className={classes.box}>

                    <Typography
                      variant="h1"
                      gutterBottom
                      color="textPrimary"
                      className={classes.header}
                    >
                      Storage Solutions
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      gutterBottom
                      className={classes.description}
                    >
                      Insight Moving provides climate controlled storage for up to 6 months.
                    </Typography>
                    <Alert severity="success" className={classes.alert}>
                      <AlertTitle>First 10 Days FREE Storage</AlertTitle>
                    </Alert>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      gutterBottom
                      className={classes.button}
                    >
                      Read More <ChevronRightIcon className={classes.arrow}/>
                    </Typography>

                    <CardMedia
                      className={classes.media}
                      image="https://lakesidestoragefl.com/wp-content/uploads/2020/01/self-storage.svg"
                      title="Storage Solutions"
                    />
                  </Box>
                </Box>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

Services.propTypes = {
  className: PropTypes.string
};

export default Services;
