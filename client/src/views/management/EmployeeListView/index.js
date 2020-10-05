import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import axios from 'axios';
import Page from 'src/components/Page';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Header from './Header';
import Results from './Results';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: 100
  }
}));

function EmployeeListView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [users, setUsers] = useState(null);

  const getUsers = useCallback(() => {
    axios
      .get('/api/v1/users.json')
      .then((response) => {
        if (isMountedRef.current) {
          let obj = response.data.users
          Object.keys(obj).forEach(key => {
            if (obj[key].customer) delete obj[key];
          });
          setUsers(obj);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (!users) {
    return null;
  }
  return (
    <Page
      className={classes.root}
      title="Users List"
    >
      <Container maxWidth={false}>
        <Header />
        {users && (
          <Box mt={5}>
            <Results users={users} />
          </Box>
        )}
      </Container>
    </Page>
  );
}

export default EmployeeListView;
