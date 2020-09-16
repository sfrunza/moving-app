import React, { forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  IconButton,
  Button,
  colors,
  Link
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { Image } from 'src/components/atoms';
import logo from 'src/assets/img/looool.png'
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    background: theme.palette.white,
    borderBottom: `1px solid ${colors.grey[200]}`,
    backgroundColor: '#fff',
  },
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    maxWidth: 1100,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  navLink: {
    fontWeight: 300,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItem: {
    width: 'auto',
  },
  listItemActive: {
    '&> .menu-item': {
      color: theme.palette.primary.dark,
    },
  },
  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
    '&:hover': {
      color: theme.palette.primary.dark,
      cursor: 'pointer',
    },
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
    minWidth: 350,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark,
  },
  logoContainer: {
    width: 70,
    height: 40,
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      width: 95,
      height: 50,
    },
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    marginRight: theme.spacing(5),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
  button: {
    borderRadius: '24px',
  },
  loginLink: {
    display: 'flex',
    alignItems: 'center',
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref}>
    <RouterLink {...props} />
  </div>
));

const Topbar = props => {
  const { className, onSidebarOpen, pages, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      position="relative"
      className={clsx(classes.root, className)}
    >
      <Toolbar disableGutters className={classes.toolbar}>
        <div className={classes.logoContainer}>
          <Link to="/" component={CustomRouterLink}>
            <Image
              className={classes.logoImage}
              src={logo}
              alt="insightmoving"
              lazy={false}
            />
          </Link>
        </div>
        <div className={classes.flexGrow} />
        <Hidden smDown>
          <List className={classes.navigationContainer}>
            <ListItem className={classes.listItem}>
              <Typography
              variant="body2"
              color="textSecondary"
              className={classes.listItemText}
              component={CustomRouterLink}
              to="/"
              >
                Home
              </Typography>
            </ListItem>

            <ListItem className={classes.listItem}>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.listItemText}
                component={CustomRouterLink}
                to="/services"
              >
                Services
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.listItemText}
                component={CustomRouterLink}
                to="/pricing"
              >
                Pricing
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.listItemText}
                component={CustomRouterLink}
                to="/work"
              >
                Our Work
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Typography
                variant="body2"
                color="textSecondary"
                className={clsx(classes.listItemText, classes.loginLink)}
                component={CustomRouterLink}
                to="/sign_in"
              >
                <PersonIcon style={{height: '0.9em'}}/>
                Client Login
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                size="large"
                variant="contained"
                color="secondary"
                component={CustomRouterLink}
                to="/book"
                className={classes.button}
              >
                Get Started
              </Button>
            </ListItem>
          </List>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={classes.iconButton}
            onClick={onSidebarOpen}
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
};

export default Topbar;
