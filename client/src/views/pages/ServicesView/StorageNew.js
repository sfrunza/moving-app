import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button, Box } from '@material-ui/core';
import { Image } from 'src/components/atoms';
import { SectionHeader } from 'src/components/molecules';
import clock from 'src/assets/img/clock-copy.png'
import calendar from 'src/assets/img/calendar.png'
import { deepPurple } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    fontWeight: 'bold',
  },
  image: {
    maxWidth: 190,
  },
  gridCard: {
    padding: theme.spacing(2),
    background: '#f5f7ff',
    height: '100%',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
    },
  },
  subtitle: {
    margin: theme.spacing(2, 0),
  },
  rates: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '1em',
    color: deepPurple['A200']
  },
  overnight: {
    marginTop: '1.8em',
  }
}));

const StorageNew = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={
          <span>
            <span className="text-highlighted">Storage{' '}</span>
              Service
            <br />
          </span>
        }
        subtitle="Storage pricing varies based on size of inventory, duration and season."
        subtitleProps={{
          variant: 'body1',
          color: 'textSecondary',
        }}
        data-aos="fade-up"
      />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Grid
            container
            className={classes.gridCard}
            data-aos="fade-up"
            spacing={2}
          >
            <Grid
              item
              container
              justify={isMd ? 'flex-start' : 'center'}
              alignItems="center"
              xs={12}
              md={6}
            >
              <Image
                src={calendar}
                className={classes.image}
              />
            </Grid>
            <Grid
              item
              container
              justify="space-between"
              alignItems={isMd ? 'flex-start' : 'center'}
              xs={12}
              md={6}
              direction="column"
            >
              <Typography
                variant="h4"
                className={classes.title}
                color="textPrimary"
                align={isMd ? 'left' : 'center'}
              >
                Up to 6 months storage
              </Typography>
              <Typography
                variant="body1"
                color="textPrimary"
                align={isMd ? 'left' : 'center'}
                className={classes.subtitle}
              >
                Insight Moving provides clean, dry, climate and temperature controlled storage for up to 6 months.
              </Typography>
            </Grid>
              <SectionHeader
                title={
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
                }
              />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            className={classes.gridCard}
            data-aos="fade-up"
            spacing={2}
          >
            <Grid
              item
              container
              justify={isMd ? 'flex-start' : 'center'}
              alignItems="center"
              xs={12}
              md={6}
            >
              <Image
                src={clock}
                className={classes.image}
              />
            </Grid>
            <Grid
              item
              container
              justify="space-between"
              alignItems={isMd ? 'flex-start' : 'center'}
              xs={12}
              md={6}
              direction="column"
            >
              <Typography
                variant="h4"
                className={classes.title}
                color="textPrimary"
                align={isMd ? 'left' : 'center'}
              >
                Overnight Storage
              </Typography>
              <Typography
                variant="body1"
                color="textPrimary"
                align={isMd ? 'left' : 'center'}
                className={classes.subtitle}
              >
                We offer low cost Overnight On-Truck Storage. The truck remains locked and stationary in our digitally monitored parking lot.
              </Typography>
            </Grid>
            <SectionHeader
              title={
                <Box className={clsx(classes.rates, classes.overnight)}>
                  <Typography
                    variant="h5"
                    gutterBottom
                  >
                    We collect $100 for keeping your items overnight.
                  </Typography>
                </Box>
              }
              titleVariant='h6'
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

StorageNew.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default StorageNew;
