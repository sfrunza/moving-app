import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Button, useMediaQuery } from '@material-ui/core';
import { IconAlternate, SectionHeader } from 'src/components/molecules';
import { DescriptionListIcon, CardJobMinimal } from 'src/components/organisms';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {},
  descriptionListIcon: {
    marginBottom: theme.spacing(2),
  },
  marginTop: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(5),
    },
  },
  rate: {
    fontSize: '18px',
    padding: '0px 7px',
  },
  bookContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(5)

  },
  button: {
    borderRadius: '24px',
  }
}));

const Interstate = props => {
  const { data, className, ...rest } = props;
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
            Flat Rates
          </span>
        }
        subtitle={
          <span>
            Call us for more infomation and rates.
          </span>
        }
        subtitleProps={{
          variant: 'body1',
          color: 'textSecondary',
        }}
        data-aos="fade-up"
      />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {data.account.items.map((item, index) => (
              <Grid item xs={12} key={index} data-aos="fade-up">
                <CardJobMinimal
                  title={item.title}
                  subtitle={
                    <span className={classes.subtitle}>
                      <span>
                        Starting From
                      </span>
                      <span className={classes.rate}>
                        {item.updated}
                      </span>
                    </span>
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {data.billing.items.map((item, index) => (
              <Grid item xs={12} key={index} data-aos="fade-up">
                <CardJobMinimal
                  title={item.title}
                  subtitle={
                    <span className={classes.subtitle}>
                      <span>
                        Starting From
                      </span>
                      <span className={classes.rate}>
                        {item.updated}
                      </span>
                    </span>
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.bookContainer}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            size={isMd ? 'large' : 'medium'}
            component={RouterLink}
            to='/book'
            >
            Book us now
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Interstate.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.object.isRequired,
};

export default Interstate;
