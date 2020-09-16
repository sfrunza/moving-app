import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, colors, Grid, Typography } from '@material-ui/core';
import { SectionHeader } from 'src/components/molecules';
import { CardBase } from 'src/components/organisms';

const useStyles = makeStyles(theme => ({
  root: {},
  cardBase: {
    '&:hover': {
      background: colors.indigo[900],
      cursor: 'pointer',
      '& .card-icon, & .card-title': {
        color: 'white',
      },
    },
  },
  icon: {
    fontSize: 60,
    color: colors.indigo[900],
    [theme.breakpoints.up('sm')]: {
      fontSize: 80,
    },
  },
  title: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(6),
    },
  },
}));

const NewDetails = ({ className, onNext, ...rest}) => {

  const classes = useStyles();
  console.log(onNext);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const handleClick = () => {

  }

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="House types"
        subtitle="After 3 days all of your offers will arrive and you will have another 7 days to select your new company."
        data-aos="fade-up"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={6} sm={3} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
              <i
                className={clsx(classes.icon, 'fas fa-door-open', 'card-icon')}
              />
            </div>
            <Typography
              variant="h5"
              color="textPrimary"
              align="center"
              noWrap
              className={clsx(classes.title, 'card-title')}
            >
              Cosy house
            </Typography>
          </CardBase>
        </Grid>
        <Grid item xs={6} sm={3} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
              <i className={clsx(classes.icon, 'fas fa-couch', 'card-icon')} />
            </div>
            <Typography
              variant="h5"
              color="textPrimary"
              align="center"
              noWrap
              className={clsx(classes.title, 'card-title')}
            >
              Comfortable
            </Typography>
          </CardBase>
        </Grid>
        <Grid item xs={6} sm={3} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
              <i
                className={clsx(classes.icon, 'fas fa-box-tissue', 'card-icon')}
              />
            </div>
            <Typography
              variant="h5"
              color="textPrimary"
              align="center"
              noWrap
              className={clsx(classes.title, 'card-title')}
            >
              Modern house
            </Typography>
          </CardBase>
        </Grid>
        <Grid item xs={6} sm={3} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
              <i
                className={clsx(classes.icon, 'fas fa-box-tissue', 'card-icon')}
              />
            </div>
            <Typography
              variant="h5"
              color="textPrimary"
              align="center"
              noWrap
              className={clsx(classes.title, 'card-title')}
            >
              Modern house
            </Typography>
          </CardBase>
        </Grid>
        <Grid item xs={6} sm={3} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
              <i
                className={clsx(classes.icon, 'fas fa-box-tissue', 'card-icon')}
              />
            </div>
            <Typography
              variant="h5"
              color="textPrimary"
              align="center"
              noWrap
              className={clsx(classes.title, 'card-title')}
            >
              Modern house
            </Typography>
          </CardBase>
        </Grid>
        <Grid item xs={6} sm={3} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
              <i
                className={clsx(classes.icon, 'fas fa-box-tissue', 'card-icon')}
              />
            </div>
            <Typography
              variant="h5"
              color="textPrimary"
              align="center"
              noWrap
              className={clsx(classes.title, 'card-title')}
            >
              Modern house
            </Typography>
          </CardBase>
        </Grid>
        <Grid item xs={6} sm={3} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
              <i
                className={clsx(classes.icon, 'fas fa-box-tissue', 'card-icon')}
              />
            </div>
            <Typography
              variant="h5"
              color="textPrimary"
              align="center"
              noWrap
              className={clsx(classes.title, 'card-title')}
            >
              Modern house
            </Typography>
          </CardBase>
        </Grid>
        <Grid item xs={6} sm={3} data-aos="fade-up">
          <CardBase withShadow liftUp className={classes.cardBase}>
            <div>
              <i
                className={clsx(classes.icon, 'fas fa-box-tissue', 'card-icon')}
              />
            </div>
            <Typography
              variant="h5"
              color="textPrimary"
              align="center"
              noWrap
              className={clsx(classes.title, 'card-title')}
            >
              Modern house
            </Typography>
          </CardBase>
        </Grid>
      </Grid>
    </div>
  );
};

NewDetails.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default NewDetails;
