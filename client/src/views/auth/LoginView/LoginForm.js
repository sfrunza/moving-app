import React from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import axios from 'axios'
import {
  Box,
  Button,
  TextField,
  FormHelperText,
  makeStyles
} from '@material-ui/core';
import { login } from 'src/actions/accountActions';

const useStyles = makeStyles(() => ({
  root: {}
}));

function LoginForm({ className, handleLogin, history, loggedInStatus, onSubmitSuccess, ...rest }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const redirect = (path) => {
      history.push(path)
    }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        errors: ''
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: Yup.string().max(255).required('Password is required')
      })}
      onSubmit={async (values, {
        setErrors,
        setStatus,
        setSubmitting,
        actions
      }) => {
        try {
          const user = {
                email: values.email,
                password: values.password
              }

          axios.post('/users/sign_in', {user}, {withCredentials: true})
          .then(response => {
            debugger
            if (response.data) {
              console.log(response.data.status);
              handleLogin(response.data)
              if (response.data.admin === true) {
                redirect('/app')
              } else redirect('/calendar')
            } else {
              setErrors(response.data.errors)
            }
          })
          // .catch(error => console.log('api errors:', error))
        } catch (error) {
          const message = (error.response && error.response.data.message) || 'Something went wrong';

          setStatus({ success: false });
          setErrors({ submit: message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
        status
      }) => (
        <form
          noValidate
          className={clsx(classes.root, className)}
          onSubmit={handleSubmit}
          {...rest}
        >
          <TextField
            error={Boolean(touched.email && errors.email)}
            fullWidth
            autoFocus
            helperText={touched.email && errors.email}
            label="Email Address"
            margin="normal"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            value={values.email}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            label="Password"
            margin="normal"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <Box mt={2}>
            <Button
              color="secondary"
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Log In man
            </Button>
            {status && status.email ? (
            <div>API Error: {status.email}</div>
          ) : (
            errors.email && <div>Validation Error: {errors.email}</div>
          )}

          {status && status.pswrd ? (
            <div>API Error: {status.pswrd}</div>
          ) : (
            errors.pswrd && <div>Validation Error: {errors.pswrd}</div>
          )}
          </Box>
        </form>
      )}
    </Formik>
  );
}

LoginForm.propTypes = {
  className: PropTypes.string,
  onSubmitSuccess: PropTypes.func
};

LoginForm.defaultProps = {
  onSubmitSuccess: () => {}
};

export default LoginForm;
