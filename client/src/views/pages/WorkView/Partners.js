import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { SectionHeader } from 'src/components/molecules';
import { Image } from 'src/components/atoms';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  noBg: {
    background: 'transparent',
  },
  copy: {
    textAlign: 'center',
    maxWidth: 700,
    margin: '0 auto',
    padding: theme.spacing(2, 2, 0, 2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4, 2, 0, 2),
    },
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  logoImg: {
    maxWidth: 100,
    height: 'auto !important',
  },
  fontWeight700: {
    fontWeight: 700,
  },
}));

const Partners = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
      <div className={classes.copy}>
        <SectionHeader
        title={
          <span>
            We make moving{' '}
            <span className="text-highlighted">
              Easy
            </span>
          </span>
        }
          subtitle="Professional and secure packing of furniture and valuable objects."
          data-aos="fade-up"
          align="center"
        />
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
