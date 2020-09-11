import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Button, colors, Box, Typography } from '@material-ui/core';
import { Image } from 'src/components/atoms';
import { SectionHeader, IconAlternate } from 'src/components/molecules';
import { CardReview } from 'src/components/organisms';
import stars from 'src/assets/img/rated-by-our-customer.png'

const useStyles = makeStyles((theme) => ({
  root: {},
  sectionHeadlineStars: {
    maxWidth: 120,
  },
  rating: {
    maxWidth: '20em',
    margin: '0px auto',
    padding: theme.spacing(0, 0, 3),
  },
  button: {
    borderRadius: '24px',
  }
}));

const Testimonials = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
      <SectionHeader
        title={
          <span>
            What people are saying
          </span>
        }
        fadeUp
      />
      <Grid container className={classes.rating} justify="space-evenly" alignItems='center'>
        <Box>
          <Image
            src={stars}
            alt="rating"
            className={classes.sectionHeadlineStars}
            width="auto"
          />
        </Box>
        <Box>
          <Typography>
            Rating: 5 - 271 reviews
          </Typography>
        </Box>

      </Grid>
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((review, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={4}
            data-aos="fade-up"
          >
            <CardReview
              variant="outlined"
              text={review.feedback}
              icon={
                <IconAlternate
                  color={colors.blue}
                  fontIconClass="fas fa-quote-right"
                />
              }
              authorName={review.authorName}
              authorTitle={review.authorOccupation}
              authorPhoto={review.authorPhoto}
            />
          </Grid>
        ))}
        <Grid item container xs={12} justify="center">
          <Button
            variant="outlined"
            size={isMd ? 'large' : 'medium'}
            color="secondary"
            className={classes.button}
          >
            See all reviews
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Testimonials.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Testimonials;
