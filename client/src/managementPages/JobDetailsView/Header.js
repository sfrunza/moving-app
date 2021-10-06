import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Breadcrumbs,
  Button,
  Grid,
  Link,
  Typography,
  Box,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import ChevronRightIcon from "src/icons/ChevronRight";
import PencilAltIcon from "src/icons/PencilAlt";
import Trash from "src/icons/Trash";
import { deleteEvent } from "src/slices/calendar";
import { useDispatch } from "src/store";
import { history } from "../../App";

function PaperComponent(props) {
  return <Paper {...props} />;
}

function Header({ job, history }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // if (!job)
  //   return (
  //     <List>
  //       <ListItem>
  //         <Skeleton variant="text" width={250} />
  //       </ListItem>
  //       <ListItem>
  //         <Skeleton variant="text" width={200} />
  //       </ListItem>
  //     </List>
  //   );
  return (
    <Grid container justifyContent="space-between" spacing={3}>
      <Grid item>
        <Typography color="textPrimary" variant="h5">
          Request ID: {job.id}
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
            to="/dashboard/jobs"
            variant="subtitle2"
          >
            Jobs
          </Link>
          <Typography color="textSecondary" variant="subtitle2">
            {job.id}
          </Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item>
        <Box m={-1}>
          <Button
            color="primary"
            disableElevation
            // onClick={handleAddClick}
            startIcon={<PencilAltIcon fontSize="small" />}
            style={{ margin: 8 }}
            variant="contained"
          >
            Edit
          </Button>
          <Button
            color="secondary"
            disableElevation
            onClick={handleClickOpen}
            startIcon={<Trash fontSize="small" />}
            style={{ margin: 8 }}
            variant="contained"
          >
            Delete job
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle id="draggable-dialog-title">Delete</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete this job?
              </DialogContentText>
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
                  dispatch(deleteEvent(job.id));
                  history.push("/dashboard/jobs");
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
