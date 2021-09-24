import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import {
  Grid,
  Button,
  Box,
  Container,
  InputAdornment,
  IconButton,
  OutlinedInput,
  FormControl,
  FormHelperText,
  Typography,
  TextField,
} from "@material-ui/core";
import validate from "validate.js";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useDispatch, useSelector } from "src/store";
import { loginUser } from "src/slices/auth";
import Mail from "src/icons/Mail";
import Lock from "src/icons/Lock";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: theme.shadows[2],
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(3),
  },
  title: {
    paddingBottom: theme.spacing(4),
  },
  label: {
    fontWeight: 600,
    marginBottom: theme.spacing(1),
    display: "inline-block",
    color: theme.palette.text.secondary,
  },
  icon: {
    marginRight: 6,
    top: 6,
    width: 20,
    position: "relative",
  },
}));

const schema = {
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
  },
  password: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 6,
    },
  },
};

const Login = ({ history }) => {
  const classes = useStyles();
  const { isLoggingIn, isAuthenticated, error, loginError } = useSelector(
    (state) => state.auth
  );
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
    showPassword: false,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (event) => {
    event.persist();
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
  };

  const handleClickShowPassword = () => {
    setFormState((formState) => ({
      ...formState,
      showPassword: !formState.showPassword,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email: formState.values.email,
      password: formState.values.password,
    };

    if (formState.isValid) {
      dispatch(loginUser(user, history));
    }
    setFormState((formState) => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }));
  };
  const handleFocus = (event) => {
    event.preventDefault();
    const { target } = event;
    const extensionStarts = target.value.lastIndexOf(".");
    target.focus();
    target.setSelectionRange(0, extensionStarts);
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  if (isAuthenticated) {
    return <Redirect to="/" />;
  } else {
    return (
      <Container maxWidth="xs" className={classes.root}>
        {loginError && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}
        <Typography variant="h5" className={classes.title} align="center">
          Log in
        </Typography>
        <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label htmlFor="email" className={classes.label}>
                <Mail className={classes.icon} />
                Email
              </label>
              <TextField
                error={hasError("email")}
                fullWidth
                color={hasError("email") ? null : "primary"}
                name="email"
                id="email"
                placeholder="email"
                onChange={handleChange}
                value={formState.values.email || ""}
                variant="outlined"
                onFocus={handleFocus}
                helperText={
                  hasError("email") ? formState.errors.email[0] : null
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                variant="outlined"
                fullWidth
                error={hasError("password")}
              >
                <label htmlFor="password" className={classes.label}>
                  <Lock className={classes.icon} />
                  Password
                </label>
                <OutlinedInput
                  variant="outlined"
                  id="password"
                  color="primary"
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                  onFocus={handleFocus}
                  type={formState.showPassword ? "text" : "password"}
                  value={formState.values.password || ""}
                  endAdornment={
                    !formState.values.password ? null : (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {formState.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }
                />
                <FormHelperText id="pass">
                  {hasError("password") ? formState.errors.password[0] : null}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" alignItems="center" mt={2}>
                <Button
                  size="large"
                  variant="contained"
                  type="submit"
                  color="primary"
                  fullWidth
                  disableElevation
                  disabled={isLoggingIn ? true : false}
                >
                  {isLoggingIn ? "Loading..." : "Log in"}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
};

Login.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Login);
