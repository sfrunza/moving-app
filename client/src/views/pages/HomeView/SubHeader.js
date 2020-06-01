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

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    backgroundColor: 'transparent',
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
    fontSize: '2em',
    fontFamily: 'Maison Neue Normal'
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
                <Box className={classes.avatar}>
                  01
                </Box>
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
                <Box className={classes.avatar}>
                  02
                </Box>
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
                <Box className={classes.avatar}>
                  03
                </Box>
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
