import React, { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  ButtonBase,
  Menu,
  MenuItem,
  makeStyles,
  Divider,
} from "@material-ui/core";
import {
  User as UserIcon,
  Settings as SettingsIcon,
  LogOut as LogOutIcon,
} from "react-feather";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 30,
    width: 30,
    padding: 1,
    border: "2px solid rgba(0,0,0,.54)",
    color: "rgba(0,0,0,.54)",
    borderRadius: "50%",
  },

  popover: {
    width: 200,
    marginTop: "5px",
  },
  icons: {
    height: 20,
    width: 20,
    marginRight: theme.spacing(1),
  },
}));

function Account() {
  const classes = useStyles();
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {};

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        ref={ref}
      >
        <UserIcon className={classes.avatar} />
      </Box>
      <Menu
        onClose={handleClose}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem component={RouterLink} to="/account" onClick={handleClose}>
          <UserIcon className={classes.icons} />
          Account
        </MenuItem>
        <MenuItem
          component={RouterLink}
          to="/account/edit"
          onClick={handleClose}
        >
          <SettingsIcon className={classes.icons} />
          Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <LogOutIcon className={classes.icons} />
          Log out
        </MenuItem>
      </Menu>
    </>
  );
}

export default Account;
