import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Typography,
  Breadcrumbs,
  Link,
  Grid,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Paper,
} from "@material-ui/core";
import ChevronRightIcon from "src/icons/ChevronRight";
import Trash from "src/icons/Trash";
import { useDispatch, useSelector } from "src/store";
import { deleteUser } from "src/slices/employees";

function PaperComponent(props) {
  return <Paper {...props} />;
}

function Header({ user, history }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { isDeleting, dError } = useSelector((state) => state.employees);
  const currentUser = useSelector((state) => state.auth.user);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container justifyContent="space-between" spacing={3}>
      <Grid item>
        <Typography color="textPrimary" variant="h5">
          Settings
        </Typography>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<ChevronRightIcon fontSize="small" />}
          style={{ marginTop: 8 }}
        >
          <Link
            color="textPrimary"
            component={RouterLink}
            to="/dashboard"
            variant="subtitle2"
          >
            Dashboard
          </Link>
          <Link
            color="textPrimary"
            component={RouterLink}
            to="/dashboard/employees"
            variant="subtitle2"
          >
            Employees
          </Link>
          <Typography color="textSecondary" variant="subtitle2">
            {user.first_name + " " + user.last_name}
          </Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item>
        <Box m={-1}>
          {currentUser.email !== user.email && (
            <Button
              color="secondary"
              disableElevation
              onClick={handleClickOpen}
              startIcon={<Trash fontSize="small" />}
              style={{ margin: 8 }}
              variant="contained"
            >
              Delete Employee
            </Button>
          )}
          <Dialog
            open={open}
            onClose={handleClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle id="draggable-dialog-title">
              Delete Employee
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete this employee?
              </DialogContentText>
              {dError && <DialogContentText>{dError}</DialogContentText>}
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                onClick={handleClose}
                size="small"
                variant="outlined"
              >
                No
              </Button>
              <Button
                color="secondary"
                disableElevation
                onClick={() => {
                  dispatch(deleteUser(user.id));
                  if (!isDeleting || dError === "") {
                    history.push("/dashboard/employees");
                  }
                }}
                startIcon={<Trash fontSize="small" />}
                style={{ margin: 8 }}
                variant="contained"
                size="small"
              >
                Yes!
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Header;
