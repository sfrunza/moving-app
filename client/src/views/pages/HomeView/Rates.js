import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, useMediaQuery, colors, Box, Typography } from '@material-ui/core';
import { LearnMoreLink } from 'src/components/atoms';
import { SectionHeader } from 'src/components/molecules';
import { deepPurple } from '@material-ui/core/colors'
import SyncAltIcon from '@material-ui/icons/SyncAlt';

const useStyles = makeStyles(theme => ({
  root: {},
  gridItemBorder: {
    backgroundColor: '#f5f7ff',
    borderRadius: '16px',
    [theme.breakpoints.up('md')]: {
      borderRight: `1px solid ${colors.grey[200]}`,
    },
  },
  rates: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
    margin: '2em auto',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
      '& p:first-child': {
        width: '5em',
      }
    }
  },
  flatRates: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(4),
    margin: 'auto',

  },
  ratesSpan: {
    color: deepPurple['A200'],
    fontSize: '60px'
  },
  icon: {
    position: 'relative',
    top: '6px',
    margin: '0px 1em'
  },
  gridCard: {
    padding: theme.spacing(2),
    background: '#f5f7ff',
    height: '100%',
    display: 'block',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
    },
  },
  link: {
    backgroundColor: '#fff'
  }
}));

const Rates = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest} data-aos="fade-up">
      <SectionHeader
        title={
          <span>
            <span className="text-highlighted">
              Clear{' '}
            </span>
            pricing.{' '}
            <span className="text-highlighted">
              Affordable{' '}
            </span>
              rates.
          </span>
        }
        fadeUp
      />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6}>
          <Grid
            container
            className={classes.gridCard}
            data-aos="fade-up"
          >
            <SectionHeader
              title="Local Hourly Rates"
              titleVariant="h5"
              subtitle="Within Boston & surrounding 125 miles."
              subtitleVariant="body1"
              subtitleColor="textPrimary"
              ctaGroup={[<LearnMoreLink className={classes.link} title="View all Pricing Plans" to='/pricing' />]}
              disableGutter
            />
            <Box className={classes.rates}>
              <Typography
                color="textPrimary"
                >
                2 MOVERS & TRUCK
              </Typography>
              <Typography
                color="textPrimary"
                >
                <span className={classes.ratesSpan}>$90</span>/ hour
              </Typography>
            </Box>
            <Box className={classes.rates}>
              <Typography
                color="textPrimary"
                >
                3 MOVERS & TRUCK
              </Typography>
              <Typography
                color="textPrimary"
                >
                <span className={classes.ratesSpan}>$120</span>/ hour
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            className={classes.gridCard}
            data-aos="fade-up"
          >
            <SectionHeader
              title="Flat Rate Moving"
              titleVariant="h5"
              subtitle="House Flat Rate Moving is available upon request."
              subtitleVariant="body1"
              subtitleColor="textPrimary"
              ctaGroup={[<LearnMoreLink className={classes.link} title="View Flat Rates" to='/pricing' />]}
              disableGutter
            />
            <Box className={classes.flatRates}>
              <Typography
                style={{ margin: '1em 0em 1em 0em'}}
                align="center"
                color="textPrimary"
                >
              NEW YORK <SyncAltIcon className={classes.icon}/>BOSTON
              </Typography>
              <Typography
                align="center"
                color="textPrimary"
                >
                from <span className={classes.ratesSpan}>$950</span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Rates.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Rates;
