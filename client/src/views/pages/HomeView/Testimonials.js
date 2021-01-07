import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, colors, Box, Typography } from '@material-ui/core';
import { Image } from 'src/components/atoms';
import { SectionHeader, IconAlternate } from 'src/components/molecules';
import { CardReview } from 'src/components/organisms';
import stars from 'src/assets/img/rated-by-our-customer.png'
import MyButton from 'src/components/MyButton'

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
  secondCard: {
    width: '95%',
    height: '95%',
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
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="What people are saying"
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
              className={index !== 1 ?classes.secondCard : null}
            />
          </Grid>
        ))}
        <Grid item container xs={12} justify="center" style={{marginTop: '27px'}}>
          <MyButton
            variant="outlined"
            size={isMd ? 'large' : 'medium'}
            color="secondary"
            to='#'
            text="See all reviews"
          />
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
