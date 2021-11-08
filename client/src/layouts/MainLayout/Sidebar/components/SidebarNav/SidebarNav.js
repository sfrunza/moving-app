import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Divider,
  Button,
  useTheme,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CustomRouterLink from "src/components/CustomRouterLink";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  navLink: {
    fontWeight: 300,
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  listItemIcon: {
    minWidth: "auto",
  },
  closeIcon: {
    justifyContent: "flex-end",
    cursor: "pointer",
  },
  listItem: {
    flexDirection: "column",
    alignItems: "center",
    width: "auto",
    padding: theme.spacing(2),
    margin: theme.spacing(1, 0),
  },
  listItemHover: {
    "&:hover": {
      backgroundColor: theme.palette.background.level2,
      borderRadius: theme.spacing(1),
    },
  },
  menuGroupTitle: {
    fontWeight: 500,
    textDecoration: "none",
    fontSize: 16,
  },
  divider: {
    width: "100%",
  },
  buttons: {
    padding: 0,
    textAlign: "right",
  },
}));

const SidebarNav = ({ pages, onClose, className, history, ...rest }) => {
  const classes = useStyles();
  let path = history.location.pathname;
  const theme = useTheme();

  const MenuGroup = (props) => {
    return (
      <List disablePadding style={{ width: "100%" }}>
        {props.pages.map((page, i) => {
          let match = false;
          if (page.href.slice(1) === "") {
            match = path === page.href;
          } else {
            match = path.includes(page.href.slice(1));
          }
          // if (i === props.pages.length - 1) return null;
          return (
            <ListItem
              disableGutters
              onClick={onClose}
              key={i}
              component={CustomRouterLink}
              to={page.href}
              classes={{
                root: match
                  ? classes.listItem
                  : clsx(classes.listItem, classes.listItemHover),
              }}
            >
              <Typography
                variant="body2"
                className={classes.menuGroupTitle}
                color={match ? "primary" : "textPrimary"}
              >
                {page.title}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    );
  };

  const LandingPages = () => {
    return <MenuGroup pages={pages} />;
  };

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={onClose}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon
            fontSize="small"
            style={{
              color: theme.palette.text.primary,
            }}
          />
        </ListItemIcon>
      </ListItem>
      <ListItem className={classes.listItem}>
        <LandingPages />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Divider className={classes.divider} />
      </ListItem>
      <ListItem className={clsx(classes.listItem, classes.buttons)}>
        <Button
          variant="contained"
          color="primary"
          component={CustomRouterLink}
          to="/book"
          onClick={onClose}
          disableElevation
        >
          Book Online
        </Button>
      </ListItem>
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default SidebarNav;
