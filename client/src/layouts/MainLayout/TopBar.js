import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Divider,
  Toolbar,
  Link,
  makeStyles,
  Typography,
  List,
  ListItem,
  Grid,
  SwipeableDrawer
} from '@material-ui/core';
import Logo from 'src/components/Logo';
import PersonIcon from '@material-ui/icons/Person';
import { deepPurple } from '@material-ui/core/colors'
import MenuIcon from '@material-ui/icons/Menu';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';
import ImageRoundedIcon from '@material-ui/icons/ImageRounded';
import LocalShippingRoundedIcon from '@material-ui/icons/LocalShippingRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    height: 64,
  },
  logo: {
    marginRight: theme.spacing(2)
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    display: 'flex',
    alignItems: 'center',
    fontFamily: "Maison Neue Demi",
    '& + &': {
      marginLeft: theme.spacing(2)
    },
    '&:hover': {
      color: deepPurple['A200']
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      lineHeight: '20px',
      width: '100%',
      verticalAlign: 'middle',
      fontFamily: "Maison Neue Normal",
    },

  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  button: {
    fontFamily: "Maison Neue Demi",
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    textAlign: 'center',
    '&:hover': {
      backgroundColor: deepPurple[700],
    },
    padding: '5px 10px',
    borderRadius: '4px'
  },
  list : {
    width : 200
  },
  item: {
    padding: '1em',
    height: '48px',
    '&:first-child': {
      marginBottom: '2em'
    }
  },
  padding: {
    paddingRight : 30,
    cursor : "pointer"
  },
  sideBarIcon: {
    padding : 0,
    color : "#546e7a",
    cursor : "pointer"
  },
  serviceText: {
    marginLeft: '16px',
  }
}));

function TopBar({ className, ...rest }) {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false)
  const [drawerActivate, setDrawerActivate] = useState(false)

  useEffect(() => {
    let mounted = true;

    if(window.innerWidth <= 700){
      setDrawerActivate(true);
    }
    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 960){
        setDrawerActivate(true);
      }
      else{
        setDrawerActivate(false)
      }
    });

    return () => {
      mounted = false;
    };
  },[]);

  const createDrawer = () => {
    return (
      <div>
        <AppBar
          className={clsx(classes.root, className)}
          color="default"
          {...rest}
        >
          <Toolbar className={classes.toolbar}>
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <MenuIcon
                className = {classes.sideBarIcon}
                onClick={()=>{setDrawer(true)}} />

              <Typography color="inherit" variant = "h3">
                <RouterLink to="/">
                  <Logo className={classes.logo} />
                </RouterLink>
              </Typography>
              <Typography color="inherit" variant = "h3"></Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         open={drawer}
         onClose={()=>{setDrawer(false)}}
         onOpen={()=>{setDrawer(true)}}
         >

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{setDrawer(false)}}
             onKeyDown={()=>{setDrawer(false)}}>

            <List className = {classes.list}>
              <ListItem key = {10} button className = {classes.item}>
                <RouterLink to="/">
                  <Logo className={classes.logo} />
                </RouterLink>
              </ListItem>
              <ListItem key = {1} button  className = {classes.item}>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  component={RouterLink}
                  to="/"
                  underline="none"
                  variant="body2"
                >
                  <div><HomeRoundedIcon /></div>
                  <div className = {classes.serviceText}>Home</div>
                </Link>
              </ListItem>
               <ListItem key = {2} button  className = {classes.item}>
                 <Link
                   className={classes.link}
                   color="textSecondary"
                   component={RouterLink}
                   to="/services"
                   underline="none"
                   variant="body2"
                 >
                   <div><LocalShippingRoundedIcon /></div>
                   <div className = {classes.serviceText}>Services</div>
                 </Link>
               </ListItem>
               <ListItem key = {3} button  className = {classes.item}>
                 <Link
                   className={classes.link}
                   color="textSecondary"
                   component={RouterLink}
                   to="/pricing"
                   underline="none"
                   variant="body2"
                 >
                   <div><AttachMoneyRoundedIcon /></div>
                   <div className = {classes.serviceText}>Pricing</div>
                 </Link>
               </ListItem>
               <ListItem key = {4} button divider className = {classes.item}>
                 <Link
                   className={classes.link}
                   color="textSecondary"
                   component={RouterLink}
                   to="/work"
                   underline="none"
                   variant="body2"
                 >
                 <div><ImageRoundedIcon /></div>
                 <div className = {classes.serviceText}>Our Work</div>
                 </Link>
               </ListItem>
               <ListItem key = {5} button className = {classes.item} style={{marginTop: '15px'}}>
                 <Link
                   className={classes.link}
                   color="textSecondary"
                   component={RouterLink}
                   to="/docs"
                   underline="none"
                   variant="body2"
                 >
                   <div><PersonIcon /></div>
                   <div className = {classes.serviceText}>Client Login</div>
                 </Link>
               </ListItem>
               <ListItem key = {6} button className = {classes.item}>
                 <Link
                   className={classes.button}
                   color="textSecondary"
                   component={RouterLink}
                   to="/book"
                   underline="none"
                   variant="body2"
                 >
                   GET STARTED
                 </Link>
               </ListItem>
             </List>

         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  const destroyDrawer = () => {
    return (
      <AppBar
        className={clsx(classes.root, className)}
        color="default"
        {...rest}
      >
        <Toolbar className={classes.toolbar}>
          <RouterLink to="/">
            <Logo className={classes.logo} />
          </RouterLink>
          <Box flexGrow={1} />
          <Box flexGrow={2} className={classes.box}>
            <Link
              className={classes.link}
              color="textSecondary"
              component={RouterLink}
              to="/"
              underline="none"
              variant="body2"
            >
              Home
            </Link>
            <Link
              className={classes.link}
              color="textSecondary"
              component={RouterLink}
              to="/services"
              underline="none"
              variant="body2"
            >
              Services
            </Link>
            <Link
              className={classes.link}
              color="textSecondary"
              component={RouterLink}
              to="/pricing"
              underline="none"
              variant="body2"
            >
              Pricing
            </Link>
            <Link
              className={classes.link}
              color="textSecondary"
              component={RouterLink}
              to="/work"
              underline="none"
              variant="body2"
            >
              Our Work
            </Link>
            <Link
              className={classes.link}
              color="textSecondary"
              component={RouterLink}
              to="/docs"
              underline="none"
              variant="body2"
            >
              <PersonIcon style={{height: '0.9em'}}/>
              Client Login
            </Link>
          </Box>
          <Box flexGrow={1} />
            <Divider className={classes.divider} />
            <Link
              className={classes.button}
              color="textSecondary"
              component={RouterLink}
              to="/book"
              underline="none"
              variant="body2"
            >
              GET STARTED
            </Link>
        </Toolbar>
      </AppBar>
    )
  }

  return (
    <div>
      {drawerActivate ? createDrawer() : destroyDrawer()}
    </div>
  );
}

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
