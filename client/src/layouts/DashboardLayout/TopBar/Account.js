import React, {
  useRef,
  useState
} from 'react';
import { useHistory } from 'react-router';
import axios from 'axios'
import {
  Box,
  ButtonBase,
  Menu,
  MenuItem,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1)
  },
  popover: {
    width: 200
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
    axios.delete('/api/v1/users/sign_out', {withCredentials: true})
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
        <Typography
          variant="h6"
          color="inherit"
        >
          {user.email}
        </Typography>
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
      >

        <MenuItem onClick={handleClick}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default Account;
