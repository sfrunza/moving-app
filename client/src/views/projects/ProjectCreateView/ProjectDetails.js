/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Chip,
  FormHelperText,
  IconButton,
  SvgIcon,
  TextField,
  Typography,
  makeStyles,
  Paper
} from '@material-ui/core';
import { Plus as PlusIcon } from 'react-feather';
import QuillEditor from 'src/components/QuillEditor';

const useStyles = makeStyles((theme) => ({
  root: {},
  addTab: {
    marginLeft: theme.spacing(2)
  },
  tag: {
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  },
  datePicker: {
    '& + &': {
      marginLeft: theme.spacing(2)
    }
  },
  editor: {
    '& .ql-editor': {
      height: 200
    }
  },
  flexConatiner: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  flexItem: {
    flex: '0 0 47%'
  }
}));

function ProjectDetails({
  className,
  onBack,
  onComplete,
  id,
  ...rest
}) {
  const classes = useStyles();
  const [tag, setTag] = useState('');
  const phoneRegExp = /^(\d{3})(\d{3})(\d{4})$/

  return (
    <Formik
      initialValues={{
        job_id: id,
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        additional_info: ''
      }}
      validationSchema={Yup.object().shape({
        first_name: Yup.string().min(3, 'Must be at least 3 characters').max(255).required('Required'),
        last_name: Yup.string().min(3, 'Must be at least 3 characters').max(255).required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        phone: Yup.string().matches(phoneRegExp, 'Invalid phone number').required('Required')
      })}
      onSubmit={async (values, {
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          // Do API call to store step data in server session
          // It is important to have it on server to be able to reuse it if user
          // decides to continue later.
          fetch('https://moving-co.herokuapp.com/api/v1/customers.json',{
              method: "POST",
              body: JSON.stringify(values),
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            })

          setStatus({ success: true });
          setSubmitting(false);

          if (onComplete) {
            onComplete();
          }
        } catch (err) {
          setErrors({ submit: err.message });
          setStatus({ success: false });
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
        setFieldValue,
        setFieldTouched,
        touched,
        values
      }) => (

        <form
          onSubmit={handleSubmit}
          className={clsx(classes.root, className)}
          {...rest}
        >
          <Typography
            variant="h3"
            color="textPrimary"
          >
            Contact information.
          </Typography>
          <Box mt={4} className={classes.flexConatiner}>
            <Box className={classes.flexItem}>
              <TextField
                error={Boolean(touched.first_name && errors.first_name)}
                fullWidth
                helperText={touched.first_name && errors.first_name}
                label="First Name"
                name="first_name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.first_name}
                variant="outlined"
              />
            </Box>
            <Box className={classes.flexItem}>
              <TextField
                error={Boolean(touched.last_name && errors.last_name)}
                fullWidth
                helperText={touched.last_name && errors.last_name}
                label="Last Name"
                name="last_name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.last_name}
                variant="outlined"
              />
            </Box>
          </Box>
          <Box mt={4} className={classes.flexConatiner}>
            <Box className={classes.flexItem}>
              <TextField
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                label="Email"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                variant="outlined"
              />
            </Box>
            <Box className={classes.flexItem}>
              <TextField
                error={Boolean(touched.phone && errors.phone)}
                fullWidth
                helperText={touched.phone && errors.phone}
                label="Phone"
                name="phone"
                type="number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                variant="outlined"
              />
            </Box>
          </Box>
          <Box mt={4}>
            <TextField
              id="additional_info"
              label="Additional Comments/Requests"
              variant="outlined"
              name='additional_info'
              placeholder="Please include information on heavy, oversized or fragile items, narrow stairways or halls, long walk ways, extra stops, or anything else that may affect the moving time."
              onChange={handleChange}
              value={values.additional_info}
              style={{width: '100%'}}
              multiline
              rows={4}
            />
          </Box>

          <Box
            mt={6}
            display="flex"
          >
            {onBack && (
              <Button
                onClick={onBack}
                size="large"
              >
                Previous
              </Button>
            )}
            <Box flexGrow={1} />
            <Button
              color="secondary"
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              size="large"
            >
              Submit
            </Button>
          </Box>
        </form>
      )}
    </Formik>

  );
}

ProjectDetails.propTypes = {
  className: PropTypes.string,
  onComplete: PropTypes.func,
  onBack: PropTypes.func
};

export default ProjectDetails;
