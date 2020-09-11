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
import clock from 'src/assets/img/clock-copy.png'
import calendar from 'src/assets/img/calendar.png'
import { deepPurple } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 128,
    paddingBottom: 128
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  },
  rates: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '2em 0px',
    color: deepPurple['A200']
  },
  overnightRate: {
    color: deepPurple['A200'],
    margin: '2em auto',
    textAlign: 'center'
  },
  media: {
    width: '65%',
    height: '300px',
    margin: '3em auto'
  },
  button: {
    display: 'flex',
    textTransform: 'uppercase',
    margin: '3em auto',
    width: '15em',
    justifyContent: 'center',
    padding: '0.7em',
    borderRadius: '4px',
    fontSize: '0.875rem',
    fontFamily: "Maison Neue Demi",
    [theme.breakpoints.down('sm')]: {
      display: 'flex'
    },
    color: deepPurple[600],
    backgroundColor: theme.palette.background.dark,
    border: '1.4px solid',
    borderColor: deepPurple[500],
    '&:hover': {
      backgroundColor: deepPurple[50],
    }
  },
  subHeader: {
    color: deepPurple['A200']
  }
}));

function Storage({ className, ...rest }) {
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
        >
          Storage
        </Typography>
        <Typography
          component="p"
          variant="overline"
          align="center"
          className={classes.subHeader}
        >
          Storage pricing varies based on size of inventoryn duration and season.
        </Typography>
        <Box mt={8}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={12}
              md={6}
            >
              <Box display="flex">
                <Box ml={2}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    color="textPrimary"
                    align="center"
                  >
                    Up to 6 months storage
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                  >
                    <span>Insight Moving</span> provides clean, dry, climate and temperature controlled storage for up to 6 months.
                  </Typography>
                  <Box className={classes.rates}>
                    <Typography
                      variant="h5"
                      gutterBottom
                    >
                      Room
                      <br></br>
                      <span>$100/mo</span>
                    </Typography>
                    <Typography
                      variant="h5"
                      gutterBottom
                    >
                      Studio
                      <br></br>
                      <span >$150/mo</span>
                    </Typography>
                    <Typography
                      variant="h5"
                      gutterBottom
                    >
                      1 Bedroom
                      <br></br>
                      <span>$250/mo</span>
                    </Typography>
                  </Box>
                  <CardMedia
                    className={classes.media}
                    image={calendar}
                    title="Residential"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
            >
              <Box display="flex">
                <Box ml={2}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    color="textPrimary"
                    align="center"
                  >
                    Overnight Storage
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    gutterBottom
                  >
                    In case you have to move out in one day, but are not able to move into your new residence until the next day, we offer low cost Overnight On-Truck Storage.
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                    className={classes.overnightRate}
                  >
                  WE COLLECT $100 FOR KEEPING YOUR ITEMS OVERNIGHT.
                  </Typography>
                  <Typography
                    variant="h5"
                    color="textPrimary"
                    gutterBottom
                    style={{marginTop: '1em'}}
                  >
                  The truck remains locked and stationary in our digitally monitored parking lot.
                  </Typography>
                  <CardMedia
                    className={classes.media}
                    image={clock}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Typography
          variant="h1"
          align="center"
        >
          <Link
            className={classes.button}
            color="textSecondary"
            component={RouterLink}
            to="/book"
            underline="none"
            variant="body2"
          >
            Book Us Now
          </Link>
        </Typography>
      </Container>
    </div>
  );
}

Storage.propTypes = {
  className: PropTypes.string
};

export default Storage;
