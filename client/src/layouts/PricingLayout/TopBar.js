import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Button,
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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default
  },
  toolbar: {
    height: 64
  },
  logo: {
    marginRight: theme.spacing(2)
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    display: 'flex',
    alignItems: 'center',
    '& + &': {
      marginLeft: theme.spacing(2)
    },
    '&:hover': {
      color: deepPurple['A200']
    }
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
    '&:hover': {
      backgroundColor: deepPurple[700],
    },
    padding: '5px 10px',
    borderRadius: '4px'
  },
  list : {
    width : 200,
  },
  item: {
    padding: '1em 2em'
  },
  padding: {
    paddingRight : 30,
    cursor : "pointer",
  },
  sideBarIcon: {
    padding : 0,
    color : "#546e7a",
    cursor : "pointer",
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
      if(window.innerWidth <= 700){
        setDrawerActivate(true);
      }
      else{
        setDrawerActivate(false)
      }
    });

    return () => {
      mounted = false;
    };
  });

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
         onOpen={()=>{setDrawer(true)}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{setDrawer(false)}}
             onKeyDown={()=>{setDrawer(false)}}>

            <List className = {classes.list}>
               <ListItem key = {1} button divider className = {classes.item}>
                 <Link
                   className={classes.link}
                   color="textSecondary"
                   component={RouterLink}
                   to="/home"
                   underline="none"
                   variant="body2"
                 >
                   Home
                 </Link>
               </ListItem>
               <ListItem key = {2} button divider className = {classes.item}>
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
               </ListItem>
               <ListItem key = {3} button divider className = {classes.item}>
                 <Link
                   className={classes.link}
                   color="textSecondary"
                   component={RouterLink}
                   to="/docs"
                   underline="none"
                   variant="body2"
                 >
                   Gallery
                 </Link>
               </ListItem>
               <ListItem key = {4} button divider className = {classes.item}>
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
               </ListItem>
               <ListItem key = {5} button className = {classes.item}>
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
              to="/home"
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
              to="/docs"
              underline="none"
              variant="body2"
            >
              Gallery
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
