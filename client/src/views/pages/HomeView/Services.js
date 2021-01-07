import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, GridList, GridListTile, Button } from '@material-ui/core';
import { Image } from 'src/components/atoms';
import { SectionHeader } from 'src/components/molecules';
import { Link as RouterLink } from 'react-router-dom';
import MyButton from 'src/components/MyButton';
import { LearnMoreLink } from 'src/components/atoms';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 40,
  },
  image: {
    objectFit: 'cover',
    borderRadius: theme.spacing(1),
  },
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 600,
  },
  starting: {
  },
  gridListTile: {
    position: 'relative',
  },
  gridListSection: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '85%',
    margin: 'auto',
  },
}));

const Services = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title='Service that works for you'
      />
    <GridList cellHeight={isSm ? 350 : 350} cols={4} spacing={isSm ? 24 : 8}>
        {data.map((item, index) => (
          <GridListTile
            key={index}
            cols={isSm ? item.cols : 4 || 1}
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
              title={<span className={clsx(classes.textWhite, classes.title)}>{item.location}</span>}
              subtitle={
                <span className={clsx(classes.textWhite, classes.starting)}>
                  {item.properties}
                </span>
              }
              subtitleVariant='subtitle1'
              titleProps={{
                variant: 'h2',
              }}
              disableGutter
              className={classes.gridListSection}
              align="center"
              ctaGroup={[<LearnMoreLink title="Learn more" to='/services' variant='subtitle1'/>]}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

Services.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Services;
