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
import { useStateValue } from "src/StateProvider";
import { updateProfile } from "src/UserAction";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "auto",
  },
}));

function EditProfile({ className, ...rest }) {
  const classes = useStyles();
  const [{ user }, dispatch] = useStateValue();
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
  const handleUserUpdate = (dispatch, newUser, id) => {
    updateProfile(dispatch, newUser, id);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        ...user,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        add_phone: user.add_phone,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"),
        first_name: Yup.string().max(255).required("First name is required"),
        last_name: Yup.string().max(255).required("Last name is required"),
        phone: Yup.string().max(255).required("Last name is required"),
      })}
      onSubmit={async (
        values,
        { resetForm, setErrors, setStatus, setSubmitting }
      ) => {
        try {
          await handleUserUpdate(dispatch, values, user.id);
          setStatus({ success: true });
          enqueueSnackbar("Profile updated", {
            variant: "success",
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
                      error={Boolean(touched.first_name && errors.first_name)}
                      fullWidth
                      helperText={touched.first_name && errors.first_name}
                      label="First Name"
                      name="first_name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                      type="first_name"
                      value={values.first_name || ""}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      error={Boolean(touched.last_name && errors.last_name)}
                      fullWidth
                      helperText={touched.last_name && errors.last_name}
                      label="Last Name"
                      name="last_name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                      type="last_name"
                      value={values.last_name || ""}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      error={Boolean(touched.email && errors.email)}
                      fullWidth
                      helperText={touched.email && errors.email}
                      label="Email Address"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                      type="email"
                      value={values.email || ""}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      error={Boolean(touched.phone && errors.phone)}
                      fullWidth
                      helperText={touched.phone && errors.phone}
                      label="Phone"
                      name="phone"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                      type="number"
                      value={values.phone || ""}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      error={Boolean(touched.add_phone && errors.add_phone)}
                      fullWidth
                      helperText={touched.add_phone && errors.add_phone}
                      label="Secondary Phone"
                      name="add_phone"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="number"
                      value={values.add_phone || ""}
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
                  Save Changes
                </Button>
              </Box>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

EditProfile.propTypes = {
  className: PropTypes.string,
};

export default EditProfile;
