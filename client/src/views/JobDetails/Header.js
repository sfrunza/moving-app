import React, { useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
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
  Paper

} from '@material-ui/core';
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
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
          <Link to="/admin/jobs" style={{ color: '#4a4a4a' }}>
            <span style={{ position: 'relative', fontSize: '16px', marginRight: '3px' }}>&#171;</span>Jobs
          </Link>
          </Typography>
          <Typography
            component="h1"
            variant="h3"

          >
            Job ID #
            {" "}
            {job.job.id + 10000}
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
