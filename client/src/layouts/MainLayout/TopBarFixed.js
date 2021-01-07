import React, {
  forwardRef,
  useEffect,
  useState,
  useRef
} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  NavLink as RouterLink
} from 'react-router-dom';
import {
  makeStyles,
  withStyles
} from '@material-ui/core/styles';
import axios from 'axios'
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
import MyButton from 'src/components/MyButton'

import {
  Image
} from 'src/components/atoms';
import logo from 'src/assets/img/looool.png'
import logoWhite from 'src/assets/img/logowhite.png'
import PersonIcon from '@material-ui/icons/Person';
import Account from './Account'

const useStyles = makeStyles((theme, props) => ({
  root: {
    boxShadow: 'none',
    background: theme.palette.white,
    borderBottom: 'none',
    backgroundColor: 'transparent',
    position: 'absolute',
    height: 54,
    justifyContent: 'center',
    top: 0,
    zIndex: 1,
  },
  root2: {
    // boxShadow: 'none',
    // backgroundColor: '#fff',
    // position: 'fixed',
    // borderBottom: `1px solid ${colors.grey[200]}`,
    // transition: 'position 3s',
    // transition: 'top 0.6s',
    // height: '54px',
    justifyContent: 'center',
    // top: 0,
    // zIndex: 1000,
    // transitionProperty: 'background-color, border-bottom',
    // transitionDuration: '0.5s',
    // transitionAnimation: '0.15s ease',
    background: '#fff',
    overflow: 'hidden',
    color: '#000',
    position: 'fixed',
    // lineHeight: 54,
    height: 54,
    boxShadow: '0px 1px 0px 0px rgb(238 238 238)',
    zIndex: 1,

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
    padding: theme.spacing(2)
  },
  listItemLast: {
    width: 'auto',
    padding: theme.spacing(0)
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
    color: 'rgb(5, 15, 25)',
    fontWeight: 500,
    '&:hover': {
      color: theme.palette.primary.dark,
      cursor: 'pointer',
    },
  },
  listItemText2: {
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
    color: '#fff',
    fontWeight: 500,
    '&:hover': {
      color: '#fff',
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
  loginIconButton: {
    padding: 0,
    color: '#fff',
    '&:hover': {
      background: 'transparent',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark,
  },
  logoContainer: {
    width: 60,
    height: 35,
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      width: 70,
      height: 40,
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
  loginLink: {
    display: 'flex',
    alignItems: 'center',
  },
  bookLogin: {
    border: '1px solid #fff',
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref}>
    <RouterLink {...props}/>
  </div>
));

const ColorButton = withStyles((theme) => ({
  root: {
  color: '#fff',
},
}))(Button);

function TopBarFixed({
  className,
  onSidebarOpen,
  pages,loggedInStatus,
  handleLogout,
  user,
  ...rest
}) {

  const history = rest.history
  const fullName = user.first_name + "_" + user.last_name
  const [currentJob, setCurrentJob] = useState(null)
  const [path, setPath] = useState('false')
  const classes = useStyles();

  const handleClick = () => {
    axios.delete('/users/sign_out', { withCredentials: true})
    .then(response => {
      handleLogout()
    })
    .catch(error => console.log(error))
  }

  const getJob = (userId) => {
    axios.get(`/api/v1/users/${userId}`)
    .then((response) => {
      if (response.data.user.admin === true) {
        setPath('/app')
      } else if (response.data.user.customer === true) {
        let currentJob = response.data.jobs[0].id
        setCurrentJob(currentJob)
        setPath(`/account/jobs/${currentJob}`)
      } else setPath('/calendar')
    });
  }

  useEffect(() => {
    if (loggedInStatus) {
      getJob(user.id);
    }
  }, [getJob])


  let colored = false
  if (history.location.pathname === '/login' || history.location.pathname === '/book'){
    colored = true
  }

  return (
    <AppBar
      {...rest}
      position="relative"
      data-tap-toggle="false"
      className={colored ? clsx(classes.root, className) : clsx(classes.root2, className)}
    >
    <Toolbar disableGutters className={classes.toolbar}>
      <div className={classes.logoContainer}>
        <Link to="/" component={CustomRouterLink}>
          <Image
            className={classes.logoImage}
            src={colored ? logoWhite : logo}
            alt="insightmoving"
            lazy={false}
          />
        </Link>
      </div>
      <div className={classes.flexGrow}/>
        <Hidden smDown >
          <List className={classes.navigationContainer}>
            <ListItem className={classes.listItem} >
              <Typography variant="body2"
                color="textSecondary"
                className={colored ? classes.listItemText2 : classes.listItemText}
                component={CustomRouterLink}
                to="/"
              >
                Home
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem} >
              <Typography variant="body2"
                color="textSecondary"
                className={colored ? classes.listItemText2 : classes.listItemText}
                component={CustomRouterLink}
                to="/services"
              >
                Services
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem} >
              <Typography variant="body2"
                color="textSecondary"
                className={colored ? classes.listItemText2 : classes.listItemText}
                component={CustomRouterLink}
                to="/pricing"
              >
                Pricing
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem} >
              <Typography variant="body2"
                color="textSecondary"
                className={colored ? classes.listItemText2 : classes.listItemText}
                component={CustomRouterLink}
                to="/work"
              >
                Our Work
              </Typography>
            </ListItem>
          </List>
          <div className={classes.flexGrow}/>
          <List className={classes.navigationContainer} >
            <ListItem className={classes.listItem}>
            {
              !loggedInStatus ?
              <Typography
                variant="body2"
                color="textSecondary"
                className={colored ? clsx(classes.listItemText2, classes.loginLink) : clsx(classes.listItemText, classes.loginLink)}
                component={CustomRouterLink}
                to="/login"
              >
                <PersonIcon style={{height: '0.9em'}}/>
                Login
              </Typography> :
              <Account
                user={user}
                handleLogout={handleLogout}
                currentJob={currentJob}
                path={path}
              />
            }
            </ListItem>
            <ListItem className={classes.listItemLast}>
              {
                colored ?
                <MyButton
                  size="small"
                  variant="outlined"
                  className={classes.bookLogin}
                  color="inherit"
                  to="/book"
                  text="Get Started"
                /> :
                <MyButton
                  size="small"
                  variant="contained"
                  color="secondary"
                  to="/book"
                  text="Get Started"
                />
              }
            </ListItem>
          </List>
        </Hidden>
        <Hidden mdUp >
          <IconButton
            className={colored ? classes.loginIconButton : classes.iconButton}
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

TopBarFixed.propTypes = {
  className:PropTypes.string,
  onSidebarOpen: PropTypes.func,
  pages:PropTypes.object.isRequired,
};

export default TopBarFixed;
