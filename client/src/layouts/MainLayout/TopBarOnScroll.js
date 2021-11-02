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
    // backgroundColor: theme.palette.background.default,
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.divider}`,
    maxHeight: 56,
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255,255,255,0.80)",
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
    minHeight: 56,
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
    padding: theme.spacing(1, 1.5),
    margin: theme.spacing(0, 2),
  },
  listItemHover: {
    "&:hover": {
      backgroundColor: theme.palette.background.level2,
      borderRadius: theme.spacing(1),
      color: theme.palette.primary.main,
    },
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
    padding: theme.spacing(0),
    color: theme.palette.text.primary,
  },
  listItemLogin: {
    marginRight: theme.spacing(3),
  },
  buttonMargin: {
    marginLeft: theme.spacing(3),
    borderColor: theme.palette.text.primary,
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
    zIndex: 1,
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
    threshold: 100,
  });

  return (
    <Fade
      in={trigger}
      mountOnEnter
      unmountOnExit
      timeout={{ enter: 300, exit: 100 }}
    >
      {children}
    </Fade>
  );
}

function ShowPhoneOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 110,
  });

  return (
    <Fade
      in={trigger}
      mountOnEnter
      unmountOnExit
      timeout={{ enter: 300, exit: 100 }}
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
              Insight Moving
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
                  if (i === pages.length - 1) {
                    return (
                      <li key={i}>
                        <ListItem
                          component="a"
                          href={page.href}
                          classes={{
                            root: match
                              ? classes.listItem
                              : clsx(classes.listItem, classes.listItemHover),
                            divider: classes.itemDivider,
                          }}
                          disableGutters
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
                  } else {
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
                  }
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
                variant="outlined"
                color="default"
                to="/book"
                component={CustomRouterLink}
                disableElevation
                size="small"
                classes={{
                  root: classes.buttonMargin,
                }}
              >
                Get a Quote
              </Button>
            </Hidden>
            <Hidden mdUp>
              <IconButton
                className={classes.iconButton}
                onClick={onSidebarOpen}
                aria-label="Menu"
              >
                <Menu
                  style={{
                    transform: "rotate(180deg)",
                  }}
                />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </ShowOnScroll>
      <ShowPhoneOnScroll>
        <div role="presentation" className={classes.callButtonContainer}>
          <Fab color="primary" aria-label="call" component="a" href="#">
            <Phone />
          </Fab>
        </div>
      </ShowPhoneOnScroll>
    </React.Fragment>
  );
}

TopBarOnScroll.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
};

export default TopBarOnScroll;
