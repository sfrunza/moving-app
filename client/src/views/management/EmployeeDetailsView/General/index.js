import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Grid, makeStyles } from '@material-ui/core';
import ProfileDetails from './ProfileDetails';
import GeneralSettings from './GeneralSettings';

const useStyles = makeStyles(() => ({
  root: {}
}));

function General({ className, user, handleUpdate, ...rest }) {
  const classes = useStyles();

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      spacing={3}
      {...rest}
    >
      <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={12}
      >
        <ProfileDetails user={user} />
      </Grid>
      <Grid
        item
        lg={8}
        md={6}
        xl={9}
        xs={12}
      >
        <GeneralSettings user={user} handleUpdate={handleUpdate}/>
      </Grid>
    </Grid>
  );
}

General.propTypes = {
  className: PropTypes.string
};

export default General;
