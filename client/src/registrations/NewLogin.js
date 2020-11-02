import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField } from '@material-ui/core';
import validate from 'validate.js';
import { LearnMoreLink } from 'src/components/atoms';
import axios from 'axios'
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  alert: {
    marginBottom: '1em',
  }
}));

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 300,
    },
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 6,
    },
  },
};

const NewLogin = ({ history, handleLogin, loginStatus, ...rest }) => {

  const classes = useStyles();
  const [currentUser, setCurrentUser] = React.useState()
  const [apiErrors, setApiErrors] = React.useState()
  const isMountedRef = useIsMountedRef();
  const redirect = (path) => {
    history.push(path)
  }
  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  React.useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();
    setApiErrors('');
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const user = {
          email: formState.values.email,
          password: formState.values.password
        }

    if (formState.isValid) {

      axios.post('/users/sign_in', {user}, {withCredentials: true})
      .then(response => {
        if (response.data.status === undefined) {
          handleLogin(response.data.current_user)
          if (response.data.current_user.admin === true) {
            redirect('/app')
          } else if (response.data.current_user.customer === true) {
            let name = response.data.current_user.first_name+"_"+response.data.current_user.last_name

            getJob(response.data.current_user.id)
          }
          else redirect('/calendar')
        } else {
          setApiErrors( response.data.errors );
        }
      })
      .catch((error) => {
        setApiErrors( error.response.data.error );
      })
    }
    setFormState(formState => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }));
  };

  const getJob = (userId) => {
    axios
      .get(`/api/v1/users/${userId}`)
      .then((response) => {
        let currentJob = response.data.jobs[0].id
        redirect(`/account/jobs/${currentJob}`)
      });
  }

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;
  return (
    <div className={classes.root}>
      {
        !apiErrors ? null
         :
        <Alert severity="error" className={classes.alert}>{apiErrors}</Alert>
      }
      <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              placeholder="E-mail"
              label="E-mail *"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              helperText={hasError('email') ? formState.errors.email[0] : null}
              error={hasError('email')}
              onChange={handleChange}
              type="email"
              value={formState.values.email || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Password"
              label="Password *"
              variant="outlined"
              size="medium"
              name="password"
              fullWidth
              helperText={
                hasError('password') ? formState.errors.password[0] : null
              }
              error={hasError('password')}
              onChange={handleChange}
              type="password"
              value={formState.values.password || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <i>
              <Typography variant="subtitle2">
                Fields that are marked with * sign are required.
              </Typography>
            </i>
          </Grid>
          <Grid item xs={12}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="secondary"
              fullWidth
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

NewLogin.propTypes = {
  history: PropTypes.object,
};

export default withRouter(NewLogin);
