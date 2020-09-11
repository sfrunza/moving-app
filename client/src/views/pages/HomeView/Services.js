import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Typography, Grid } from '@material-ui/core';
import { Image, LearnMoreLink } from 'src/components/atoms';
import { CardProduct } from 'src/components/organisms';
import { SectionHeader } from 'src/components/molecules';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(12, 0, 0, 0),
  },
  cardProduct: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: theme.spacing(1),
    boxShadow: 'none',
    background: 'transparent',
    paddingBottom: theme.spacing(2),
    '& .card-product__content': {
      padding: theme.spacing(4),
      zIndex: 1,
      background: 'white',
      width: '90%',
      margin: '0 auto',
      marginTop: theme.spacing(-6),
      borderRadius: theme.spacing(1),
      boxShadow: '0 3px 10px 2px rgba(0, 0, 0, 0.1)',
    },
    '& .card-product__media': {
      minHeight: 300,
      '& img': {
        transitionDuration: '.7s',
        transform: 'scale(1.0)',
      },
    },
    '&:hover': {
      '& .card-product__media img': {
        transform: 'scale(1.2)',
      },
    },
  },
  image: {
    objectFit: 'cover',
  },
  blogTitle: {
    fontWeight: 700,
    margin: theme.spacing(0, 2, 2, 0),
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing(3, 0, 0, 0),
  },
  tag: {
    padding: theme.spacing(1 / 2, 1),
    borderRadius: theme.spacing(1 / 2),
    color: '#4caf50',
    border: '1px solid #4caf50',
    margin: theme.spacing(0, 1, 1, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 2, 2, 0),
    },
  },
  author: {
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(2, 0),
    },
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  learnMoreLink: {
    marginTop: theme.spacing(2),
  },
}));

const Services = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const BlogMediaContent = props => (
    <Image
      {...props}
      className={classes.image}
      lazyProps={{ width: '100%', height: '100%' }}
    />
  );

  const BlogContent = props => (
    <div>
      <Typography
        variant="h5"
        color="textPrimary"
        className={classes.blogTitle}
      >
        {props.title}
      </Typography>
      <Typography variant="body1" color="textPrimary">
        {props.subtitle}
      </Typography>
      <div className={classes.tags}>
        {props.tags.map((item, index) => (
          <Typography variant="body1" className={classes.tag} key={index}>
            {item}
          </Typography>
        ))}
      </div>
      <LearnMoreLink
        title="Learn more"
        variant="body1"
        className={classes.learnMoreLink}
        to='/services'
      />
    </div>
  );

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 10 : 6}>
        <SectionHeader
          title={
            <span>
              Service that{' '}
              <span className="text-highlighted">
                Works for You
              </span>
            </span>
          }
          data-aos="fade-up"
        />
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} key={index} data-aos="fade-up">
            <CardProduct
              className={classes.cardProduct}
              mediaContent={
                <BlogMediaContent {...item.cover} alt={item.title} />
              }
              cardContent={
                <BlogContent
                  title={item.title}
                  subtitle={item.subtitle}
                  author={item.author}
                  date={item.date}
                  tags={item.tags}
                />
              }
            />
          </Grid>
        ))}
      </Grid>
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
