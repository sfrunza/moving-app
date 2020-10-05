import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
  colors,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '4rem',
  },
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

function Header({ handleDelete, job, className, ...rest }) {
  const classes = useStyles();

  if(job === undefined){
    return null
  }

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
          variant="h3"
          color="textPrimary"
        >
          Request ID: {job.id}
        </Typography>
      </Grid>
      </Grid>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
