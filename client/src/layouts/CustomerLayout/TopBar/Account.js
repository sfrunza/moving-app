import React, {
  useRef,
  useState
} from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  ButtonBase,
  Menu,
  MenuItem,
  Typography,
  makeStyles,
  Avatar,
  Divider,
} from '@material-ui/core';
import {
  User as UserIcon,
  Settings as SettingsIcon
} from 'react-feather';

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1),
    border: '1px solid black',
    padding: 1,
  },
  popover: {
    width: 200,
    marginTop: '5px',
  },
  icons: {
    height: 20,
    width: 20,
    marginRight: theme.spacing(1)
  }
}));

function Account({ user, handleLogout }) {
  const classes = useStyles();
  const history = useHistory();
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    axios.delete('/users/sign_out', {withCredentials: true})
    .then(response => {
      handleLogout()
      history.push('/')
    })
    .catch(error => console.log(error))

    }


  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        ref={ref}
      >
        <Avatar
          alt={user.last_name}
          src="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
          className={classes.avatar}
        />
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
        <MenuItem
          component={RouterLink}
          to='/account'
          onClick={handleClose}
        >
          <UserIcon className={classes.icons}/>
          Profile
        </MenuItem>
        <MenuItem
          component={RouterLink}
          to='/account/edit'
          onClick={handleClose}
        >
          <SettingsIcon className={classes.icons}/>
          Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClick}>
          Log Out
        </MenuItem>
      </Menu>
    </>
  );
}

export default Account;
