import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormHelperText,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';
import wait from 'src/utils/wait';

const useStyles = makeStyles(() => ({
  root: {}
}));

function Security({ className, user, handlePasswordChange, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Formik
      initialValues={{
        password: '',
        password_confirmation: '',
        current_password: '',
      }}
      validationSchema={Yup.object().shape({
        current_password: Yup.string()
          .min(6, 'Must be at least 6 characters')
          .max(255)
          .required('Required'),
        password: Yup.string()
          .min(6, 'Must be at least 6 characters')
          .max(255)
          .required('Required'),
        password_confirmation: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Required')
      })}
      onSubmit={async (values, {
        resetForm,
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          // Make API request
          await wait(500);
          handlePasswordChange(values, user.id)
          resetForm();
          setStatus({ success: true });
          setSubmitting(false);
          enqueueSnackbar('Password updated', {
            variant: 'success'
          });
        } catch (error) {
          setStatus({ success: false });
          setErrors({ submit: error.message });
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
        values
      }) => {
        console.log(values);
      return (
        <form onSubmit={handleSubmit}>
          <Card
            className={clsx(classes.root, className)}
            {...rest}
          >
            <CardHeader title="Change Password" />
            <Divider />
            <CardContent>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  md={4}
                  sm={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.current_password && errors.current_password)}
                    fullWidth
                    helperText={touched.current_password && errors.current_password}
                    label="Current Password"
                    name="current_password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.current_password}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={4}
                  sm={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    label="New Password"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={4}
                  sm={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.password_confirmation && errors.password_confirmation)}
                    fullWidth
                    helperText={touched.password_confirmation && errors.password_confirmation}
                    label="Password Confirmation"
                    name="password_confirmation"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.password_confirmation}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              {errors.submit && (
                <Box mt={3}>
                  <FormHelperText error>
                    {errors.submit}
                  </FormHelperText>
                </Box>
              )}
            </CardContent>
            <Divider />
            <Box
              p={2}
              display="flex"
              justifyContent="flex-end"
            >
              <Button
                color="secondary"
                disabled={isSubmitting}
                type="submit"
                variant="contained"
              >
                Change Password
              </Button>
            </Box>
          </Card>
        </form>
      )}
    }
    </Formik>
  );
}

Security.propTypes = {
  className: PropTypes.string
};

export default Security;
