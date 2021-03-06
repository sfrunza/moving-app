import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, useMediaQuery, colors, Box, Typography, Divider } from '@material-ui/core';
import { LearnMoreLink } from 'src/components/atoms';
import { SectionHeader } from 'src/components/molecules';
import { deepPurple } from '@material-ui/core/colors'
import { Image } from 'src/components/atoms';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import clock from 'src/assets/img/clock-copy.png'
import calendar from 'src/assets/img/calendar.png'

const useStyles = makeStyles(theme => ({
  root: {},
  listGrid: {
    overflow: 'hidden',
    marginBottom: theme.spacing(3),
    '&:last-child': {
      marginBottom: theme.spacing(0),
    },
  },
  gridItemBorder: {
    backgroundColor: '#f5f7ff',
    borderRadius: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      borderRight: `1px solid ${colors.grey[200]}`,
    },
  },
  rates: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '1em',
  },
  flatRates: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(4),
    margin: 'auto',

  },
  icon: {
    position: 'relative',
    top: '6px',
    margin: '0px 1em'
  },
  gridCard: {
    overflow: 'hidden',
    marginBottom: theme.spacing(4),
    '&:last-child': {
      marginBottom: theme.spacing(0),
    },
    padding: theme.spacing(2),
    height: '100%',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.spacing(1),
    // [theme.breakpoints.up('md')]: {
    //   padding: theme.spacing(4),
    // },
  },
  title: {
    fontWeight: 700,
  },
  image: {
    maxWidth: '15rem',
  },
}));

const Storage = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title='Moving and storage'
        subtitle="Storage pricing varies based on size of inventory, duration and season."
        subtitleProps={{
          variant: 'body1'
        }}
      />


      <Grid
        item
        container
        spacing={isMd ? 4 : 2}
        alignItems="center"
        justify="space-between"
        className={classes.gridCard}
      >
        <Grid item container justify="center" xs={12} sm={6}>
          <Image
            src={calendar}
            alt='clock'
            className={classes.image}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SectionHeader
            title='Up to 6 months storage'
            subtitle="Insight Moving provides temperature-controlled storage for up to 6 months. Storage rates vary based on the size of your inventory and the season. Email us a complete inventory of furniture and boxes along with storage dates to inquire about pricing. We are also happy to place your goods in a storage facility of your choice."
            subtitleProps={{
              variant: 'body1',
              color: 'textSecondary',
            }}
            titleProps={{
              variant: 'h4',
            }}
            align="center"
            disableGutter
          />
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
        <Box className={classes.divider}>
          <Divider />
        </Box>
      </Grid>

      <Grid
        item
        container
        spacing={isMd ? 4 : 2}
        alignItems="center"
        justify="space-between"
        className={classes.gridCard}
      >
        <Grid item xs={12} sm={6}>
          <SectionHeader
            title='Overnight storage'
            subtitle="For moves that involve working around real estate closings, we offer overnight truck storage to help take the stress out of your big event. We can load your property, store it at our overnight truck storage for a night or two (as needed), then deliver your goods after your business transactions are out of the way."
            subtitleProps={{
              variant: 'body1',
              color: 'textSecondary',
            }}
            titleProps={{
              variant: 'h4',
            }}
            align="center"
            disableGutter
          />
        </Grid>
        <Grid item container justify="center" xs={12} sm={6}>
          <Image
            src={clock}
            alt='clock'
            className={classes.image}
          />
        </Grid>
        <SectionHeader
          title={
            <Box className={clsx(classes.rates, classes.overnight)}>
              <Typography
                variant="h5"
                gutterBottom
              >
                We collect $200 for keeping your items overnight.
              </Typography>
            </Box>
          }
        />
        <Box className={classes.divider}>
          <Divider />
        </Box>
      </Grid>


    </div>
  );
};

Storage.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Storage;
