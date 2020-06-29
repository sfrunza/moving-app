import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, Grid, Typography, Divider, Link, Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '10%',
    overflow: 'hidden',
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: "Maison Neue",
  },
  link: {
    cursor: 'pointer'
  },
  content: {
    fontFamily: "Maison Neue",
  }
}));

function Footer({ children }) {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Container maxWidth="sm"className={classes.wrapper}>
        <Typography className={classes.content}>
          Make moving chill.
        </Typography>
        <Typography className={classes.content}>
          © {new Date().getFullYear()}
        </Typography>
        <Typography className={classes.content}>
          <Link to="#" className={classes.link}>Privacy</Link>
        </Typography>
        <Typography className={classes.content}>
          <Link to="#" className={classes.link}>Terms</Link>
        </Typography>
      </Container>
    </Grid>
  );
}

Footer.propTypes = {
  children: PropTypes.any
};

export default Footer;


// <div className="insight-footer-tagline">
//   <p><span>Make moving chill.</span><span className="insight-footer-tagline-copyright">© 2020</span><a href="#" target="_blank" rel="noopener noreferrer">Privacy</a><a href="#" target="_blank" rel="noopener noreferrer">Terms</a></p>
// </div>
