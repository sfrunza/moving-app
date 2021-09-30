import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  IconButton,
  ListItemIcon,
  Button,
  useScrollTrigger,
  Fade,
  Fab,
} from "@material-ui/core";
import CustomRouterLink from "src/components/CustomRouterLink";
import Auth from "src/components/Auth";
import { NavLink } from "react-router-dom";
import Menu from "src/icons/Menu";
import User from "src/icons/User";
import { useSelector } from "src/store";
import Phone from "src/icons/Phone";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    justifyContent: "center",
    background: theme.palette.background.default,
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.divider}`,
    maxHeight: 56,
  },
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toolbar: {
    width: 1200,
    maxWidth: "100%",
    margin: "auto",
    padding: theme.spacing(0, 2),
  },
  logoContainer: {
    width: 60,
    height: 35,
    display: "flex",
    [theme.breakpoints.up("md")]: {
      width: 70,
      height: 40,
    },
  },
  listItem: {
    width: "auto",
    padding: theme.spacing(1.5, 3),
    margin: theme.spacing(0, 1),
  },
  listItemHover: {
    "&:hover": {
      backgroundColor: theme.palette.background.level2,
      borderRadius: theme.spacing(1),
    },
    // margin: theme.spacing(0, 3),
  },
  itemDivider: {
    borderColor: theme.palette.primary.main,
    borderWidth: 2.5,
  },
  listItemText: {
    color: theme.palette.text.primary,
    fontWeight: 600,
  },
  listItemTextActive: {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  iconButton: {
    marginLeft: theme.spacing(2),
    padding: theme.spacing(0.2, 1),
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: theme.spacing(1),
    "&:hover": {
      background: "transparent",
    },
  },
  listItemLogin: {
    marginRight: theme.spacing(3),
  },
  buttonMargin: {
    marginLeft: theme.spacing(3),
  },
  userIcon: {
    color: theme.palette.text.primary,
    width: 20,
    height: 20,
  },
  userIconActive: {
    color: theme.palette.primary.main,
    width: 20,
    height: 20,
  },
  iconMargin: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      bottom: 2,
    },
  },
  callButtonContainer: {
    position: "fixed",
    bottom: theme.spacing(4),
    left: theme.spacing(2),
  },
  callButton: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
}));

function ShowOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 150,
  });

  return (
    <Fade
      appear={true}
      direction="down"
      in={trigger}
      timeout={{ enter: 500, exit: 100 }}
    >
      {children}
    </Fade>
  );
}

ShowOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function TopBarOnScroll({ onSidebarOpen, pages, history }) {
  const classes = useStyles();
  const { isAuthenticated } = useSelector((state) => state.auth);
  let path = history.location.pathname;
  return (
    <React.Fragment>
      <CssBaseline />
      <ShowOnScroll>
        <AppBar className={classes.root}>
          <Toolbar disableGutters className={classes.toolbar}>
            <Typography
              variant="body1"
              color="textPrimary"
              className={classes.listItemText}
              component={NavLink}
              to="/"
            >
              Company Logo
            </Typography>
            <div className={classes.flexGrow} />

            <List className={classes.navigationContainer} disablePadding>
              <Hidden smDown>
                {pages.map((page, i) => {
                  let match = false;
                  if (page.href.slice(1) === "") {
                    match = path === page.href;
                  } else {
                    match = path.includes(page.href.slice(1));
                  }
                  return (
                    <li key={i}>
                      <ListItem
                        component={NavLink}
                        to={page.href}
                        classes={{
                          root: match
                            ? classes.listItem
                            : clsx(classes.listItem, classes.listItemHover),
                          divider: classes.itemDivider,
                        }}
                        disableGutters
                        className={classes.listItem}
                        // divider={match ? true : false}
                      >
                        <Typography
                          variant="body2"
                          className={
                            match
                              ? classes.listItemTextActive
                              : classes.listItemText
                          }
                        >
                          {page.title}
                        </Typography>
                      </ListItem>
                    </li>
                  );
                })}
              </Hidden>
              {!isAuthenticated && (
                <li>
                  <ListItem
                    classes={{
                      root:
                        path === "/login"
                          ? classes.listItem
                          : clsx(classes.listItem, classes.listItemHover),
                      divider: classes.itemDivider,
                    }}
                    component={NavLink}
                    to="/login"
                  >
                    <ListItemIcon classes={{ root: classes.iconMargin }}>
                      <User
                        classes={{
                          root:
                            path === "/login"
                              ? classes.userIconActive
                              : classes.userIcon,
                        }}
                      />
                    </ListItemIcon>
                    <Typography
                      variant="body2"
                      className={
                        path === "/login"
                          ? classes.listItemTextActive
                          : classes.listItemText
                      }
                    >
                      Login
                    </Typography>
                  </ListItem>
                </li>
              )}
            </List>
            {isAuthenticated && <Auth history={history} />}
            <Hidden smDown>
              <div className={classes.flexGrow} />
            </Hidden>

            <Hidden smDown>
              <Button
                variant="contained"
                color="primary"
                to="/book"
                component={CustomRouterLink}
                disableElevation
                size="small"
                classes={{
                  root: classes.buttonMargin,
                }}
              >
                Book Online
              </Button>
            </Hidden>
            <Hidden mdUp>
              <IconButton
                className={classes.iconButton}
                onClick={onSidebarOpen}
                aria-label="Menu"
              >
                <Menu
                  className={classes.listItemText}
                  style={{
                    transform: "rotate(180deg)",
                  }}
                />
              </IconButton>
            </Hidden>
          </Toolbar>
          <div role="presentation" className={classes.callButtonContainer}>
            <Fab color="primary" aria-label="call" component="a" href="#">
              <Phone />
            </Fab>
          </div>
        </AppBar>
      </ShowOnScroll>
    </React.Fragment>
  );
}

TopBarOnScroll.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
};

export default TopBarOnScroll;
