import React from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import {
  TextField,
  Grid,
  Fade,
  Select,
  FormControl,
  Chip,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Clock from "src/icons/Clock";
import CurrencyDollar from "src/icons/CurrencyDollar";
import UsersIcon from "src/icons/Users";

const useStyles = makeStyles((theme) => ({
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
  buttonsContainer: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
    justifyContent: "space-between",
  },
}));

const validate = (values) => {
  const errors = {};

  if (values.job_duration === "") {
    errors.job_duration = "Required";
  } else if (values.job_duration === "") {
    errors.job_duration = "Required";
  }
  if (values.total_amount === "") {
    errors.total_amount = "Required";
  }
  if (values.user_ids.length < 2) {
    errors.user_ids = "Min 2 movers";
  }

  return errors;
};

const CompleteForm = ({
  setStatus,
  handleStatusUpdate,
  handleClose,
  users,
  init,
}) => {
  const classes = useStyles();

  const names = [];
  users.map((user) => {
    names.push(user);
    return null;
  });

  // initiate formik
  const formik = useFormik({
    initialValues: init,
    validateOnMount: true,
    enableReinitialize: false,
    validate: (values) => validate(values),
    onSubmit: (values) => {
      setStatus("Completed");
      handleStatusUpdate(values);
      handleClose();
    },
  });

  return (
    <Fade in={true} mountOnEnter unmountOnExit>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <label htmlFor="job_duration" className={classes.label}>
              <Clock className={classes.icon} />
              Job Duration
            </label>
            <TextField
              fullWidth
              id="job_duration"
              name="job_duration"
              variant="outlined"
              size="small"
              type="number"
              placeholder="Duration"
              // onInput={(e) => onlyNumbers(e)}
              inputProps={{
                maxLength: 5,
                // inputMode: "numeric",
              }}
              value={formik.values.job_duration || ""}
              onChange={(e) => {
                formik.handleChange(e);
              }}
              error={
                formik.touched.job_duration &&
                Boolean(formik.errors.job_duration)
              }
              helperText={
                formik.touched.job_duration && formik.errors.job_duration
              }
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <label htmlFor="total_amount" className={classes.label}>
              <CurrencyDollar className={classes.icon} />
              Total Amount
            </label>
            <TextField
              fullWidth
              id="total_amount"
              name="total_amount"
              variant="outlined"
              size="small"
              type="number"
              placeholder="Amount"
              // onInput={(e) => onlyNumbers(e)}
              inputProps={{
                maxLength: 6,
                inputMode: "numeric",
              }}
              value={formik.values.total_amount || ""}
              onChange={(e) => {
                formik.handleChange(e);
              }}
              error={
                formik.touched.total_amount &&
                Boolean(formik.errors.total_amount)
              }
              helperText={
                formik.touched.total_amount && formik.errors.total_amount
              }
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="user_ids" className={classes.label}>
              <UsersIcon className={classes.icon} />
              Crew
            </label>
            <FormControl
              variant="outlined"
              size="small"
              placeholder="Select"
              fullWidth
              error={formik.touched.user_ids && Boolean(formik.errors.user_ids)}
            >
              <Select
                id="user_ids"
                variant="outlined"
                placeholder="Select"
                name="user_ids"
                size="small"
                multiple
                renderValue={(selected) => {
                  return (
                    <div className={classes.chips}>
                      {selected.map((value, i) => {
                        return (
                          <Chip
                            key={i}
                            label={value.first_name + " " + value.last_name}
                            className={classes.chip}
                          />
                        );
                      })}
                    </div>
                  );
                }}
                value={formik.values.user_ids}
                onChange={formik.handleChange}
                error={
                  formik.touched.user_ids && Boolean(formik.errors.user_ids)
                }
              >
                {names.map((user, i) => (
                  <MenuItem key={i} value={user}>
                    {user.first_name + " " + user.last_name}
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.user_ids && Boolean(formik.errors.user_ids) ? (
                <FormHelperText>{formik.errors.user_ids}</FormHelperText>
              ) : null}
            </FormControl>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          classes={{ root: classes.buttonsContainer }}
        >
          <Grid item xs={12}>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              disableElevation
            >
              Save and Update
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fade>
  );
};

export default CompleteForm;
