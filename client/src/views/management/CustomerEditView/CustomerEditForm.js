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
  Grid,
  Switch,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import wait from 'src/utils/wait';

const useStyles = makeStyles(() => ({
  root: {}
}));

function CustomerEditForm({
  className,
  user,
  handleUpdate,
  history,
  ...rest
}) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Formik
      initialValues={{
        email: user.email || '',
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        phone: user.phone || '',
        add_phone: user.add_phone || '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        first_name: Yup.string().max(255).required('Name is required'),
        last_name: Yup.string().max(255).required('Name is required'),
        phone: Yup.string().max(10),
        add_phone: Yup.string().max(10),
      })}
      onSubmit={async (values, {
        resetForm,
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          // Make API request
          await handleUpdate(values, user.id);
          resetForm();
          setStatus({ success: true });
          setSubmitting(false);
          enqueueSnackbar('Customer updated', {
            variant: 'success'
          });
          history.push(`/app/customers/${user.id}`)
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
        return (
        <form
          className={clsx(classes.root, className)}
          onSubmit={handleSubmit}
          {...rest}
        >

          <Card>
            <CardContent>

              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.first_name && errors.first_name)}
                    fullWidth
                    helperText={touched.first_name && errors.first_name}
                    label="Full name"
                    name="first_name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.first_name}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.last_name && errors.last_name)}
                    fullWidth
                    helperText={touched.last_name && errors.last_name}
                    label="Full name"
                    name="last_name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.last_name}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.phone && errors.phone)}
                    fullWidth
                    helperText={touched.phone && errors.phone}
                    label="Primary Phone number"
                    name="phone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.add_phone && errors.add_phone)}
                    fullWidth
                    helperText={touched.add_phone && errors.add_phone}
                    label="Secondary Phone number"
                    name="add_phone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.add_phone}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label="Email address"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    value={values.email}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Box mt={5}>
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Update Customer
                </Button>
              </Box>
            </CardContent>
          </Card>
        </form>
      )
      }
      }
    </Formik>
  );
}

CustomerEditForm.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default CustomerEditForm;
