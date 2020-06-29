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
import { deepPurple, green } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 128,
    paddingBottom: 128,
    borderBottom: '12px solid white'
  },
  alert: {
    backgroundColor: 'transparent',
    color: green[500],
    fontFamily: "Maison Neue Bold",
    padding: '6px 1px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  button: {
    display: 'flex',
    textTransform: 'uppercase',
    width: '50%',
    justifyContent: 'center',
    padding: '0.7em',
    borderRadius: '4px',
    fontSize: '0.875rem',
    fontFamily: "Maison Neue Demi",
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      margin: '2em 0px 0px',
      width: '100%'
    },
    color: deepPurple[600],
    backgroundColor: "transparent",
    border: '1.4px solid',
    borderColor: deepPurple[500],
    '&:hover': {
      backgroundColor: deepPurple[50],
    }
  },
  media: {
    height: 140,
    margin: '1em auto',
    borderRadius: '4px',
    transition: 'all 0.5s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
    }
  },
  box: {
    margin: 'auto !important',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
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
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));

function Services({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          align="center"
          color="textPrimary"
          style={{fontFamily: "Maison Neue Bold" }}
        >
          Complete solutions for your moving needs.
        </Typography>
        <Typography
          component="p"
          variant="overline"
          align="center"
          className={classes.subHeader}
        >
          SELECT THE SERVICE YOU NEED TO LEARN MORE.
        </Typography>
        <Box mt={8}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={6}
              sm={3}
            >
              <Box display="flex">
                <Box ml={2} className={classes.box}>
                  <CardMedia
                    className={classes.media}
                    image="https://www.movesforseniors.com/wp-content/uploads/2018/05/senior-facilitation_small.jpg"
                    title="Local Moving"
                  />
                  <Typography
                    variant="h4"
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
                  <Link
                    className={classes.button}
                    color="textSecondary"
                    component={RouterLink}
                    to="#"
                    underline="none"
                    variant="body2"
                  >
                    Read More
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={3}
            >
              <Box display="flex">
                <Box ml={2} className={classes.box}>
                  <CardMedia
                    className={classes.media}
                    image="https://vanexpressnj.com/wp-content/uploads/2019/10/road-signs-936137_640.jpg"
                    title="Interstate Moving"
                  />
                  <Typography
                    variant="h4"
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
                  <Link
                    className={classes.button}
                    color="textSecondary"
                    component={RouterLink}
                    to="#"
                    underline="none"
                    variant="body2"
                  >
                    Read More
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={3}
            >
              <Box display="flex">
                <Box ml={2} className={classes.box}>
                  <CardMedia
                    className={classes.media}
                    image="https://www.thespruce.com/thmb/iiNTHSJr7-cMwIcbVryPdMKDuXI=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/moving_boxes-168274883-5908e7473df78c928394d7c2.jpg"
                    title="Packing Services"
                  />
                  <Typography
                    variant="h4"
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
                  <Link
                    className={classes.button}
                    color="textSecondary"
                    component={RouterLink}
                    to="/services#packing"
                    underline="none"
                    variant="body2"
                  >
                    Read More
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={3}
            >
              <Box display="flex">
                <Box ml={2} className={classes.box}>
                  <CardMedia
                    className={classes.media}
                    image="https://uploads.website.storedge.com/a0756a77-5ab9-4c50-b715-fd5a68030d77/storagemart-1750-maryland-route-3-south-lane-gambrills-storage-unit.jpg"
                    title="Storage Solutions"
                  />
                  <Typography
                    variant="h4"
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
                  <Link
                    className={classes.button}
                    color="textSecondary"
                    component={RouterLink}
                    to="#"
                    underline="none"
                    variant="body2"
                  >
                    Read More
                  </Link>
                </Box>
              </Box>
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
