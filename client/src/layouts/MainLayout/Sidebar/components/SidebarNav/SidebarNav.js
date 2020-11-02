/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Divider,
  Button
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PersonIcon from '@material-ui/icons/Person';
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  navLink: {
    fontWeight: 300,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  closeIcon: {
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    marginRight: theme.spacing(8),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 15,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
  divider: {
    width: '100%',
  },
  loginLink: {
    padding: theme.spacing(3, 1)
  },
  logOut: {
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    paddingLeft: '5px',
  },
  button: {
    borderRadius: '24px',
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));

function SidebarNav({ pages, onClose, className, loggedInStatus, handleLogout, user, ...rest }){

  const classes = useStyles();

  const handleClick = () => {
    axios.delete('/users/sign_out', {withCredentials: true})
    .then(response => {
      handleLogout()
    })
    .catch(error => console.log(error))

    onClose()
  }

  const landings = pages.landings;

  const MenuGroup = props => {
    const { item } = props;
    const pages = item.pages
    pages.pop()
    return (
      <List disablePadding>
        {pages.map((page, i) => {
          return (
            <ListItem disableGutters key={i} className={classes.menuGroupItem}>
              <Typography
                variant="body2"
                component={CustomRouterLink}
                to={page.href}
                className={clsx(classes.menuGroupTitle, 'submenu-item')}
                color="textSecondary"
                onClick={onClose}
              >
                {page.title}
              </Typography>
            </ListItem>
            )
          }
        )}
      </List>
    );
  };

  const LandingPages = () => {
    const { services } = landings.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={services} />
        </div>
      </div>
    );
  };




  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={onClose}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          Menu
        </Typography>
        <LandingPages />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Divider className={classes.divider} />
      </ListItem>

      <ListItem className={clsx(classes.listItem, classes.loginLink)}>
      {
        !loggedInStatus
        ?
        <Typography
          variant="body1"
          component={CustomRouterLink}
          to='/login'
          className={clsx(classes.menuGroupTitle, 'submenu-item', classes.logOut)}
          color="textSecondary"
          onClick={onClose}
          style={{display: 'flex'}}
        >
          <PersonIcon style={{height: '0.9em'}}/>
          Login
        </Typography>
        :
        <Typography
          variant="body1"
          color="textSecondary"
          onClick={handleClick}
          className={clsx(classes.menuGroupTitle, 'submenu-item', classes.logOut)}
          className={classes.logOut}
        >
          <PersonIcon style={{height: '0.9em'}}/>
          LOG OUT
        </Typography>
      }
      </ListItem>
      {
        loggedInStatus && user.admin
        ?
        <ListItem className={classes.listItem}>
          <Button
            component={CustomRouterLink}
            className={classes.button}
            onClick={onClose}
            variant="outlined"
            color="secondary"
            to="/app"
          >
            Admin Page
          </Button>
        </ListItem>
        : null
      }
      {
        loggedInStatus && !user.admin && !user.customer
        ?
        <ListItem className={classes.listItem}>
          <Button
            component={CustomRouterLink}
            className={classes.button}
            onClick={onClose}
            variant="outlined"
            color="secondary"
            to="/calendar"
          >
            Calendar
          </Button>
        </ListItem>
        : null
      }
      {
        loggedInStatus && user.customer
        ?
        <ListItem className={classes.listItem}>
          <Button
            component={CustomRouterLink}
            className={classes.button}
            onClick={onClose}
            variant="outlined"
            color="secondary"
            to="/account"
          >
            Dashboard
          </Button>
        </ListItem>
        : null
      }
      <ListItem className={classes.listItem}>
        <Button
          component={CustomRouterLink}
          to='/book'
          className={classes.button}
          onClick={onClose}
          variant="contained"
          color="secondary"
        >
          Get Started
        </Button>
      </ListItem>
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
