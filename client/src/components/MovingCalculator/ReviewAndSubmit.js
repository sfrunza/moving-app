import React from "react";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import {
  Grid,
  Fade,
  useMediaQuery,
  Typography,
  Tooltip,
  Divider,
  Checkbox,
  Box,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "src/store";
import InformationCircle from "src/icons/InformationCircle";
import moment from "moment";
import { Link as RouterLink } from "react-router-dom";
import { resetAll, submitRequest } from "src/slices/booking";

const useStyles = makeStyles((theme) => ({
  infoIcon: {
    color: theme.palette.text.secondary,
    width: 18,
    margin: theme.spacing(0, 1),
    top: 6,
    position: "relative",
    "&:hover": {
      cursor: "pointer",
    },
  },
  buttonsContainer: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
    justifyContent: "space-between",
  },
  checkbox: {
    padding: 0,
    marginRight: theme.spacing(1),
  },
}));

const StyledGrid = withStyles((theme) => ({
  item: {
    display: "flex",
    alignItems: "flex-end",
  },
}))(Grid);

const validate = (values) => {
  const errors = {};

  if (!values.isAccepted) {
    errors.isAccepted = "Please check this box if you want to proceed";
  }
  return errors;
};

const ReviewAndSubmit = ({ handleBack, handleNext }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const dispatch = useDispatch();

  const {
    date,
    isFlatRate,
    deliveryDate,
    fromAddress,
    toAddress,
    fromApt,
    toApt,
    fromZip,
    toZip,
    origin,
    destination,
    movingSize,
    fromHouseType,
    toHouseType,
    crewSize,
    travelTime,
    movingService,
    rate,
    estimateQuote,
    estimateTime,
    additionalInfo,
    firstName,
    lastName,
    email,
    phone,
  } = useSelector((state) => state.booking);

  const formik = useFormik({
    initialValues: {
      isAccepted: false,
    },
    validateOnMount: true,
    enableReinitialize: false,
    validate: (values) => validate(values),
    onSubmit: (values) => {
      //   handleNext();
      console.log("submitted");
      handleSubmit();
      handleNext();
      dispatch(resetAll());
    },
  });

  const cityZipArray = (data) => {
    return data.split(", ");
  };
  const flatRate = () => {
    if (isFlatRate) {
      return `{${estimateQuote[0]}}`;
    } else {
      return `{${estimateQuote[0]},${estimateQuote[1]}}`;
    }
  };

  const isMovingWithStorage = (service) => {
    return service === "Moving with Storage";
  };

  // console.log(fromZip);
  // console.log(destination);
  // console.log(flatRate());

  const obj = {
    user: {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
    },
    job: {
      pick_up_date: date,
      delivery_date: deliveryDate,
      job_size: movingSize,
      job_type: movingService,
      crew_size: crewSize,
      job_rate: rate,
      is_flat_rate: isFlatRate,
      // is_to_storage: isMovingWithStorage(movingService),
      estimated_time: `{${estimateTime[0]},${estimateTime[1]}}`,
      travel_time: isMovingWithStorage(movingService)
        ? `{${travelTime[0]},${travelTime[0]}}`
        : `{${travelTime[0]},${travelTime[1]}}`,
      estimated_quote: flatRate(),
      additional_info: additionalInfo,
      job_status: "Needs Attention",
    },
    origin: {
      address: fromAddress,
      city: cityZipArray(origin)[0],
      state: cityZipArray(origin)[1],
      zip: fromZip,
      floor: fromHouseType,
      apt_number: fromApt,
    },
    destination: {
      address: toAddress,
      city: cityZipArray(destination)[0],
      state: cityZipArray(destination)[1],
      zip: toZip,
      floor: toHouseType,
      apt_number: toApt,
    },
  };

  const objDelivery = {
    user: {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      // password: "2222222222",
      // password_confirmation: "2222222222",
      // customer: true,
    },
    job: {
      pick_up_date: deliveryDate,
      job_size: movingSize,
      job_type: "Moving from Storage",
      crew_size: crewSize,
      job_rate: rate,
      estimated_time: `{${estimateTime[0]},${estimateTime[1]}}`,
      travel_time: `{${travelTime[1]},${travelTime[1]}}`,
      estimated_quote: flatRate(),
      additional_info: additionalInfo,
      job_status: "Needs Attention",
    },
    origin: {
      address: "20 Allied Dr",
      city: "Dedham",
      state: "MA",
      zip: "02026",
    },
    destination: {
      address: toAddress,
      city: cityZipArray(destination)[0],
      state: cityZipArray(destination)[1],
      zip: toZip,
      floor: toHouseType,
      apt_number: toApt,
    },
  };

  const handleSubmit = () => {
    dispatch(submitRequest(obj));
    if (movingService === "Moving with Storage") {
      dispatch(submitRequest(objDelivery));
    }
  };

  const hideDestination = (movingService) => {
    if (movingService === "Moving" || movingService === "Moving with Storage")
      return true;

    return false;
  };

  const getDaysDiff = (start_date, end_date, date_format = "YYYY-MM-DD") => {
    const getDateAsArray = (date) => {
      return moment(date.split(/\D+/), date_format);
    };
    return getDateAsArray(end_date).diff(getDateAsArray(start_date), "days");
  };

  // var differenceInTime = date2.getTime() - date1.getTime();
  // const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  return (
    <Fade in={true} mountOnEnter unmountOnExit>
      <div>
        <Grid container spacing={2} alignItems="center">
          <StyledGrid item xs={6} md={6}>
            {deliveryDate ? "Moving date" : "Date"}
          </StyledGrid>
          <StyledGrid item xs={6} md={6}>
            <Typography variant="button">
              {moment(date).format("MMM DD, YYYY")}
            </Typography>
          </StyledGrid>
          {deliveryDate && (
            <StyledGrid item xs={6} md={6}>
              Storage till
            </StyledGrid>
          )}
          {deliveryDate && (
            <StyledGrid item xs={6} md={6}>
              <Typography variant="button">
                {moment(deliveryDate).format("MMM DD, YYYY")}
              </Typography>
            </StyledGrid>
          )}

          <StyledGrid item xs={6} md={6}>
            From
          </StyledGrid>
          <StyledGrid item xs={6} md={6}>
            <Typography variant="body2">
              {fromAddress}, {origin}, {fromZip} (
              {fromHouseType !== "" ? fromHouseType : toHouseType})
            </Typography>
          </StyledGrid>

          {isMovingWithStorage(movingService) && (
            <>
              <StyledGrid item xs={6} md={6}>
                Storage
              </StyledGrid>
              <StyledGrid item xs={6} md={6}>
                <Typography variant="body2">
                  Insight Moving Storage *{getDaysDiff(date, deliveryDate)} days
                </Typography>
              </StyledGrid>
            </>
          )}

          {hideDestination(movingService) && (
            <StyledGrid item xs={6} md={6}>
              To
            </StyledGrid>
          )}
          {hideDestination(movingService) && (
            <StyledGrid item xs={6} md={6}>
              <Typography variant="body2">
                {toAddress}, {destination}, {toZip} ({toHouseType})
              </Typography>
            </StyledGrid>
          )}

          {/* <StyledGrid item xs={6} md={6}>
            Service
          </StyledGrid>
          <StyledGrid item xs={6} md={6}>
            <Typography variant="body2">{movingService}</Typography>
          </StyledGrid> */}

          <StyledGrid item xs={6} md={6}>
            Size
          </StyledGrid>
          <StyledGrid item xs={6} md={6}>
            <Typography variant="body2">{movingSize}</Typography>
          </StyledGrid>

          <StyledGrid item xs={6} md={6}>
            Crew Size
          </StyledGrid>
          <StyledGrid item xs={6} md={6}>
            <Typography variant="button">{crewSize}</Typography>
            <Typography variant="body2" style={{ marginLeft: 4 }}>
              Movers
            </Typography>
          </StyledGrid>

          <StyledGrid item xs={6} md={6}>
            {isFlatRate ? "FLAT PRICE" : "Rate"}
          </StyledGrid>
          {!isFlatRate && (
            <StyledGrid item xs={6} md={6}>
              <Typography variant="button">${rate}</Typography>
              <Typography variant="body2" style={{ marginLeft: 4 }}>
                /hour
              </Typography>
            </StyledGrid>
          )}
          {isFlatRate && (
            <StyledGrid item xs={6} md={6}>
              <Typography variant="button"> ${estimateQuote[0]}</Typography>
            </StyledGrid>
          )}
          {!isFlatRate && (
            <>
              <StyledGrid item xs={6} md={6}>
                Estimate job time
              </StyledGrid>
              <StyledGrid item xs={6} md={6}>
                <Typography variant="button">
                  {estimateTime[0]}
                  {estimateTime[1] ? " - " + estimateTime[1] : null}
                </Typography>
                <Typography variant="body2" style={{ marginLeft: 4 }}>
                  hours*
                  <Tooltip
                    title="Job Time = Labour Time + Travel Time"
                    placement="top-end"
                    arrow
                  >
                    <InformationCircle className={classes.infoIcon} />
                  </Tooltip>
                </Typography>
              </StyledGrid>
              <StyledGrid item xs={6} md={6}>
                Travel time
              </StyledGrid>
              <StyledGrid item xs={6} md={6}>
                <Typography variant="body1">
                  {isMovingWithStorage(movingService)
                    ? travelTime[0] + "/" + travelTime[0]
                    : travelTime[0] + "/" + travelTime[1]}
                </Typography>
                <Typography variant="body2" style={{ marginLeft: 4 }}>
                  min.
                  <Tooltip
                    title="from/to Headquarter"
                    placement="top-end"
                    arrow
                  >
                    <InformationCircle className={classes.infoIcon} />
                  </Tooltip>
                </Typography>
              </StyledGrid>
              <StyledGrid item xs={6} md={6}>
                Estimated Quote
              </StyledGrid>
              <StyledGrid item xs={6} md={6}>
                <Typography variant="button">
                  ${estimateQuote[0]}
                  {estimateQuote[1] ? " - $" + estimateQuote[1] : null}
                </Typography>
              </StyledGrid>
            </>
          )}
          <Divider style={{ width: "100%", margin: "8px 0px" }} />
          {!isFlatRate && (
            <StyledGrid item xs={12}>
              <Typography variant="caption">
                Please note, this quote is just an estimate and provided for
                your convenience only. We give you a database average for
                generally similar moves. However, your final cost is based on
                hourly rate and actual time your move will take.
              </Typography>
            </StyledGrid>
          )}
          {isFlatRate && (
            <StyledGrid item xs={12}>
              <Typography variant="caption">
                Please note, the above information provides an estimated quote
                only and is subject to change. The final Flat Price will be
                determined based on actual inventory and specific moving loads.
              </Typography>
            </StyledGrid>
          )}
        </Grid>
        <form onSubmit={formik.handleSubmit}>
          <Grid
            container
            spacing={isMd ? 2 : 1}
            classes={{ root: classes.buttonsContainer }}
          >
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <Checkbox
                  name="isAccepted"
                  checked={formik.values.isAccepted}
                  inputProps={{ "aria-label": "checkbox" }}
                  color="primary"
                  classes={{ root: classes.checkbox }}
                  onChange={(e) => {
                    formik.setFieldValue(
                      "isAccepted",
                      !formik.values.isAccepted
                    );
                  }}
                  //   required
                />

                <Typography variant="caption">
                  I have read and accept the
                </Typography>
                <Typography
                  variant="caption"
                  component={RouterLink}
                  to="#"
                  color="primary"
                >
                  &nbsp;terms & conditions*
                </Typography>
              </Box>
              {formik.touched.isAccepted &&
              Boolean(formik.errors.isAccepted) ? (
                <FormHelperText error>
                  {formik.errors.isAccepted}
                </FormHelperText>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="primary">
                No credit card required, no obligation!
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Button
                color="primary"
                variant="outlined"
                fullWidth
                onClick={() => handleBack()}
                // disabled={!formik.isValid}
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
                Submit Request
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Fade>
  );
};

export default ReviewAndSubmit;
