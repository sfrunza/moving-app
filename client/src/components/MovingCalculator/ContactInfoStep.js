import React from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import { TextField, Grid, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "src/store";
import {
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setAdditionalInfo,
} from "src/slices/booking";
import User from "src/icons/User";
import Mail from "src/icons/Mail";
import Phone from "src/icons/Phone";
import PencilAlt from "src/icons/PencilAlt";
import { phoneFilter, phoneFormatter } from "src/components/PhoneFormatter";

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
  inputRoot: {
    "& input": {
      [theme.breakpoints.down("xs")]: {
        paddingLeft: "6px",
        paddingRight: "2px",
      },
    },
  },
  infoItems: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
  },
  infoItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid",
    padding: "0px 3px",
    borderRadius: 6,
    fontWeight: "bold",
  },
  infoIcon: {
    width: 16,
    height: 16,
    marginLeft: 4,
  },
  regular: {
    color: theme.palette.primary.main,
  },
  subPeak: {
    color: "#e2ae00",
  },
  peak: {
    color: theme.palette.secondary.main,
  },
  customWidth: {
    maxWidth: 200,
    [theme.breakpoints.up("sm")]: {
      maxWidth: 135,
    },
  },
  gridItem: {
    maxWidth: "28%",
    flexBasis: "28%",
  },
}));

const onlyNumbers = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
};

const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const validate = (values) => {
  const errors = {};

  if (values.firstName === "") {
    errors.firstName = "Required";
  }

  if (values.lastName === "") {
    errors.lastName = "Required";
  }
  if (values.email === "") {
    errors.email = "Required";
  }
  if (values.phone === "") {
    errors.phone = "Required";
  } else if (!values.phone.match(phoneRegex)) {
    errors.phone = "Invalid Phone";
  }

  return errors;
};

const ContactInfoStep = ({ handleNext, handleBack, initial }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // initiate formik
  const formik = useFormik({
    initialValues: initial,
    validateOnMount: true,
    enableReinitialize: false,
    validate: (values) => validate(values),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(setFirstName(values.firstName));
      dispatch(setLastName(values.lastName));
      dispatch(setEmail(values.email));
      dispatch(setPhone(phoneFormatter(phoneFilter(values.phone))));
      dispatch(setAdditionalInfo(values.additionalInfo));
      handleNext();
    },
  });

  return (
    <Fade in={true} mountOnEnter unmountOnExit>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <label htmlFor="firstName" className={classes.label}>
              <User className={classes.icon} />
              First Name
            </label>
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              variant="outlined"
              size="small"
              placeholder="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <label htmlFor="lastName" className={classes.label}>
              <User className={classes.icon} />
              Last Name
            </label>
            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              variant="outlined"
              size="small"
              placeholder="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
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
            <label htmlFor="phone" className={classes.label}>
              <Phone className={classes.icon} />
              Primary Phone
            </label>
            <TextField
              fullWidth
              id="phone"
              name="phone"
              variant="outlined"
              size="small"
              placeholder="Primary Phone"
              onInput={(e) => onlyNumbers(e)}
              inputProps={{
                maxLength: 14,
                inputMode: "numeric",
              }}
              value={phoneFormatter(phoneFilter(formik.values.phone))}
              onChange={(e) => {
                e.target.value === "1"
                  ? formik.setFieldValue("phone", "")
                  : formik.handleChange(e);
              }}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="additionalInfo" className={classes.label}>
              <PencilAlt className={classes.icon} />
              Additional Comments/Requests
            </label>
            <TextField
              fullWidth
              id="additionalInfo"
              name="additionalInfo"
              variant="outlined"
              size="small"
              placeholder="Please include information on heavy, oversized or fragile items, narrow stairways or halls, long walk ways, extra stops, or anything else that may affect the moving time."
              multiline
              rows={4}
              value={formik.values.additionalInfo}
              onChange={formik.handleChange}
              error={
                formik.touched.additionalInfo &&
                Boolean(formik.errors.additionalInfo)
              }
              helperText={
                formik.touched.additionalInfo && formik.errors.additionalInfo
              }
            />
          </Grid>
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
              Review Quote
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fade>
  );
};

export default ContactInfoStep;
