import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Button, useMediaQuery } from '@material-ui/core';
import { IconAlternate, SectionHeader } from 'src/components/molecules';
import { DescriptionListIcon, CardJobMinimal } from 'src/components/organisms';
import { Link as RouterLink } from 'react-router-dom';
import MyButton from 'src/components/MyButton'

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
        title="Flat rates"
        subtitle="Call us for more infomation and rates."
        subtitleProps={{
          variant: 'body1',
          color: 'textSecondary',
        }}

      />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {data.account.items.map((item, index) => (
              <Grid item xs={12} key={index} >
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
              <Grid item xs={12} key={index} >
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
          <MyButton
            variant="contained"
            color="secondary"
            size={isMd ? 'large' : 'medium'}
            to='/book'
            text='Book us now'
          />
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
