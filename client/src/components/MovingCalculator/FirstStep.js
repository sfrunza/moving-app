import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import {
  TextField,
  Grid,
  Fade,
  Typography,
  Divider,
  Tooltip,
  Checkbox,
  MenuItem,
  FormControl,
  Select,
  FormHelperText,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Calendar from "src/icons/Calendar";
import LocationMarker from "src/icons/LocationMarker";
import { useSnackbar } from "notistack";
import { useJsApiLoader } from "@react-google-maps/api";
import { useDispatch } from "src/store";
import {
  setDate,
  setOrigin,
  setDestination,
  setTravelTime,
  setTimeBetween,
  setFromZip,
  setToZip,
  setMovingService,
  setCheck,
  setDeliveryDate,
} from "src/slices/booking";
import CalendarWithRates from "../CalendarWithRates";
import InformationCircle from "src/icons/InformationCircle";
import clsx from "clsx";
import TruckFill from "src/icons/TruckFill";
import moment from "moment";
import { jsonCityState } from "./UsCities";
import Clock from "src/icons/Clock";

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

const movingTypeOptions = [
  { key: "6", text: "Moving", value: "Moving" },
  { key: "1", text: "Moving with Storage", value: "Moving with Storage" },
  { key: "2", text: "Loading Help", value: "Loading Help" },
  { key: "3", text: "Unloading Help", value: "Unloading Help" },
  { key: "4", text: "Packing Only", value: "Packing Only" },
  { key: "5", text: "Inside Move", value: "Inside Move" },
];
const timeOptions = [
  // {
  //   text: "Any time",
  //   value: "08:00:00",
  // },
  { text: "Morning", value: "08:00:00" },
  { text: "Noon", value: "12:00:00" },
  { text: "Afternoon", value: "15:00:00" },
];

const movingTypeOptionsSelect = () => {
  let moveType = movingTypeOptions.map((item) => {
    return (
      <MenuItem key={item.key} value={item.value}>
        {item.text}
      </MenuItem>
    );
  });
  return moveType;
};

const timeOptionsSelect = () => {
  let moveSize = timeOptions.map((item, index) => {
    return (
      <MenuItem key={index} value={item.value} disabled={item.value === ""}>
        {item.text}
      </MenuItem>
    );
  });
  return moveSize;
};

const findCity = (zip) => {
  let cityObject = jsonCityState.find((o) => {
    return o.z === zip;
  });
  if (cityObject === undefined) {
    return null;
  }
  return cityObject;
};

const onlyNumbers = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
};

const validate = (values) => {
  const errors = {};

  if (!values.date) {
    errors.date = "Required";
  }

  if (values.movingService === "Moving with Storage") {
    if (!values.deliveryDate) {
      errors.deliveryDate = "Required";
    }
  }

  if (values.fromZip === "") {
    errors.fromZip = "Required";
  } else if (values.fromZip.length < 5 || findCity(values.fromZip) === null) {
    errors.fromZip = "Invalid Zip";
  }

  if (
    values.movingService === "Moving" ||
    values.movingService === "Moving with Storage"
  ) {
    if (values.toZip === "") {
      errors.toZip = "Required";
    } else if (values.toZip.length < 5 || findCity(values.toZip) === null) {
      errors.toZip = "Invalid Zip";
    }
  }

  // if (values.check && !values.movingService) {
  //   errors.movingService = "Required";
  // }

  return errors;
};

const FirstStep = ({ handleNext, initial }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyADEDKabHN5FBcOroOU1W7BzUam0Az8gGQ",
  });
  const [isLocationError, setIsLocationError] = useState(false);
  const [isApiLoaded, setIsApiLoaded] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoaded) {
      setIsApiLoaded(true);
    }

    return () => {
      setIsApiLoaded(false);
    };
  }, [isLoaded]);

  // initiate formik
  const formik = useFormik({
    initialValues: initial,
    validateOnMount: true,
    enableReinitialize: false,
    validate: (values) => validate(values),
    onSubmit: (values) => {
      if (
        values.movingService === "Moving" ||
        values.movingService === "Moving with Storage"
      ) {
        dispatch(setToZip(values.toZip));
      } else {
        dispatch(setToZip(""));
        dispatch(setDestination(""));
      }
      dispatch(setDate(values.date));
      dispatch(setDeliveryDate(values.deliveryDate));
      dispatch(setFromZip(values.fromZip));
      // dispatch(setToZip(values.toZip));
      dispatch(setCheck(values.check));
      dispatch(setMovingService(values.movingService));

      if (!isLocationError) {
        handleNext();
      }
    },
  });

  // formik.values.fromZip.isValid();

  const handleZipBlur = (e, loc) => {
    let zip = e.target.value;
    const cityObject = findCity(zip);
    if (!cityObject) {
      // enqueueSnackbar("Invalid Zipcode", {
      //   anchorOrigin: {
      //     horizontal: "right",
      //     vertical: "top",
      //   },
      //   variant: "error",
      // });
    }
    if (cityObject) {
      const city = cityObject.c;
      const state = cityObject.s;
      enqueueSnackbar(`Moving ${loc} ${city}, ${state}, ${zip}`, {
        anchorOrigin: {
          horizontal: "right",
          vertical: "top",
        },
        variant: "info",
      });
      if (loc === "from") {
        dispatch(setOrigin(city + ", " + state));
      } else if (loc === "to") {
        dispatch(setDestination(city + ", " + state));
      }
      // if (isApiLoaded) {
      //   setTimeout(function () {
      //     findTravelTime();
      //   }, 500);
      // }
    }
  };

  function isEmptyString(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "") return false;
    }
    return true;
  }

  const findTravelTime = () => {
    const isReadyToCalculate =
      !formik.touched.fromZip &&
      !Boolean(formik.errors.fromZip) &&
      !formik.touched.toZip &&
      !Boolean(formik.errors.toZip);
    if (!isReadyToCalculate) {
      return;
    }
    let office = "02026";
    let fromZip = formik.values.fromZip;
    let toZip = formik.values.toZip;
    let originsArray = [];
    let destinationsArray = [];

    if (toZip === "") {
      originsArray = [office + "USA"];
      destinationsArray = [fromZip + "USA"];
    } else {
      originsArray = [office + "USA", fromZip + "USA"];
      destinationsArray = [fromZip + "USA", toZip + "USA"];
    }

    const TravelTime = new window.google.maps.DistanceMatrixService();
    TravelTime.getDistanceMatrix(
      {
        origins: originsArray,
        destinations: destinationsArray,
        travelMode: "DRIVING",
        unitSystem: window.google.maps.UnitSystem.IMPERIAL,
        avoidHighways: false,
        avoidTolls: false,
      },
      function (response, status) {
        if (status !== "OK") {
          console.log("Error was:", status);
        } else {
          console.log(response);
          let fromHq = 0;
          let toHq = 0;
          let timeBetween = 0;
          let distanceBetween = "";

          if (
            toZip === "" &&
            isEmptyString(response.destinationAddresses) &&
            response.rows[0].elements[0].status !== "ZERO_RESULTS"
          ) {
            fromHq = getMinutes(response.rows[0].elements[0].duration.value);
            distanceBetween = response.rows[0].elements[0].distance.text;

            console.log("from HQ", fromHq);
            console.log("Distance BETWEEN", getMiles(distanceBetween));
            console.log("------------------");
            if (fromHq < 20) fromHq = 20;
            if (toHq < 20) toHq = 20;
            dispatch(setTravelTime([fromHq, fromHq]));
            dispatch(setTimeBetween(0));
            setIsLocationError(false);
          } else if (
            isEmptyString(response.originAddresses) &&
            isEmptyString(response.destinationAddresses) &&
            response.rows[0].elements[0].status !== "ZERO_RESULTS" &&
            response.rows[0].elements[1].status !== "ZERO_RESULTS" &&
            response.rows[1].elements[1].status !== "ZERO_RESULTS" &&
            response.rows[1].elements[0].status !== "ZERO_RESULTS"
          ) {
            fromHq = getMinutes(response.rows[0].elements[0].duration.value);
            toHq = getMinutes(response.rows[0].elements[1].duration.value);
            timeBetween = getMinutes(
              response.rows[1].elements[1].duration.value
            );
            distanceBetween = response.rows[1].elements[1].distance.text;

            console.log("from HQ", fromHq);
            console.log("to HQ", toHq);
            console.log("Time BETWEEN", timeBetween);
            console.log("Distance BETWEEN", getMiles(distanceBetween));
            console.log("------------------");
            if (fromHq < 20) fromHq = 20;
            if (toHq < 20) toHq = 20;
            dispatch(setTravelTime([fromHq, toHq]));
            dispatch(setTimeBetween(timeBetween));
            setIsLocationError(false);
          } else {
            setIsLocationError(true);
            alert("Not in Service Area, Plese try Different Zip Code");
          }
        }
      }
    );
  };

  const getMiles = (i) => {
    // return Math.floor(i * 0.000621);
    return parseFloat(i.split(" m")[0]);
  };

  const getMinutes = (i) => {
    return Math.ceil(i / 60 / 5) * 5;
    // return parseInt(i / 60);
  };

  const hideToZip = (movingService) => {
    if (movingService === "Moving" || movingService === "Moving with Storage") {
      return true;
    } else {
      return false;
    }
  };

  const rateInfoToolbar = () => {
    return (
      <>
        <Grid container justifyContent="space-evenly">
          <Grid item xs={3} md={3} classes={{ item: classes.gridItem }}>
            <Tooltip
              title={
                "2 Men & Truck: $120/h, 3 Men & Truck: $140/h, 4 Men & Truck: $160/h"
              }
              classes={{ tooltip: classes.customWidth }}
              placement="top"
            >
              <Typography
                variant="caption"
                className={clsx(classes.infoItem, classes.regular)}
              >
                Regular
                <InformationCircle
                  className={clsx(classes.infoIcon, classes.regular)}
                />
              </Typography>
            </Tooltip>
          </Grid>
          <Grid item xs={3} md={3} classes={{ item: classes.gridItem }}>
            <Tooltip
              title={
                "2 Men & Truck: $160/h, 3 Men & Truck: $180/h, 4 Men & Truck: $200/h"
              }
              classes={{ tooltip: classes.customWidth }}
              placement="top"
            >
              <Typography
                variant="caption"
                className={clsx(classes.infoItem, classes.subPeak)}
              >
                SubPeak
                <InformationCircle
                  className={clsx(classes.infoIcon, classes.subPeak)}
                />
              </Typography>
            </Tooltip>
          </Grid>
          <Grid item xs={3} md={3} classes={{ item: classes.gridItem }}>
            <Tooltip
              title={
                "2 Men & Truck: $200/h, 3 Men & Truck: $220/h, 4 Men & Truck: $240/h"
              }
              classes={{ tooltip: classes.customWidth }}
              placement="top"
            >
              <Typography
                variant="caption"
                className={clsx(classes.infoItem, classes.peak)}
              >
                Peak
                <InformationCircle
                  className={clsx(classes.infoIcon, classes.peak)}
                />
              </Typography>
            </Tooltip>
          </Grid>
        </Grid>
        <Divider style={{ width: "100%", marginBottom: 20 }} />
      </>
    );
  };

  // console.log(isLocationError);

  return (
    <Fade in={true} mountOnEnter unmountOnExit>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <label htmlFor="date" className={classes.label}>
              <Calendar className={classes.icon} />
              Move Date
            </label>
            <CalendarWithRates
              variant="dialog"
              inputVariant="outlined"
              id="date"
              name="date"
              format="MMMM DD, YYYY"
              size="small"
              ToolbarComponent={rateInfoToolbar}
              okLabel={null}
              cancelLabel={null}
              autoOk
              maxDate={new Date().setMonth(new Date().getMonth() + 3)}
              disablePast
              fullWidth
              value={formik.values.date}
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && formik.errors.date}
              onChange={(date) => {
                formik.setFieldValue(
                  "date",
                  moment(date).format(`YYYY-MM-DDT${formik.values.time}`)
                );
              }}
            />
          </Grid>
          <Grid item xs={5}>
            <label htmlFor="time" className={classes.label}>
              <Clock className={classes.icon} />
              Time
            </label>
            <FormControl
              variant="outlined"
              size="small"
              placeholder="Select"
              fullWidth
            >
              <Select
                id="time"
                variant="outlined"
                placeholder="Select"
                name="time"
                size="small"
                displayEmpty
                value={formik.values.time}
                onChange={(e) => {
                  formik.setFieldValue("time", e.target.value);
                  formik.setFieldValue(
                    "date",
                    moment(formik.values.date).format(
                      `YYYY-MM-DDT${e.target.value}`
                    )
                  );
                }}
              >
                {timeOptionsSelect()}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={6}>
            <label htmlFor="fromZip" className={classes.label}>
              <LocationMarker className={classes.icon} />
              From Zip
            </label>
            <TextField
              fullWidth
              id="fromZip"
              name="fromZip"
              variant="outlined"
              size="small"
              placeholder="ZIP Code"
              onInput={(e) => onlyNumbers(e)}
              inputProps={{
                maxLength: 5,
                inputMode: "numeric",
              }}
              value={formik.values.fromZip}
              onBlur={(e) => {
                handleZipBlur(e, "from");
              }}
              onChange={(e) => {
                formik.handleChange(e);
              }}
              error={formik.touched.fromZip && Boolean(formik.errors.fromZip)}
              helperText={formik.touched.fromZip && formik.errors.fromZip}
            />
          </Grid>
          {hideToZip(formik.values.movingService) && (
            <Grid item xs={6} md={6}>
              <label htmlFor="toZip" className={classes.label}>
                <LocationMarker className={classes.icon} />
                To Zip
              </label>
              <TextField
                fullWidth
                id="toZip"
                name="toZip"
                variant="outlined"
                size="small"
                placeholder="ZIP Code"
                onInput={(e) => onlyNumbers(e)}
                inputProps={{
                  maxLength: 5,
                  inputMode: "numeric",
                }}
                value={formik.values.toZip}
                onBlur={(e) => {
                  handleZipBlur(e, "to");
                }}
                onChange={(e) => {
                  formik.handleChange(e);
                  // handleFromZipChange(e);
                }}
                error={formik.touched.toZip && Boolean(formik.errors.toZip)}
                helperText={formik.touched.toZip && formik.errors.toZip}
              />
            </Grid>
          )}
          {!formik.values.check && (
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <Checkbox
                  name="check"
                  checked={formik.values.check}
                  onChange={() => {
                    formik.setFieldValue("check", !formik.values.check);
                  }}
                  inputProps={{ "aria-label": "checkbox" }}
                  color="primary"
                />
                <Typography variant="body2">
                  - Need storage or labor help only?
                </Typography>
              </Box>
            </Grid>
          )}
          {formik.values.check && (
            <Grid item xs={12}>
              <label htmlFor="movingService" className={classes.label}>
                <TruckFill className={classes.icon} />
                Service
              </label>
              <FormControl
                variant="outlined"
                size="small"
                placeholder="Select"
                fullWidth
                error={
                  formik.touched.movingService &&
                  Boolean(formik.errors.movingService)
                }
              >
                <Select
                  id="movingService"
                  variant="outlined"
                  name="movingService"
                  size="small"
                  value={formik.values.movingService}
                  onChange={(e) => {
                    formik.setFieldValue("movingService", e.target.value);
                    // if (
                    //   e.target.value !== "Moving" ||
                    //   e.target.value !== "Moving with Storagr"
                    // ) {
                    //   formik.setFieldValue("toZip", "");
                    //   dispatch(setDestination(""));
                    // }
                  }}
                  error={
                    formik.touched.movingService &&
                    Boolean(formik.errors.movingService)
                  }
                >
                  {movingTypeOptionsSelect()}
                </Select>
                {formik.touched.movingService &&
                Boolean(formik.errors.movingService) ? (
                  <FormHelperText>{formik.errors.movingService}</FormHelperText>
                ) : null}
              </FormControl>
            </Grid>
          )}
          {formik.values.movingService === "Moving with Storage" ? (
            <Grid item xs={12}>
              <label htmlFor="deliveryDate" className={classes.label}>
                <Calendar className={classes.icon} />
                Delivery Date
              </label>
              <CalendarWithRates
                variant="dialog"
                inputVariant="outlined"
                id="deliveryDate"
                name="deliveryDate"
                format="MMMM DD, YYYY"
                size="small"
                // disableToolbar
                ToolbarComponent={rateInfoToolbar}
                okLabel={null}
                cancelLabel={null}
                autoOk
                maxDate={new Date().setMonth(new Date().getMonth() + 6)}
                disablePast
                fullWidth
                value={formik.values.deliveryDate}
                error={
                  formik.touched.deliveryDate &&
                  Boolean(formik.errors.deliveryDate)
                }
                helperText={
                  formik.touched.deliveryDate && formik.errors.deliveryDate
                }
                onChange={(date) => {
                  // formik.handleChange("date", date);
                  formik.setFieldValue("deliveryDate", date.format());
                }}
              />
            </Grid>
          ) : null}
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
              Continue
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fade>
  );
};

export default FirstStep;
