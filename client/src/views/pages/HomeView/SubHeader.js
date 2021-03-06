import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { Image } from 'src/components/atoms';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#f5f7ff',
    width: '100%',
  },
  noBg: {
    background: 'transparent',
  },
  copy: {
    textAlign: 'center',
    maxWidth: 700,
    margin: '0 auto',
    padding: theme.spacing(2, 2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4, 2),
    },
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  logoImg: {
    maxWidth: 100,
    height: 'auto !important',
  },
}));

const Partners = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={classes.copy}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              color="textSecondary"
              align="center"
            >
              Our work has been featured in:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="space-between" alignItems='center'>
              {data.map((partner, index) => (
                <Grid item xs={6} sm={2} key={index}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className={classes.logoImg}
                    lazy={false}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Partners.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Partners;
