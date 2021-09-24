import React from "react";
// import { useDispatch } from 'react-redux';
// import clsx from 'clsx';
import PropTypes from "prop-types";
import * as Yup from "yup";
import { Formik } from "formik";
import { useSnackbar } from "notistack";
import {
  Box,
  Button,
  CardContent,
  FormHelperText,
  Grid,
  TextField,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "auto",
  },
}));

function CompleteForm({
  className,
  job,
  onClose,
  setJob,
  handleStatusUpdate,
  setStatus,
  ...rest
}) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  // const handleUserUpdate = (dispatch, newUser, id) => {
  //   fetch(`/api/v1/users/${id}`, {
  //     method: "PATCH",
  //     body: JSON.stringify({ user: newUser }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((response) => {
  //     dispatch({
  //       type: "SET_USER",
  //       payload: newUser,
  //       loginStatus: true,
  //     });
  //   });
  // };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        ...job,
        job_duration: null,
        total_amount: null,
      }}
      validationSchema={Yup.object().shape({})}
      onSubmit={async (
        values,
        { resetForm, setErrors, setStatus, setSubmitting }
      ) => {
        try {
          await fetch(`/api/v1/jobs/${job.job.id}`, {
            method: "PUT",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((response) => {
            onClose();
            setJob(values);
            handleStatusUpdate("Completed");
            setStatus("Completed");
            enqueueSnackbar("Job Updated", {
              variant: "success",
            });
          });
        } catch (error) {
          setStatus({ success: false });
          setErrors({ submit: error.message });
        } finally {
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
      }) => {
        return (
          <form onSubmit={handleSubmit} className={classes.root}>
            <div {...rest}>
              <CardContent>
                <Grid container spacing={4}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      error={Boolean(
                        touched.job_duration && errors.job_duration
                      )}
                      fullWidth
                      helperText={touched.job_duration && errors.job_duration}
                      label="Job Duration"
                      name="job.job_duration"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                      type="number"
                      variant="outlined"
                      value={values.job.job_duration || ""}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      error={Boolean(
                        touched.total_amount && errors.total_amount
                      )}
                      fullWidth
                      helperText={touched.total_amount && errors.total_amount}
                      label="Total Amount"
                      name="job.total_amount"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                      type="number"
                      variant="outlined"
                      value={values.job.total_amount || ""}
                    />
                  </Grid>
                </Grid>
                {errors.submit && (
                  <Box mt={3}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
              </CardContent>
              <Box mt={6} display="flex" alignItems="center">
                <Button
                  onClick={() => onClose()}
                  size="medium"
                  variant="outlined"
                >
                  Cancel
                </Button>
                <Box flexGrow={1} />
                <Box>
                  <Button
                    color="secondary"
                    disabled={isSubmitting}
                    type="submit"
                    variant="contained"
                    disableElevation
                  >
                    Save Changes
                  </Button>
                </Box>
              </Box>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

CompleteForm.propTypes = {
  className: PropTypes.string,
};

export default CompleteForm;
