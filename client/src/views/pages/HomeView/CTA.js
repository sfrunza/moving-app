import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  Box,
  Button,
  Link,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 128,
    paddingBottom: 128
  },
  browseButton: {
    fontFamily: "Maison Neue Demi",
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    '&:hover': {
      backgroundColor: deepPurple[700],
    }
  },
  subHeader: {
    color: deepPurple['A200'],
    fontFamily: 'Maison Neue Demi',
  },
  link: {
    '&:hover' :{
      textDecoration: 'none'
    }
  }
}));

function CTA({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          align="center"
          color="textPrimary"
          style={{fontFamily: "Maison Neue Bold" }}
        >
          Ready to Move?
        </Typography>
        <Typography
          variant="h2"
          align="center"
          className={classes.subHeader}
        >
          Reserve your movers with a few clicks
        </Typography>
        <Box
          mt={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            color="secondary"
            component={RouterLink}
            to="/book"
            variant="contained"
            className={classes.browseButton}
          >
            Request Your Move Online
          </Button>
        </Box>
      </Container>
    </div>
  );
}

CTA.propTypes = {
  className: PropTypes.string
};

export default CTA;
