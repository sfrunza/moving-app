import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import * as Yup from "yup";
import { Formik } from "formik";
import { useSnackbar } from "notistack";
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
  makeStyles,
} from "@material-ui/core";
// import wait from 'src/utils/wait';
import Lock from "src/icons/Lock";

const useStyles = makeStyles((theme) => ({
  root: {},
  label: {
    fontWeight: 600,
    marginBottom: theme.spacing(1),
    display: "flex",
    color: theme.palette.text.secondary,
    alignItems: "baseline",
  },
  icon: {
    marginRight: theme.spacing(1),
    top: 6,
    width: 20,
    position: "relative",
  },
  inputWidth: {
    width: "calc(100% - 24px)",
    marginLeft: 24,
  },
}));

function Security({ className, user, handlePasswordChange, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Formik
      initialValues={{
        password: "",
        password_confirmation: "",
        current_password: "",
      }}
      validationSchema={Yup.object().shape({
        current_password: Yup.string()
          .min(6, "Must be at least 6 characters")
          .max(255)
          .required("Current password is required"),
        password: Yup.string()
          .min(6, "Must be at least 6 characters")
          .max(255)
          .required("New password is required"),
        password_confirmation: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Required"),
      })}
      onSubmit={async (
        values,
        { resetForm, setErrors, setStatus, setSubmitting }
      ) => {
        try {
          // Make API request
          await handlePasswordChange(values, user.id);
          resetForm();
          setStatus({ success: true });
          setSubmitting(false);
          enqueueSnackbar("Password updated", {
            variant: "success",
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
        values,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Card className={clsx(classes.root, className)} {...rest}>
              <CardHeader title="Change Password" />
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item md={4} sm={6} xs={12}>
                    <label htmlFor="current_password" className={classes.label}>
                      <Lock className={classes.icon} />
                      Current password
                    </label>
                    <TextField
                      error={Boolean(
                        touched.current_password && errors.current_password
                      )}
                      className={classes.inputWidth}
                      helperText={
                        touched.current_password && errors.current_password
                      }
                      name="current_password"
                      id="current_password"
                      size="small"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="password"
                      value={values.current_password}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={4} sm={6} xs={12}>
                    <label htmlFor="password" className={classes.label}>
                      <Lock className={classes.icon} />
                      New password
                    </label>
                    <TextField
                      error={Boolean(touched.password && errors.password)}
                      className={classes.inputWidth}
                      helperText={touched.password && errors.password}
                      name="password"
                      id="password"
                      size="small"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="password"
                      value={values.password}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={4} sm={6} xs={12}>
                    <label
                      htmlFor="password_confirmation"
                      className={classes.label}
                    >
                      <Lock className={classes.icon} />
                      Password confirmation
                    </label>
                    <TextField
                      error={Boolean(
                        touched.password_confirmation &&
                          errors.password_confirmation
                      )}
                      className={classes.inputWidth}
                      helperText={
                        touched.password_confirmation &&
                        errors.password_confirmation
                      }
                      name="password_confirmation"
                      id="password_confirmation"
                      size="small"
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
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
              </CardContent>
              <Box p={2} display="flex" justifyContent="flex-end">
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                  disableElevation
                >
                  Change Password
                </Button>
              </Box>
            </Card>
          </form>
        );
      }}
    </Formik>
  );
}

Security.propTypes = {
  className: PropTypes.string,
};

export default Security;
