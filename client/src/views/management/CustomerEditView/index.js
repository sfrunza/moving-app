import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import axios from 'axios';
import Page from 'src/components/Page';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import CustomerEditForm from './CustomerEditForm';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function CustomerEditView({ match, history }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [user, setUser] = useState();
  const path = match.params.id;

  useEffect(() => {
    let mounted = true;


    const fetchUser = () => {
      axios.get(`/api/v1/users/${path}`).then((response) => {
        if (mounted) {
          setUser(response.data.user);
        }
      });
    };

    fetchUser();

    return () => {
      mounted = false;
    };
  }, [path]);

  const handleUpdate = (user, id) => {
    fetch(`/api/v1/users/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify({user: user}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  if (!user) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Customer Edit"
    >
      <Container maxWidth="lg">
        <Header user={user}/>
        <Box mt={3}>
          <CustomerEditForm user={user} handleUpdate={handleUpdate} history={history}/>
        </Box>
      </Container>
    </Page>
  );
}

export default CustomerEditView;
