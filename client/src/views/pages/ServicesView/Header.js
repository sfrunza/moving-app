import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://meelheimsmoving.com/wp-content/uploads/2017/04/bigstock-Packed-household-goods-for-mov-131525006.jpg)',
    backgroundSize: '100% 110%',
    paddingTop: 200,
    paddingBottom: 200,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 80,
      paddingBottom: 80,
    }
  },
  header: {
    color: '#fff',
    textShadow: '2px 2px 5px #000',
    zIndex: 1,
  },
  subHeader: {
    color: '#fff',
    textShadow: '2px 2px 5px #000',
    zIndex: 1,
  }
}));

function Header({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Grid
          container
          // spacing={3}
          style={{justifyContent: 'center'}}
        >
          <Grid
            item
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
            >
              <Typography
                variant="h1"
                className={classes.header}
              >
                Moving Services
              </Typography>
              <Box mt={3} className={classes.subHeader}>
                <Typography
                  variant="body1"
                >
                  We treat your belongings with the utmost care
                </Typography>
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
