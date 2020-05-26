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
    // backgroundColor: deepPurple[50],
    // paddingTop: '1em',
    // paddingBottom: '1em'
  },
  avatar: {
    backgroundColor: 'transparent',
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
    fontWeight: 400,
    fontSize: '2em'

  },
  text: {
    marginTop: '8px',
    color: theme.palette.common.white,
    fontFamily: 'Maison Neue Demi'
  },
  firstBox: {
    backgroundColor: '#e42c64',
    display: 'flex',
    justifyContent: 'center',
    padding: '1em',
    alignItems: 'baseline'

  },
  secondBox: {
    backgroundColor: '#614ad3',
    display: 'flex',
    justifyContent: 'center',
    padding: '1em',
    alignItems: 'baseline'

  },
  lastBox: {
    backgroundColor: '#2d248a',
    display: 'flex',
    justifyContent: 'center',
    padding: '1em',
    alignItems: 'baseline'
  },
  container: {
    paddingLeft: '0px',
    paddingRight: '0px',
    maxWidth: '100%'
  }
}));

function SubHeader({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container className={classes.container}>
        <Box>
          <Grid
            container
          >
            <Grid
              item
              xs={12}
              md={4}
            >
              <Box className={classes.firstBox}>
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
              <Box className={classes.secondBox}>
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
