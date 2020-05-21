import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Button,
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
  CardMedia
} from '@material-ui/core';
import calendar from 'src/assets/img/calendar.png'
import clock from 'src/assets/img/clock-copy.png'


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 128,
    paddingBottom: 128,
    textAligh: 'center'
  },
  media: {
    width: '50%',
    height: '300px',
    margin: 'auto',
    marginBottom: '3em',
    borderRadius: '3px'
  },
  button: {
    display: 'flex',
    margin: 'auto',
    width: '15em'
  },
  rates: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '2em 0px',
    color: '#7e46ea'
  },
  info: {
    textAlign: 'center !important',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 'auto'
  },
  gridPadding: {
    padding: '4em 2em 0em !important'
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
          color="secondary"
          align="center"
        >
          Storage pricing varies based on size of inventory, duration of storage, and season.
        </Typography>
        <Box className={classes.info}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={12}
              sm={6}
              className={classes.gridPadding}
            >
              <Box>
                <Box align="center">
                  <Typography
                    variant="h3"
                    gutterBottom
                    color="textPrimary"
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
                      align="center"
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
                  />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              className={classes.gridPadding}
            >
              <Box>
                <Box align="center">
                  <Typography
                    variant="h3"
                    gutterBottom
                    color="textPrimary"
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
                    style={{ color: '#7e46ea' }}
                    gutterBottom
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
                    title="Residential"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Button
          variant="outlined"
          component="a"
          href="#"
          className={classes.button}
        >
          Book Us Now
        </Button>
      </Container>
    </div>
  );
}

Storage.propTypes = {
  className: PropTypes.string
};

export default Storage;
