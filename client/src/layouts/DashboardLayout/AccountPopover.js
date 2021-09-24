import { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSnackbar } from "notistack";
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Typography,
} from "@material-ui/core";
// import useAuth from '../../hooks/useAuth';
import CogIcon from "src/icons/Cog";
import UserIcon from "src/icons/User";
import { signOut } from "src/slices/auth";
import { useDispatch } from "src/store";
import { useHistory } from "react-router-dom";

const AccountPopover = () => {
  const anchorRef = useRef(null);
  // const { user, logout } = useAuth();
  // const navigate = useNavigate();
  const dispatch = useDispatch;
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignOut = () => {
    dispatch(signOut(history));
  };

  const handleLogout = async () => {
    try {
      handleClose();
      await handleSignOut();
      // navigate('/');
    } catch (err) {
      console.error(err);
      enqueueSnackbar("Unable to logout", {
        anchorOrigin: {
          horizontal: "right",
          vertical: "top",
        },
        variant: "error",
      });
    }
  };

  return (
    <>
      <Box
        component={ButtonBase}
        onClick={handleOpen}
        ref={anchorRef}
        style={{
          alignItems: "center",
          display: "flex",
        }}
      >
        <Avatar
          src={""}
          style={{
            height: 32,
            width: 32,
          }}
        />
      </Box>
      <Popover
        anchorEl={anchorRef.current}
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
        getContentAnchorEl={null}
        keepMounted
        onClose={handleClose}
        open={open}
        PaperProps={{
          style: { width: 240 },
        }}
      >
        <Box p={2}>
          <Typography color="textPrimary" variant="subtitle2">
            user name
          </Typography>
          <Typography color="textSecondary" variant="subtitle2">
            Devias IO
          </Typography>
        </Box>
        <Divider />
        <Box mt={2}>
          <MenuItem component={RouterLink} to="/dashboard/social/profile">
            <ListItemIcon>
              <UserIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography color="textPrimary" variant="subtitle2">
                  Profile
                </Typography>
              }
            />
          </MenuItem>
          <MenuItem component={RouterLink} to="/dashboard/account">
            <ListItemIcon>
              <CogIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography color="textPrimary" variant="subtitle2">
                  Settings
                </Typography>
              }
            />
          </MenuItem>
        </Box>
        <Box p={2}>
          <Button
            color="primary"
            fullWidth
            onClick={handleLogout}
            variant="outlined"
          >
            Logout
          </Button>
        </Box>
      </Popover>
    </>
  );
};

export default AccountPopover;
