import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
  CardMedia,
  Button,
  Popover,
  Modal,
  Fade,
  Backdrop,
  Fab,
  Avatar,
  Tooltip
} from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import { green, deepPurple, teal, blueGrey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundImage: 'url(https://www.xpressmovers.com/wp-content/themes/Xpress/img/moving-day-example.svg)',
    backgroundSize: '55em',
    backgroundPosition: 'bottom 0px right 5%;',
    backgroundColor: green[50],
    paddingTop: '1em',
    paddingBottom: '13em',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('md')]: {
      paddingTop: '3em',
      paddingBottom: '15em',
      backgroundSize: '40em',
      backgroundPosition: 'bottom 0px center',
    },
    [theme.breakpoints.down('xs')]: {
      backgroundSize: '32em',
      backgroundPosition: 'bottom 0px center',
    },

  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  headerTitle: {
    color: theme.palette.primary.dark,
    fontFamily: "Maison Neue Bold",
    maxWidth: '460px',
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '325px'
    },
  },
  headerBody: {
    color: blueGrey[800],
    fontFamily: "Maison Neue Normal",
    maxWidth: '460px',
    textAlign: 'left',
    marginTop: '1em',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '325px'
    },
  },

  infoBox: {
    minWidth: '500px',
    marginLeft: '20%',
    paddingTop: '3em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0px'
    },

  },
  callFab: {
    backgroundColor: theme.palette.background.paper,
    fontSize: '16px',
    margin: '0px 1em',
    fontFamily: "Maison Neue Demi",
    boxShadow: '0 0 1px 0 rgba(0, 0, 0, 0.18), 0 4px 6px -2px rgba(0, 0, 0, 0.71)',
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    },
    '& > span > div': {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
    }

  },
  callIcon: {
    fontSize: '20px',
    display: 'flex',
    margin: '0px 5px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2em',
    },
  },
  callBox: {
    justifyContent: 'flex-end',

  },
  callConatiner: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      bottom: '1em',
      left: '0px',
      zIndex: '1',
    },

  },
  phone: {
    color: teal[500],
  },
  email: {
    color: deepPurple[500],
    textTransform: 'lowercase',
  },
}));

function Header({ className, ...rest }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const email = 'info@insightmoving.com'
  const phoneNr = '+16172060968'
  const [isShown, setIsShown] = useState(false);
  const [emailShown, setEmailShown] = useState(false);

  const isMobile = window.innerWidth < 960;
  const setVariant = isMobile ? "round" : "extended";

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="xl">
      <Box className={classes.callConatiner}>
      {!isMobile ?
        <Grid item container className={classes.callBox}>
            <Fab
              aria-label="call"
              className={clsx(classes.callFab, classes.phone)}
              variant="extended"
              size='medium'
              href={"tel:" + phoneNr}


            >

              <div><CallIcon className={classes.callIcon}/></div>
              <div>(617)-206-0968</div>
            </Fab>
            <Fab
              aria-label="email"
              className={clsx(classes.callFab, classes.email)}
              variant="extended"
              size='medium'
              href={"mailto:" + email}


            >

              <div><EmailIcon className={classes.callIcon}/></div>
              <div>info@insightmoving.com</div>

            </Fab>
        </Grid>
        :
        <Grid item container className={classes.callBox}>
            <Fab
              aria-label="call"
              className={clsx(classes.callFab, classes.phone)}
              variant="round"
              size='large'
              href={"tel:" + phoneNr}
            >

              <CallIcon className={classes.callIcon}/>
            </Fab>
        </Grid>
      }

      </Box>
        <Grid
          container
          spacing={3}
          justify='space-between'
          style={{marginTop: '1em'}}
        >
          <Grid
            item
            xs={6}

          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
              className={classes.infoBox}
            >

              <Typography
                variant="h1"
                className={classes.headerTitle}
              >
                A Badass Moving Company in Boston.
              </Typography>
              <Typography
                variant="h4"
                color='textSecondary'
                className={classes.headerBody}
              >
                Every move includes professional furniture protection at no extra charge.
              </Typography>

            </Box>
          </Grid>
          <Grid item xs={6}>
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
