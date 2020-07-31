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
import Calculator from './Calculator'
import CalcHooks from './CalcHooks'
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import { deepPurple, amber, deepOrange, blueGrey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  callFab: {
    backgroundColor: theme.palette.background.paper,
    fontSize: '16px',
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
    fontSize: '2em',
  },
  callBox: {
    // position: 'fixed',
    // width: 'fit-content',
    // zIndex: '1',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'flex-end',
    // height: '10em',
    // position: 'relative',
    // top: '-21em',
    // display: 'flex',
    // justifyContent: 'flex-end',
    // [theme.breakpoints.down('sm')]: {
    //   flexDirection: 'row',
    //   bottom: '1em',
    //   left: '1em',
    //   minWidth: '140px',
    //   height: 'auto',
    // },
  },
  callConatiner: {
    // justifyContent: 'center',
    // alignItems: 'flex-end',
    // flexDirection: 'column',
    // display: 'flex',
  },
  phone: {
    color: 'green',
  },
  email: {
    color: 'red',
    textTransform: 'lowercase',
  },
  ggg: {
    fontFamily: "Maison Neue Demi",
    fontSize: '14px',
    textTransform: 'lowercase',
    marginLeft: '10px'
  },
  tooltipCall: {
    fontSize: '25px',

  }
}));

function Contact({ className, ...rest }) {
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
      <Container maxWidth="xl" className={classes.callConatiner}>
      {!isMobile ?
        <Grid item container xs={6} className={classes.callBox}>
            <Fab
              aria-label="call"
              className={clsx(classes.callFab, classes.phone)}
              variant="extended"
              size='large'
              href={"tel:" + phoneNr}
              onMouseOver={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}

            >

              {!isShown ? <CallIcon className={classes.callIcon}/> : (<div>(617)-206-0968</div>)}
            </Fab>
            <Fab
              aria-label="email"
              className={clsx(classes.callFab, classes.email)}
              variant="extended"
              size='large'
              href={"mailto:" + email}
              onMouseOver={() => setEmailShown(true)}
              onMouseLeave={() => setEmailShown(false)}

            >

              {!emailShown ? <EmailIcon className={classes.callIcon}/> : (<div>info@insightmoving.com</div>)}

            </Fab>
        </Grid>
        :
        <Grid item container xs={6} className={classes.callBox}>
            <Fab
              aria-label="call"
              className={clsx(classes.callFab, classes.phone)}
              variant="round"
              size='large'
              href={"tel:" + phoneNr}
            >

              <CallIcon className={classes.callIcon}/>
            </Fab>
            <Fab
              aria-label="email"
              className={clsx(classes.callFab, classes.email)}
              variant="round"
              size='large'
              href={"mailto:" + email}
            >

              <EmailIcon className={classes.callIcon}/>

            </Fab>
        </Grid>
      }

      </Container>
    </div>
  );
}

Contact.propTypes = {
  className: PropTypes.string
};

export default Contact;
