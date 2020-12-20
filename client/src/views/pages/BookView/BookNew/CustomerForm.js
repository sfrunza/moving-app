import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik, getIn } from 'formik';
import BrushRoundedIcon from '@material-ui/icons/BrushRounded';
import {
  Box,
  Button,
  TextField,
  Typography,
  makeStyles,
} from '@material-ui/core';

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
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    },

  },
  flexItem: {
    flex: '0 0 47%',
  },
  flexItemSecond: {
    flex: '0 0 47%',
    [theme.breakpoints.down('xs')]: {
      marginTop: '32px'
    },
  },
  clearBrush: {
    width: 16,
    height: 16,
  }
}));

function CustomerForm({
  className,
  onBack,
  onNext,
  setFormState,
  formState,
  ...rest
}) {
  const classes = useStyles();
  const phoneRegExp = /^(\d{3})(\d{3})(\d{4})$/

  const handlePhoneChange = (event) => {
    let value = event.target.value;
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        user: {
            ...formState.values.user,
          phone: value,
          password: value,
          password_confirmation: value,
        }
      }
    }))
  };

  return (
    <Formik
      initialValues={{
        user: !formState.values.user ? {
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          customer: true,
        } : formState.values.user,
        job: !formState.values.job.additional_info ? {
          additional_info: '',
        } : !formState.values.job.additional_info
      }}
      validationSchema={Yup.object().shape({
        user: Yup.object().shape({
          first_name: Yup.string().min(3, 'Must be at least 3 characters').max(255).required('Required'),
          last_name: Yup.string().min(3, 'Must be at least 3 characters').max(255).required('Required'),
          email: Yup.string().email('Invalid email').required('Required'),
          phone: Yup.string().matches(phoneRegExp, 'Invalid phone number').required('Required')
        }),

      })}
      onSubmit={async (values, {
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {

          setFormState({
            ...formState,
            values: {
              ...formState.values,
              user: {
                ...values.user,
                password: values.user.phone,
                password_confirmation: values.user.phone,
                customer: true,
              },
              job: {
                ...formState.values.job,
                additional_info: values.job.additional_info
              }
            }
          })

          window.scrollTo(0, 0);
          onNext();

          setStatus({ success: true });
          setSubmitting(false);

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
        values,
        resetForm
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
            Contact Information.
          </Typography>
          <Box mt={4} className={classes.flexConatiner}>
            <Box className={classes.flexItem}>
              <TextField
                error={getIn(errors, 'user.first_name') && getIn(touched, 'user.first_name')}
                fullWidth
                label="First Name*"
                name="user.first_name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.user.first_name}
                variant="outlined"
              />
            </Box>
            <Box className={classes.flexItemSecond}>
              <TextField
                error={getIn(errors, 'user.last_name') && getIn(touched, 'user.last_name')}
                fullWidth
                label="Last Name*"
                name="user.last_name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.user.last_name}
                variant="outlined"
              />
            </Box>
          </Box>
          <Box mt={4} className={classes.flexConatiner}>
            <Box className={classes.flexItem}>
              <TextField
                error={getIn(errors, 'user.email') && getIn(touched, 'user.email')}
                fullWidth
                helperText={touched.email && errors.email}
                label="Email*"
                name="user.email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.user.email}
                variant="outlined"
              />
            </Box>
            <Box className={classes.flexItemSecond}>
              <TextField
                error={getIn(errors, 'user.phone') && getIn(touched, 'user.phone')}
                fullWidth
                helperText={touched.phone && errors.phone}
                label="Phone*"
                name="user.phone"
                type="number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.user.phone}
                variant="outlined"
              />
            </Box>
          </Box>
          <Box mt={4}>
            <TextField
              id="additional_info"
              label="Additional Comments/Requests"
              variant="outlined"
              name='job.additional_info'
              placeholder="Please include information on heavy, oversized or fragile items, narrow stairways or halls, long walk ways, extra stops, or anything else that may affect the moving time."
              onChange={handleChange}
              value={values.job.additional_info}
              style={{width: '100%'}}
              multiline
              rows={4}
            />
          </Box>

          <Box
            mt={6}
            display="flex"
            alignItems='center'
          >
            {onBack && (
              <Button
                onClick={onBack}
                size="large"
                variant="outlined"
              >
                Previous
              </Button>
            )}
            <Box flexGrow={1} />
            <Box style={{marginRight: '2%'}}>
              <Button
                size="small"
                onClick={()=> resetForm()}
                style={{textTransform: 'none'}}
              >
                <BrushRoundedIcon className={classes.clearBrush}/>
                Clear Form
              </Button>
            </Box>
            <Box>
              <Button
                color="secondary"
                type="submit"
                variant="contained"
                size="large"
              >
                Next
              </Button>
            </Box>
          </Box>
        </form>
      )}
    </Formik>

  );
}

CustomerForm.propTypes = {
  className: PropTypes.string,
  onComplete: PropTypes.func,
  onBack: PropTypes.func
};

export default CustomerForm;
