import React, { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  makeStyles,
  Divider,
  ListItemIcon,
  Button,
  Typography,
  ListItemText,
  Box,
  useTheme,
  Avatar,
} from "@material-ui/core";
import UserIcon from "src/icons/User";
import SettingsIcon from "src/icons/Settings";
import CustomRouterLink from "src/components/CustomRouterLink";
import { useSelector } from "src/store";

const useStyle = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      // marginRight: theme.spacing(2),
    },
  },
  avatar: {
    height: 30,
    width: 30,
    border: "none",
    boxShadow: theme.shadows[1],
    padding: 1,
    "& img": {
      borderRadius: "50%",
    },
  },
  popover: {
    minWidth: 250,
  },
  button: {
    margin: theme.spacing(1, 2),
  },
}));

const Account = ({ handleSignOut }) => {
  const classes = useStyle();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const { user } = useSelector((state) => state.auth);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <IconButton
        aria-controls="user-menu"
        aria-haspopup="true"
        disableRipple={true}
        onClick={handleClick}
      >
        <Avatar
          alt={user.last_name}
          classes={{
            root: classes.avatar,
          }}
        />
      </IconButton>
      <Menu
        id="user-menu"
        PaperProps={{ className: classes.popover }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box p={2}>
          <Typography color="textPrimary" variant="subtitle2">
            {user.email}
          </Typography>
        </Box>
        <Divider />
        <MenuItem
          component={CustomRouterLink}
          to="/dashboard"
          onClick={handleClose}
        >
          <ListItemIcon
            style={{
              color: theme.palette.text.secondary,
            }}
          >
            <UserIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography color="textPrimary" variant="subtitle2">
                Dashboard
              </Typography>
            }
          />
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={CustomRouterLink}
          to={`/dashboard/users/${user.id}`}
        >
          <ListItemIcon
            style={{
              color: theme.palette.text.secondary,
            }}
          >
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography color="textPrimary" variant="subtitle2">
                Settings
              </Typography>
            }
          />
        </MenuItem>
        <div className={classes.button}>
          <Button
            onClick={handleSignOut}
            color="primary"
            variant="outlined"
            fullWidth
          >
            Log out
          </Button>
        </div>
      </Menu>
    </div>
  );
};

export default Account;
