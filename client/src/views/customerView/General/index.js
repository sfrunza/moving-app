import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Grid, makeStyles } from '@material-ui/core';
import ProfileDetails from './ProfileDetails';
import GeneralSettings from './GeneralSettings';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    height: '100%',
  }
}));

function General({ className, user, handleUserUpdate, ...rest }) {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Edit Profile &#8226; InsightMoving"
    >
      <Grid
        container
        spacing={3}
        {...rest}
      >
        <ProfileDetails user={user} />
        <GeneralSettings user={user} handleUpdate={handleUserUpdate}/>
      </Grid>
    </Page>
  );
}

General.propTypes = {
  className: PropTypes.string
};

export default General;
