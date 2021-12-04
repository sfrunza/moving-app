import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  TextField,
  Typography,
  IconButton,
} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import PlusIcon from "src/icons/Plus";
import { useFormik } from "formik";
import User from "src/icons/User";
import Mail from "src/icons/Mail";
import Lock from "src/icons/Lock";
import X from "src/icons/X";
import { addUser } from "src/slices/employees";

const useStyles = makeStyles((theme) => ({
  dialogActionsRoot: {
    padding: theme.spacing(2, 3),
    marginTop: theme.spacing(1),
  },
  label: {
    fontWeight: 600,
    marginBottom: theme.spacing(1),
    display: "inline-block",
    color: theme.palette.text.secondary,
  },
  icon: {
    marginRight: theme.spacing(1),
    top: 6,
    width: 20,
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const validate = (values) => {
  const errors = {};

  if (values.first_name === "") {
    errors.first_name = "Required";
  }

  if (values.last_name === "") {
    errors.last_name = "Required";
  }
  if (values.email === "") {
    errors.email = "Required";
  }
  if (values.password === "") {
    errors.password = "Required";
  }
  if (values.password_confirmation === "") {
    errors.password_confirmation = "Required";
  }
  if (values.password_confirmation !== values.password) {
    errors.password_confirmation = "Password must match";
  }

  return errors;
};

export default function NewEmployeeForm({ dispatch }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  // initiate formik
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validateOnMount: true,
    enableReinitialize: false,
    validate: (values) => validate(values),
    onSubmit: (values) => {
      console.log("submitted");
      dispatch(addUser(values));
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    formik.resetForm();
  };

  return (
    <>
      <Button
        aria-label="edit"
        color="primary"
        disableElevation
        onClick={handleClickOpen}
        startIcon={<PlusIcon fontSize="small" />}
        style={{ margin: 8 }}
        variant="contained"
      >
        New Employee
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="xs"
      >
        <DialogTitle id="form-dialog-title" disableTypography>
          <Typography variant="h6">New Employee</Typography>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
          >
            <X />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                <label htmlFor="first_name" className={classes.label}>
                  <User className={classes.icon} />
                  First Name
                </label>
                <TextField
                  fullWidth
                  id="first_name"
                  name="first_name"
                  variant="outlined"
                  size="small"
                  placeholder="First Name"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.first_name &&
                    Boolean(formik.errors.first_name)
                  }
                  helperText={
                    formik.touched.first_name && formik.errors.first_name
                  }
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <label htmlFor="last_name" className={classes.label}>
                  <User className={classes.icon} />
                  Last Name
                </label>
                <TextField
                  fullWidth
                  id="last_name"
                  name="last_name"
                  variant="outlined"
                  size="small"
                  placeholder="Last Name"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.last_name && Boolean(formik.errors.last_name)
                  }
                  helperText={
                    formik.touched.last_name && formik.errors.last_name
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="email" className={classes.label}>
                  <Mail className={classes.icon} />
                  Email
                </label>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  variant="outlined"
                  size="small"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="password" className={classes.label}>
                  <Lock className={classes.icon} />
                  Password
                </label>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  variant="outlined"
                  type="password"
                  size="small"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={(e) => formik.handleChange(e)}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <label
                  htmlFor="password_confirmation"
                  className={classes.label}
                >
                  <Lock className={classes.icon} />
                  Password Confirmation
                </label>
                <TextField
                  fullWidth
                  id="password_confirmation"
                  name="password_confirmation"
                  variant="outlined"
                  type="password"
                  size="small"
                  placeholder="Password"
                  value={formik.values.password_confirmation}
                  onChange={(e) => formik.handleChange(e)}
                  error={
                    formik.touched.password_confirmation &&
                    Boolean(formik.errors.password_confirmation)
                  }
                  helperText={
                    formik.touched.password_confirmation &&
                    formik.errors.password_confirmation
                  }
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions classes={{ root: classes.dialogActionsRoot }}>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => formik.handleSubmit()}
            color="primary"
            variant="contained"
            disableElevation
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
