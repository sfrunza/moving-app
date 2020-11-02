import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { useMediaQuery, Grid, Button, colors } from '@material-ui/core';
import { IconText } from 'src/components/atoms';
import { SectionHeader } from 'src/components/molecules';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.dark,
    // padding: theme.spacing(12, 2),
    // borderRadius: '16px'
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    borderRadius: '24px',
  }
}));

const IncludeSection = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid
        container
        spacing={isMd ? 4 : 0}
        alignItems={isMd ? 'center' : 'flex-start'}
      >
        <Grid item xs={12} md={4} data-aos="fade-up" >
          <SectionHeader
            title="What's included"
            className={classes.header}
            ctaGroup={[
              <Button
                variant="contained"
                size={isMd ? 'large' : 'medium'}
                color="secondary"
                component={RouterLink}
                to='/book'
                className={classes.button}
              >
                Book Now
              </Button>,
            ]}
            fadeUp
            align={isMd ? 'left' : 'center'}
            disableGutter={isMd}
          />
        </Grid>
        <Grid item xs={12} md={8} data-aos="fade-up">
          <Grid container spacing={8}>
            {data.map((item, index) => (
              <Grid key={index} item xs={12} sm={6} data-aos={'fade-up'}>
                <Grid item container alignItems="center" xs={12} wrap="wrap">
                  <IconText
                    fontIconClass={item.icon}
                    color={colors.indigo[500]}
                    title={item.title}
                  />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

IncludeSection.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default IncludeSection;
