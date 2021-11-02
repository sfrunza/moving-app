import React, { useState } from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import {
  Grid,
  TextField,
  Card,
  CardHeader,
  Divider,
  Box,
  CardContent,
  Switch,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Home from "src/icons/Home";
import CurrencyDollar from "src/icons/CurrencyDollar";
import Lock from "src/icons/Lock";
import ContactPhoneRoundedIcon from "@material-ui/icons/ContactPhoneRounded";
import Eye from "src/icons/Eye";
import EyeOff from "src/icons/EyeOff";

const useStyles = makeStyles((theme) => ({
  label: {
    fontWeight: 500,
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
  inputWidth: {
    width: "calc(100% - 24px)",
    marginLeft: 24,
  },
  iconPadding: {
    padding: 0,
  },
}));

const validate = (values) => {
  const errors = {};

  //   if (!values.movingSize) {
  //     errors.movingSize = "Required";
  //   }
  //   if (!values.movingSize) {
  //     errors.movingSize = "Required";
  //   }
  //   if (!values.movingSize) {
  //     errors.movingSize = "Required";
  //   }
  //   if (!values.movingSize) {
  //     errors.movingSize = "Required";
  //   }
  //   if (!values.movingSize) {
  //     errors.movingSize = "Required";
  //   }

  return errors;
};

const areObjectsEqual = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const UserInfo = ({ user, handleUpdate, isUpdating, init }) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  // initiate formik
  const formik = useFormik({
    initialValues: init,
    validate: (values) => validate(values),
    onSubmit: (values) => {
      handleUpdate(user.id, values);
    },
  });

  const handleClickShowPassword = () => {
    setShow(!show);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card>
        <CardHeader title="Settings" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <label htmlFor="address" className={classes.label}>
                <Home className={classes.icon} />
                Address
              </label>
              <TextField
                className={classes.inputWidth}
                name="address"
                id="address"
                size="small"
                value={formik.values.address || ""}
                onChange={formik.handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <label htmlFor="rate" className={classes.label}>
                <CurrencyDollar className={classes.icon} />
                Rate
              </label>
              <TextField
                className={classes.inputWidth}
                name="rate"
                id="rate"
                type="number"
                size="small"
                onChange={formik.handleChange}
                value={formik.values.rate}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <label htmlFor="ssn" className={classes.label}>
                <Lock className={classes.icon} />
                SSN
              </label>
              <TextField
                className={classes.inputWidth}
                name="ssn"
                id="ssn"
                size="small"
                type={show ? "text" : "password"}
                onChange={formik.handleChange}
                value={formik.values.ssn || ""}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <IconButton
                      classes={{ root: classes.iconPadding }}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                    >
                      {show ? <Eye /> : <EyeOff />}
                    </IconButton>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <label htmlFor="ssn" className={classes.label}>
                <ContactPhoneRoundedIcon className={classes.icon} />
                Active
              </label>
              <Switch
                checked={formik.values.active}
                onChange={() =>
                  formik.setFieldValue("active", !formik.values.active)
                }
                name="active"
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Box p={2} display="flex" justifyContent="flex-end">
          <Button
            color="primary"
            type="submit"
            variant="contained"
            disableElevation
            disabled={areObjectsEqual(formik.values, init) || isUpdating}
          >
            Save Changes
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default UserInfo;
