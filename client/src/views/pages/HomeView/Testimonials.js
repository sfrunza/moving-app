import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: 128,
    paddingBottom: 128,
  },
  ratingTitle: {
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: "Maison Neue Demi"
  },
  ratingConatiner: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: '1em',
    marginRight: '1em',
  },
  ratingStars: {
    marginRight: '1em',
    display: 'flex',
    textAlign: 'left'
  },
  header: {
    fontFamily: 'Maison Neue Bold',
  }
}));

function Testimonials({ className, ...rest }) {
  const classes = useStyles();
  const [value] = React.useState(5);

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h1"
          align="center"
          color="textPrimary"
          className={classes.header}
        >
          What people are saying
        </Typography>
        <Box borderColor="transparent" className={classes.ratingConatiner} mt={6}>
          <Rating value={value} readOnly className={classes.ratingStars}/>
          <Typography component="legend" style={{fontFamily: "Maison Neue"}}>
              Rating: 5 - 271 reviews
          </Typography>
        </Box>
        <Typography
          variant="h3"
          align="center"
          color="textPrimary"
          className={classes.ratingTitle}
        >
          &quot;Devias builds some of the best templates you can find for React.
          <br />
          They will save you time.&quot;
        </Typography>
        <Box
          mt={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar src="/static/home/olivier.png" alt="ReviewUser" />
          <Box ml={2}>
            <Typography
              variant="body1"
              color="textPrimary"
            >
              Olivier Tassinari
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

Testimonials.propTypes = {
  className: PropTypes.string
};

export default Testimonials;
