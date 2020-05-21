import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
  Button,
  colors,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Paper,
  Breadcrumbs,
  Link
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {},
  toolbar: {
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  },
  deleteButton: {
    color: theme.palette.common.white,
    backgroundColor: colors.red[600],
    '&:hover': {
      backgroundColor: colors.red[900]
    }
  },
  openDeleteButton: {
    color: colors.red[600],
    border: `1px solid ${colors.red[500]}`,
    '&:hover': {
      backgroundColor: colors.red[50],
    }
  },
  deleteIcon: {
    marginRight: theme.spacing(1)
  }
}));
function PaperComponent(props) {
  return (
      <Paper {...props} />
  );
}

function Header({ handleDelete, job, className, ...rest }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        alignItems="flex-end"
        container
        justify="space-between"
        spacing={3}
      >
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            variant="body1"
            color="inherit"
            to="/app"
            component={RouterLink}
          >
            Dashboard
          </Link>
          <Link
            variant="body1"
            color="inherit"
            to="/app/management/jobs"
            component={RouterLink}
          >
            Jobs
          </Link>
          <Typography
            variant="body1"
            color="textPrimary"
          >
            {job.job.id}
          </Typography>
        </Breadcrumbs>
        <Typography
          variant="h3"
          color="textPrimary"
        >
          Job ID # {job.job.id}
        </Typography>
      </Grid>
        <Grid item>
          <Button className={classes.openDeleteButton} onClick={handleClickOpen}>
          Delete Job
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle id="draggable-dialog-title">
              Delete
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Do you want to permanently delete this job?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button
                className={classes.deleteButton}
                variant="contained"
                onClick={() => {handleDelete(job)}}
              >
                <DeleteIcon className={classes.deleteIcon} />
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  job: PropTypes.object.isRequired
};

export default Header;
