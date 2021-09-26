import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  Button,
} from "@material-ui/core";
import SectionHeader from "src/components/SectionHeader";
import RoomIcon from "@material-ui/icons/Room";
import { Link as RouterLink } from "react-router-dom";
import Mail from "src/icons/Mail";
import Phone from "src/icons/Phone";

const useStyles = makeStyles((theme) => ({
  root: {},
  list: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  listItemText: {
    display: "flex",
    flexDirection: "column",
    flex: "0 0 auto",
  },
  listItem: {
    justifyContent: "flex-start",
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
    },
  },
  icon: {
    background: "transparent",
    borderRadius: 0,
  },
  listItemAvatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(0, 2),
  },
}));

const Contact = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Why choose us"
        subtitle="We are a small company of professional movers. Unlike movers from big companies, we will treat your belongings as ours. We will walk you through our smooth and simple process."
        // subtitleProps={{
        //   variant: "body1",
        //   color: "textSecondary",
        // }}
        border
        ctaGroup={[
          <Button
            component={RouterLink}
            to="/book"
            variant="contained"
            color="primary"
            disableElevation
          >
            Request Your Move Online
          </Button>,
          // <Button
          //   component={RouterLink}
          //   to="/services"
          //   variant="outlined"
          //   color="primary"
          //   disableElevation
          // >
          //   View Services
          // </Button>,
        ]}
        fadeUp
      />
      <List disablePadding className={classes.list}>
        <ListItem disableGutters className={classes.listItem}>
          <Avatar className={classes.listItemAvatar}>
            <Phone className={classes.icon} />
          </Avatar>
          <ListItemText
            className={classes.listItemText}
            primary="Phone"
            secondary="1 (617) 206-0968"
            primaryTypographyProps={{
              className: classes.title,
              variant: "subtitle1",
              color: "textSecondary",
            }}
            secondaryTypographyProps={{
              variant: "subtitle1",
              color: "textPrimary",
              component: "span",
            }}
          />
        </ListItem>
        <ListItem disableGutters className={classes.listItem}>
          <Avatar className={classes.listItemAvatar}>
            <Mail className={classes.icon} />
          </Avatar>
          <ListItemText
            className={classes.listItemText}
            primary="Email"
            secondary="info@insightmoving.com"
            primaryTypographyProps={{
              className: classes.title,
              variant: "subtitle1",
              color: "textSecondary",
            }}
            secondaryTypographyProps={{
              variant: "subtitle1",
              color: "textPrimary",
              component: "span",
            }}
          />
        </ListItem>
        <ListItem disableGutters className={classes.listItem}>
          <Avatar className={classes.listItemAvatar}>
            <RoomIcon className={classes.icon} />
          </Avatar>

          <ListItemText
            className={classes.listItemText}
            primary="Head Office"
            secondary="100 Washington st. Boston, MA "
            primaryTypographyProps={{
              className: classes.title,
              variant: "subtitle1",
              color: "textSecondary",
            }}
            secondaryTypographyProps={{
              variant: "subtitle1",
              color: "textPrimary",
              component: "span",
            }}
          />
        </ListItem>
      </List>
    </div>
  );
};

Contact.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Contact;
