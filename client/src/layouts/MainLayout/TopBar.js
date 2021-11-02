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
} from "@material-ui/core";
import CustomRouterLink from "src/components/CustomRouterLink";
import Auth from "src/components/Auth";
import { NavLink } from "react-router-dom";
import Menu from "src/icons/Menu";
import { useSelector } from "src/store";
import User from "src/icons/User";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    justifyContent: "center",
    borderBottom: "1px solid rgb(236 239 241 / 9%)",
    // maxHeight: 56,
    top: 64,
  },
  rootLogin: {
    overflow: "hidden",
    top: 64,
    justifyContent: "center",
    borderBottom: "1px solid rgb(236 239 241 / 9%)",
    backgroundColor: theme.palette.background.footer,
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
    padding: theme.spacing(1, 1.5),
    margin: theme.spacing(0, 2),
    // [theme.breakpoints.down("md")]: {
    //   padding: theme.spacing(1, 2),
    // },
  },
  listItemHover: {
    "&:hover": {
      backgroundColor: "#ffffff2e",
      borderRadius: theme.spacing(1),
    },
    // margin: theme.spacing(0, 3),
  },
  itemDivider: {
    borderColor: theme.palette.primary.main,
    borderWidth: 2.5,
  },
  listItemText: {
    color: theme.palette.primary.contrastText,
    fontWeight: 600,
  },
  listItemTextActive: {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  iconButton: {
    padding: theme.spacing(0),
  },
  listItemLogin: {
    marginRight: theme.spacing(3),
  },
  buttonMargin: {
    marginLeft: theme.spacing(3),
    borderColor: theme.palette.primary.contrastText,
  },
  userIcon: {
    color: theme.palette.primary.contrastText,
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
}));

function TopBar({ onSidebarOpen, pages, history }) {
  const classes = useStyles();
  const { isAuthenticated } = useSelector((state) => state.auth);
  let path = history.location.pathname;
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        className={
          path === "/login" || path === "/book"
            ? classes.rootLogin
            : classes.root
        }
        position="relative"
        color={"transparent"}
        elevation={0}
      >
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
              // color="primary"
              to="/book"
              component={CustomRouterLink}
              disableElevation
              className={classes.listItemText}
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
                className={classes.listItemText}
                style={{
                  // color: theme.palette.text.secondary,
                  transform: "rotate(180deg)",
                }}
              />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
};

export default TopBar;
