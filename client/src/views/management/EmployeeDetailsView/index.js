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
import axios from 'axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Page from 'src/components/Page';
import Header from './Header';
import General from './General';
import Subscription from './Subscription';
import Notifications from './Notifications';
import Security from './Security';
import LoadingScreen from 'src/components/LoadingScreen';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function AccountView({ match, history }) {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = useState(() => localStorage.getItem('tab'));
  const isMountedRef = useIsMountedRef();
  const [user, setUser] = useState(null);
  const userPath = match.params.id;
  const tabs = [
    { value: 'general', label: 'General' },
    { value: 'subscription', label: 'Subscription' },
    { value: 'notifications', label: 'Notifications' },
    { value: 'security', label: 'Security' }
  ];

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
    localStorage.setItem('tab', value)

  };


  const handleUpdate = (user, id) => {
    fetch(`/api/v1/users/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify({user: user}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        setUser(user)
      })
  }

  const handlePasswordChange = (user, id) => {
    fetch(`/api/v1/users/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify({user: user}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  const getUser = useCallback(() => {
    axios
      .get(`/api/v1/users/${userPath}`)
      .then((response) => {
        if (isMountedRef.current) {
          setUser(response.data.user);
        }
      });
  }, [userPath]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (!user) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Settings"
    >
      <Container maxWidth="lg">
        <Header user={user}/>
        <Box mt={3}>
          <Tabs
            onChange={handleTabsChange}
            scrollButtons="auto"
            value={currentTab}
            variant="scrollable"
            textColor="secondary"
            className={classes.tabs}
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
              />
            ))}
          </Tabs>
        </Box>
        <Divider />
        <Box mt={3}>
          {currentTab === 'general' && <General user={user} handleUpdate={handleUpdate}/>}
          {currentTab === 'subscription' && <Subscription />}
          {currentTab === 'notifications' && <Notifications />}
          {currentTab === 'security' && <Security user={user} handlePasswordChange={handlePasswordChange}/>}
        </Box>
      </Container>
    </Page>
  );
}

export default AccountView;
