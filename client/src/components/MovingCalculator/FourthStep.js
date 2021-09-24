import React from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import { TextField, Grid, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocationMarker from "src/icons/LocationMarker";
import { useDispatch, useSelector } from "src/store";
import { setFromAddress, setFromApt, setToAddress, setToApt } from "src/slices/booking";
import clsx from "clsx";
import Hashtag from "src/icons/Hashtag";

const useStyles = makeStyles((theme) => ({
  label: {
    fontWeight: 600,
    marginBottom: theme.spacing(1),
    display: "inline-block",
    color: theme.palette.text.secondary,
  },
  strongML: {
    marginLeft: theme.spacing(1),
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

function capitalize(input) {
  return input
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
}

const validate = (values, movingService) => {
  const errors = {};

  if (values.fromAddress === "") {
    errors.fromAddress = "Required";
  }

  if (movingService === "Moving" || movingService === "Moving with Storage") {
    if (values.toAddress === "") {
      errors.toAddress = "Required";
    }
  }

  return errors;
};

const FourthStep = ({ handleNext, handleBack, initial }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { movingService } = useSelector((state) => state.booking);

  // initiate formik
  const formik = useFormik({
    initialValues: initial,
    validateOnMount: true,
    enableReinitialize: false,
    validate: (values) => validate(values, movingService),
    onSubmit: (values) => {
      dispatch(setFromAddress(values.fromAddress));
      dispatch(setToAddress(values.toAddress));
      dispatch(setFromApt(values.fromApt));
      dispatch(setToApt(values.toApt))
      handleNext();
    },
  });

  const hideDestination = (movingService) => {
    if (movingService === "Moving" || movingService === "Moving with Storage")
      return true;

    return false;
  };

  return (
    <Fade in={true} mountOnEnter unmountOnExit>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <label htmlFor="fromAddress" className={classes.label}>
              <LocationMarker className={classes.icon} />
              Origin Address
            </label>
            <TextField
              fullWidth
              id="fromAddress"
              name="fromAddress"
              variant="outlined"
              size="small"
              placeholder="123 Street Name"
              value={formik.values.fromAddress}
              onChange={(e) => {
                formik.setFieldValue("fromAddress", capitalize(e.target.value));
              }}
              error={
                formik.touched.fromAddress && Boolean(formik.errors.fromAddress)
              }
              helperText={
                formik.touched.fromAddress && formik.errors.fromAddress
              }
            />
          </Grid>
          <Grid item xs={4}>
            <label htmlFor="fromApt" className={classes.label}>
              <Hashtag className={classes.icon} />
              Apt
            </label>
            <TextField
              fullWidth
              id="fromApt"
              name="fromApt"
              variant="outlined"
              size="small"
              placeholder="Apt"
              value={formik.values.fromApt}
              onChange={(e) => {
                formik.setFieldValue("fromApt", capitalize(e.target.value));
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <strong className={clsx(classes.label, classes.strongML)}>
              {formik.values.origin} {formik.values.fromZip}
            </strong>
          </Grid>
          {hideDestination(movingService) && (
            <Grid item xs={8}>
              <label htmlFor="toAddress" className={classes.label}>
                <LocationMarker className={classes.icon} />
                Destination Address
              </label>
              <TextField
                fullWidth
                id="toAddress"
                name="toAddress"
                variant="outlined"
                size="small"
                placeholder="123 Street Name"
                value={formik.values.toAddress}
                onChange={(e) => {
                  formik.setFieldValue("toAddress", capitalize(e.target.value));
                }}
                error={
                  formik.touched.toAddress && Boolean(formik.errors.toAddress)
                }
                helperText={formik.touched.toAddress && formik.errors.toAddress}
              />
            </Grid>
          )}
          {hideDestination(movingService) && (
            <Grid item xs={4}>
              <label htmlFor="toApt" className={classes.label}>
                <Hashtag className={classes.icon} />
                Apt
              </label>
              <TextField
                fullWidth
                id="toApt"
                name="toApt"
                variant="outlined"
                size="small"
                placeholder="Apt"
                value={formik.values.toApt}
                onChange={(e) => {
                  formik.setFieldValue(
                    "toApt",
                    capitalize(e.target.value)
                  );
                }}
              />
            </Grid>
          )}
          {hideDestination(movingService) && (
            <Grid item xs={12}>
              <strong className={clsx(classes.label, classes.strongML)}>
                {formik.values.destination} {formik.values.toZip}
              </strong>
            </Grid>
          )}
        </Grid>
        <Grid
          container
          spacing={2}
          classes={{ root: classes.buttonsContainer }}
        >
          <Grid item xs={6}>
            <Button
              color="primary"
              variant="outlined"
              fullWidth
              onClick={() => handleBack()}
            >
              Back
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              disableElevation
              // disabled={!formik.isValid}
            >
              Contact Info
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fade>
  );
};

export default FourthStep;
