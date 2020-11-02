import React, {
  useCallback,
  useState,
  useEffect,
  Suspense
} from 'react';
import {
  Box,
  Container,
  Divider,
  Tab,
  Tabs,
  makeStyles
} from '@material-ui/core';

import Page from 'src/components/Page';

import PasswordChange from './PasswordChange';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    height: '100%',
  }
}));

function Security({ user, handlePasswordChange }) {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Change Password &#8226; InsightMoving"
    >
      <PasswordChange user={user} handlePasswordChange={handlePasswordChange}/>
    </Page>
  );
}

export default Security;
