import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  Box,
  CardHeader,
  Divider,
  TextField,
  Card,
  CardContent,
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import validate from "validate.js";
import User from "src/icons/User";
import Mail from "src/icons/Mail";
import Phone from "src/icons/Phone";
import { phoneFilter, phoneFormatter } from "src/components/PhoneFormatter";

const useStyles = makeStyles((theme) => ({
  label: {
    fontWeight: 500,
    marginBottom: theme.spacing(1),
    display: "inline-block",
    color: theme.palette.text.secondary,
  },
  icon: {
    marginRight: theme.spacing(2),
    top: 6,
    width: 20,
    position: "relative",
  },
  inputWidth: {
    width: "calc(100% - 33px)",
    marginLeft: 33,
  },
}));

const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const schema = {
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: {
      message: "is not valid",
    },
  },
  phone: {
    presence: { allowEmpty: false, message: "is required" },
    format: {
      pattern: phoneRegex,
      message: "is not valid",
    },
  },
  first_name: {
    presence: { allowEmpty: false, message: "is required" },
  },
  last_name: {
    presence: { allowEmpty: false, message: "is required" },
  },
};

const GeneralSettings = ({ user, handleUpdate, isUpdating }) => {
  const currentUser = {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: user.phone,
    add_phone: user.add_phone,
  };
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [formState, setFormState] = useState({
    isValid: false,
    values: currentUser,
    touched: {},
    errors: {},
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values, user]);

  const handleChange = (event) => {
    event.persist();
    if (event.target.name === "phone") {
      setFormState((formState) => ({
        ...formState,
        values: {
          ...formState.values,
          phone:
            event.target.value === "1"
              ? ""
              : phoneFormatter(phoneFilter(event.target.value)),
        },
        touched: {
          ...formState.touched,
          phone: true,
        },
      }));
    } else if (event.target.name === "add_phone") {
      setFormState((formState) => ({
        ...formState,
        values: {
          ...formState.values,
          add_phone:
            event.target.value === "1"
              ? ""
              : phoneFormatter(phoneFilter(event.target.value)),
        },
        touched: {
          ...formState.touched,
          add_phone: true,
        },
      }));
    } else {
      setFormState((formState) => ({
        ...formState,
        values: {
          ...formState.values,
          [event.target.name]:
            event.target.type === "checkbox"
              ? event.target.checked
              : event.target.value,
        },
        touched: {
          ...formState.touched,
          [event.target.name]: true,
        },
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState.isValid) {
      handleUpdate(user.id, formState.values);
      enqueueSnackbar("Customer updated", {
        anchorOrigin: {
          horizontal: "right",
          vertical: "top",
        },
        variant: "success",
      });
    }
    setFormState((formState) => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }));
  };

  const shallowEqual = (object1, object2) => {
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

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;
  return (
    <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
      <Card>
        <CardHeader title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <label htmlFor="first_name" className={classes.label}>
                <User className={classes.icon} />
                First name
              </label>
              <TextField
                error={hasError("first_name")}
                className={classes.inputWidth}
                name="first_name"
                id="first_name"
                size="small"
                value={formState.values.first_name || ""}
                onChange={handleChange}
                variant="outlined"
                helperText={
                  hasError("first_name") ? formState.errors.first_name : null
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <label htmlFor="last_name" className={classes.label}>
                <User className={classes.icon} />
                Last name
              </label>
              <TextField
                error={hasError("last_name")}
                className={classes.inputWidth}
                name="last_name"
                id="last_name"
                size="small"
                onChange={handleChange}
                value={formState.values.last_name}
                variant="outlined"
                helperText={
                  hasError("last_name") ? formState.errors.last_name : null
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <label htmlFor="email" className={classes.label}>
                <Mail className={classes.icon} />
                Email address
              </label>
              <TextField
                error={hasError("email")}
                className={classes.inputWidth}
                name="email"
                id="email"
                size="small"
                onChange={handleChange}
                value={formState.values.email || ""}
                variant="outlined"
                helperText={
                  hasError("email") ? formState.errors.email[0] : null
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <label htmlFor="phone" className={classes.label}>
                <Phone className={classes.icon} />
                Phone
              </label>
              <TextField
                error={hasError("phone")}
                className={classes.inputWidth}
                name="phone"
                id="phone"
                size="small"
                onChange={handleChange}
                value={formState.values.phone || ""}
                variant="outlined"
                helperText={
                  hasError("phone") ? formState.errors.phone[0] : null
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <label htmlFor="phone" className={classes.label}>
                <Phone className={classes.icon} />
                Secondary Phone
              </label>
              <TextField
                // error={hasError("add_phone")}
                className={classes.inputWidth}
                name="add_phone"
                id="add_phone"
                size="small"
                onChange={handleChange}
                value={formState.values.add_phone || ""}
                variant="outlined"
                // helperText={
                //   hasError("add_phone") ? formState.errors.add_phone[0] : null
                // }
              />
            </Grid>
          </Grid>
        </CardContent>
        <Box p={2} display="flex" justifyContent="flex-end">
          <Button
            color="primary"
            disabled={shallowEqual(formState.values, currentUser) || isUpdating}
            type="submit"
            variant="contained"
            disableElevation
          >
            {isUpdating ? "Loading..." : "Save Changes"}
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default GeneralSettings;
