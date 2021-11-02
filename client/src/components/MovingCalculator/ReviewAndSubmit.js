import React from "react";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import {
  Grid,
  Fade,
  useMediaQuery,
  Typography,
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
import ToolTip from "../ToolTip";

const useStyles = makeStyles((theme) => ({
  infoIcon: {
    color: theme.palette.text.secondary,
    width: 18,
    margin: theme.spacing(0, 1),
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
    timeBetween,
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

  // console.log(timeBetween);
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
      time_between: isMovingWithStorage(movingService) ? 0 : timeBetween,
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
      time_between: 0,
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
      floor: "1st/Ground floor",
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

  return (
    <Fade in={true} mountOnEnter unmountOnExit>
      <div>
        <Grid
          container
          spacing={2}
          alignItems="baseline"
          justifyContent="space-between"
        >
          <StyledGrid item xs={4}>
            {deliveryDate ? "Moving date" : "Date"}
          </StyledGrid>
          <StyledGrid item xs={7}>
            <Typography variant="body2">
              <b>{moment(date).format("MMMM DD, YYYY")}</b>
            </Typography>
          </StyledGrid>
          {deliveryDate && (
            <StyledGrid item xs={4}>
              Storage till
            </StyledGrid>
          )}
          {deliveryDate && (
            <StyledGrid item xs={7}>
              <Typography variant="body2">
                <b>{moment(deliveryDate).format("MMMM DD, YYYY")}</b>
              </Typography>
            </StyledGrid>
          )}

          {deliveryDate && (
            <StyledGrid item xs={12}>
              <Typography variant="caption" color="textPrimary">
                <b>
                  Delivery rate and time will depend on your final destination
                  and date of delivery.
                </b>
              </Typography>
            </StyledGrid>
          )}
          <Divider style={{ width: "100%" }} />

          <StyledGrid item xs={4}>
            From
          </StyledGrid>
          <StyledGrid item xs={7}>
            <Typography variant="body2">
              <b>
                {fromAddress}, {origin} {fromZip}
              </b>
              <br></br>({fromHouseType !== "" ? fromHouseType : toHouseType})
            </Typography>
          </StyledGrid>

          {isMovingWithStorage(movingService) && (
            <>
              <StyledGrid item xs={4}>
                Storage
              </StyledGrid>
              <StyledGrid item xs={7}>
                <Typography variant="body2">
                  <b> Insight Moving Storage</b> <br></br>*
                  {getDaysDiff(date, deliveryDate)} days
                </Typography>
              </StyledGrid>
            </>
          )}

          {hideDestination(movingService) && (
            <StyledGrid item xs={4}>
              To
            </StyledGrid>
          )}
          {hideDestination(movingService) && (
            <StyledGrid item xs={7}>
              <Typography variant="body2">
                <b>
                  {toAddress}, {destination} {toZip}
                </b>
                <br></br>({toHouseType})
              </Typography>
            </StyledGrid>
          )}

          {/* <StyledGrid item xs={7}>
            Service
          </StyledGrid>
          <StyledGrid item xs={7}>
            <Typography variant="body2">{movingService}</Typography>
          </StyledGrid> */}

          <Divider style={{ width: "100%" }} />

          <StyledGrid item xs={4}>
            Size
          </StyledGrid>
          <StyledGrid item xs={7}>
            <Typography variant="body2">
              <b>{movingSize}</b>
            </Typography>
          </StyledGrid>

          <StyledGrid item xs={4}>
            Crew Size
          </StyledGrid>
          <StyledGrid item xs={7}>
            <Typography variant="body2">
              <b>{crewSize}</b> Movers
            </Typography>
          </StyledGrid>

          <StyledGrid item xs={4}>
            {isFlatRate ? "FLAT PRICE" : "Rate"}
          </StyledGrid>
          {!isFlatRate && (
            <StyledGrid item xs={7}>
              <Typography variant="body2">
                <b>${rate}</b>/hour
              </Typography>
            </StyledGrid>
          )}
          {isFlatRate && (
            <StyledGrid item xs={7}>
              <Typography variant="button"> ${estimateQuote[0]}</Typography>
            </StyledGrid>
          )}
          {!isFlatRate && (
            <>
              <StyledGrid item xs={4}>
                Estimate job time
              </StyledGrid>
              <StyledGrid item xs={7}>
                <Typography variant="body2">
                  <b>
                    {estimateTime[0]}
                    {estimateTime[1] ? " - " + estimateTime[1] : null}
                  </b>{" "}
                  hours*
                </Typography>
                <ToolTip title="Job Time = Labour Time + Travel Time">
                  <InformationCircle className={classes.infoIcon} />
                </ToolTip>
              </StyledGrid>
              <StyledGrid item xs={4}>
                Travel time
              </StyledGrid>
              <StyledGrid item xs={7}>
                <Typography variant="body2">
                  <b>
                    {isMovingWithStorage(movingService)
                      ? travelTime[0] + "/" + travelTime[0]
                      : travelTime[0] + "/" + travelTime[1]}
                  </b>{" "}
                  min.
                </Typography>
                <ToolTip title="from/to Headquarter">
                  <InformationCircle className={classes.infoIcon} />
                </ToolTip>
              </StyledGrid>
              <StyledGrid item xs={4}>
                Estimated Quote
              </StyledGrid>
              <StyledGrid item xs={7}>
                <Typography variant="body2">
                  <b>
                    ${estimateQuote[0]}
                    {estimateQuote[1] ? " - $" + estimateQuote[1] : null}
                  </b>
                </Typography>
              </StyledGrid>
            </>
          )}
          <Divider style={{ width: "100%", margin: "8px 0px" }} />
          <StyledGrid item xs={12}>
            <Typography variant="caption" color="textSecondary">
              *Please note, the above information provides an estimated quote
              only and is subject to change in case of undisclosed or
              unpredicetd circumstances.
            </Typography>
          </StyledGrid>
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
            <Grid item xs={6} md={6}>
              <Button
                color="primary"
                variant="outlined"
                fullWidth
                onClick={() => handleBack()}
              >
                Back
              </Button>
            </Grid>
            <Grid item xs={6} md={6}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                disableElevation
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
