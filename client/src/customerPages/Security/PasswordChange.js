import React from "react";
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
import { useStateValue } from "src/StateProvider";
import axios from "axios";
// import wait from 'src/utils/wait';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // width: "70%",
    margin: "auto",
    // [theme.breakpoints.down("sm")]: {
    //   width: "100%",
    // },
  },
  form: {
    height: "100%",
  },
  divCont: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
  },
}));

function PasswordChange({ className, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [{ user }] = useStateValue();

  const handlePasswordChange = (updated) => {
    axios
      .put("/users", { user: updated }, { withCredentials: true })
      .then((response) => {
        if (!response.data.status) {
          // if(current_user.admin) redirect('/app')
        } else {
          console.log(response.data.errors);
        }
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };

  return (
    <Formik
      initialValues={{
        email: user?.email,
        password: "",
        password_confirmation: "",
        current_password: "",
      }}
      validationSchema={Yup.object().shape({
        current_password: Yup.string()
          .min(6, "Must be at least 6 characters")
          .max(255)
          .required("Required"),
        password: Yup.string()
          .min(6, "Must be at least 6 characters")
          .max(255)
          .required("Required"),
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
          await handlePasswordChange(values);
          console.log("pass changed");
          resetForm();
          setStatus({ success: true });
          // setSubmitting(false);
          enqueueSnackbar("Password changed", {
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
          <form onSubmit={handleSubmit} className={classes.root}>
            <div {...rest}>
              <CardContent>
                <Grid container spacing={4}>
                  <Grid item md={12} xs={12}>
                    <TextField
                      error={Boolean(
                        touched.current_password && errors.current_password
                      )}
                      fullWidth
                      helperText={
                        touched.current_password && errors.current_password
                      }
                      label="Current Password"
                      name="current_password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="password"
                      value={values.current_password}
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
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
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField
                      error={Boolean(
                        touched.password_confirmation &&
                          errors.password_confirmation
                      )}
                      fullWidth
                      helperText={
                        touched.password_confirmation &&
                        errors.password_confirmation
                      }
                      label="Password Confirmation"
                      name="password_confirmation"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="password"
                      value={values.password_confirmation}
                    />
                  </Grid>
                </Grid>
                {errors.submit && (
                  <Box mt={3}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
              </CardContent>
              <Box p={2} display="flex" justifyContent="flex-start">
                <Button
                  color="secondary"
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                >
                  Change Password
                </Button>
              </Box>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

PasswordChange.propTypes = {
  className: PropTypes.string,
};

export default PasswordChange;
