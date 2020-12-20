import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, GridList, GridListTile, Button } from '@material-ui/core';
import { Image } from 'src/components/atoms';
import { SectionHeader } from 'src/components/molecules';
import { Link as RouterLink } from 'react-router-dom';
import MyButton from 'src/components/MyButton';

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    objectFit: 'cover',
    borderRadius: theme.spacing(1),
  },
  textWhite: {
    color: 'white',
  },
  starting: {
    fontSize: '22px',
  },
  gridListTile: {
    position: 'relative',
  },
  gridListSection: {
    position: 'absolute',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
  button: {
    borderRadius: '24px',
  }
}));

const Places = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title='Long Distance Movers in Boston'
        subtitle="Flat Rate Moving. Gas, mileage, tolls, insurance are included. No hidden fees. Miami, Chicago, Dallas, Atlanta... We move people everywhere!"
        subtitleProps={{
          variant: 'body1',
          color: 'textSecondary',
        }}
        ctaGroup={[
          <MyButton
            variant="outlined"
            size={isMd ? 'large' : 'medium'}
            color="secondary"
            to='/pricing'
            text="See more destinations"
          />
        ]}
        data-aos="fade-up"
      />
      <GridList cellHeight={isMd ? 360 : 260} cols={4} spacing={isMd ? 24 : 8}>
        {data.map((item, index) => (
          <GridListTile
            key={index}
            cols={isMd ? item.cols : 4 || 1}
            className={classes.gridListTile}
          >
            <Image
              {...item.image}
              alt={item.location}
              className={classes.image}
              lazyProps={{
                width: '100%',
                height: '100%',
              }}
            />
            <SectionHeader
              title={<span className={classes.textWhite}>{item.location}</span>}
              subtitle={
                <span className={clsx(classes.textWhite, classes.starting)}>
                  From ${item.properties}
                </span>
              }
              disableGutter
              className={classes.gridListSection}
              align="left"
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

Places.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Places;
