import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: deepPurple[50],
    paddingTop: '1em',
    paddingBottom: '1em'
  },
  avatar: {
    backgroundColor: 'transparent',
    color: '#000',
    border: '1px solid',
    borderColor: deepPurple[300],
    fontWeight: 300

  },
  text: {
    marginTop: '8px',
    fontWeight: 300
  },
  lastBox: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

function SubHeader({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Box mt={1}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={12}
              md={4}
            >
              <Box className={classes.lastBox}>
                <Avatar className={classes.avatar}>
                  01
                </Avatar>
                <Box ml={2}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="textPrimary"
                    className={classes.text}
                  >
                    Free Instant Quote
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <Box className={classes.lastBox}>
                <Avatar className={classes.avatar}>
                  02
                </Avatar>
                <Box ml={2}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="textPrimary"
                    className={classes.text}
                  >
                    Clear Pricing. Affordable Rates
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
            >
              <Box className={classes.lastBox}>
                <Avatar className={classes.avatar}>
                  03
                </Avatar>
                <Box ml={2}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="textPrimary"
                    className={classes.text}
                  >
                    Easy Online Booking
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

SubHeader.propTypes = {
  className: PropTypes.string
};

export default SubHeader;
