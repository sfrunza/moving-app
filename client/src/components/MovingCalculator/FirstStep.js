import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import {
  TextField,
  Grid,
  Fade,
  Typography,
  Divider,
  Checkbox,
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
  setDistance,
} from "src/slices/booking";
import CalendarWithRates from "../CalendarWithRates";
import InformationCircle from "src/icons/InformationCircle";
import clsx from "clsx";
import TruckFill from "src/icons/TruckFill";
import { jsonCityState } from "./UsCities";
import Clock from "src/icons/Clock";
import { setIsFlatRate } from "../../slices/booking";
import ToolTip from "../ToolTip";
import moment from "moment";

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
    // padding: "0px 3px",
    borderRadius: 6,
    minWidth: 92,
    fontWeight: "bold",
    "&:hover": {
      cursor: "pointer",
    },
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
    maxWidth: 190,
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
      <option key={item.key} value={item.value}>
        {item.text}
      </option>
    );
  });
  return moveType;
};

const timeOptionsSelect = () => {
  let moveSize = timeOptions.map((item, index) => {
    return (
      <option key={index} value={item.value} disabled={item.value === ""}>
        {item.text}
      </option>
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
  const [travelTimeCalculated, setTravelTimeCalculated] = useState(false);

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
      setTravelTimeCalculated(true);

      if (!isLocationError && isApiLoaded) {
        setTimeout(function () {
          findTravelTime();
          if (!travelTimeCalculated) {
            handleNext();
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
          }
        }, 500);
      }
    },
  });

  const handleZipBlur = (e, loc) => {
    let zip = "";
    if (e === null) {
      zip = "";
    } else {
      zip = e.target.value;
    }
    // let zip = e.target.value;
    const cityObject = findCity(zip);

    // console.log(cityObject);
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
    }
  };

  function isEmptyString(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "") return false;
    }
    return true;
  }

  const findTravelTime = () => {
    let office = "02026";
    let fromZip = formik.values.fromZip;
    let toZip = formik.values.toZip;
    let originsArray = [];
    let destinationsArray = [];

    if (toZip === "") {
      originsArray = [office + "USA"];
      destinationsArray = [fromZip + "USA"];
    } else {
      originsArray = [office, fromZip];
      destinationsArray = [fromZip, toZip];
    }

    const TravelTime = new window.google.maps.DistanceMatrixService();
    TravelTime.getDistanceMatrix(
      {
        origins: originsArray,
        destinations: destinationsArray,
        travelMode: "DRIVING",
        unitSystem: window.google.maps.UnitSystem.IMPERIAL,
        region: "US",
        avoidHighways: false,
        avoidTolls: false,
      },
      function (response, status) {
        if (status !== "OK") {
          console.log("Error was:", status);
        } else {
          // console.log(response);
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

            // console.log("from HQ", fromHq);
            // console.log("Distance BETWEEN", getMiles(distanceBetween));
            // dispatch(setDistance(getMiles(distanceBetween)));
            // console.log("------------------");
            if (fromHq < 20) fromHq = 20;
            if (toHq < 20) toHq = 20;
            dispatch(setTravelTime([fromHq, fromHq]));
            dispatch(setTimeBetween(0));
            setIsLocationError(false);
            if (getMiles(distanceBetween) > 180) {
              dispatch(setIsFlatRate(true));
            } else {
              dispatch(setIsFlatRate(false));
            }
            setTravelTimeCalculated(false);
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

            // console.log("from HQ", fromHq);
            // console.log("to HQ", toHq);
            // console.log("Time BETWEEN", timeBetween);
            // console.log("Distance BETWEEN", getMiles(distanceBetween));
            dispatch(setDistance(getMiles(distanceBetween)));

            // console.log("------------------");
            if (fromHq < 20) fromHq = 20;
            if (toHq < 20) toHq = 20;
            dispatch(setTravelTime([fromHq, toHq]));
            dispatch(setTimeBetween(timeBetween));
            setIsLocationError(false);
            if (getMiles(distanceBetween) > 180) {
              dispatch(setIsFlatRate(true));
            } else {
              dispatch(setIsFlatRate(false));
            }
            setTravelTimeCalculated(false);
          } else {
            setIsLocationError(true);
            setTravelTimeCalculated(false);
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
    return Math.round(i / 60 / 5) * 5;
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
            <ToolTip
              title={
                "2 Men & Truck: $120/h, 3 Men & Truck: $160/h, 4 Men & Truck: $200/h"
              }
              classes={{ tooltip: classes.customWidth }}
              placement="top"
            >
              <Typography
                variant="body2"
                className={clsx(classes.infoItem, classes.regular)}
              >
                Regular
                <InformationCircle
                  className={clsx(classes.infoIcon, classes.regular)}
                />
              </Typography>
            </ToolTip>
          </Grid>
          <Grid item xs={3} md={3} classes={{ item: classes.gridItem }}>
            <ToolTip
              title={
                "2 Men & Truck: $140/h, 3 Men & Truck: $180/h, 4 Men & Truck: $220/h"
              }
              classes={{ tooltip: classes.customWidth }}
              placement="top"
            >
              <Typography
                variant="body2"
                className={clsx(classes.infoItem, classes.subPeak)}
              >
                SubPeak
                <InformationCircle
                  className={clsx(classes.infoIcon, classes.subPeak)}
                />
              </Typography>
            </ToolTip>
          </Grid>
          <Grid item xs={3} md={3} classes={{ item: classes.gridItem }}>
            <ToolTip
              title={
                "2 Men & Truck: $160/h, 3 Men & Truck: $200/h, 4 Men & Truck: $240/h"
              }
              classes={{ tooltip: classes.customWidth }}
              placement="top"
            >
              <Typography
                variant="body2"
                className={clsx(classes.infoItem, classes.peak)}
              >
                Peak
                <InformationCircle
                  className={clsx(classes.infoIcon, classes.peak)}
                />
              </Typography>
            </ToolTip>
          </Grid>
        </Grid>
        <Divider style={{ width: "100%", marginBottom: 20 }} />
      </>
    );
  };

  // console.log("toZip:::>>>>>>>>", formik.values);

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
              // onClick={() => dispatch(getRates())}
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
              SelectProps={{ native: true }}
              maxDate={new Date().setMonth(new Date().getMonth() + 3)}
              disablePast
              fullWidth
              value={formik.values.date}
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && formik.errors.date}
              onChange={(date) => {
                formik.setFieldValue(
                  "date",
                  date.format("YYYY-MM-DDT08:00:00")
                );
              }}
            />
          </Grid>
          <Grid item xs={5}>
            <label htmlFor="time" className={classes.label}>
              <Clock className={classes.icon} />
              Time
            </label>
            <TextField
              fullWidth
              id="time"
              name="time"
              onChange={(e) => {
                formik.setFieldValue("time", e.target.value);
                formik.setFieldValue(
                  "date",
                  moment(formik.values.date, "YYYY-MM-DDThh:mm:ss").format(
                    `YYYY-MM-DDT${e.target.value}`
                  )
                );
              }}
              select
              // eslint-disable-next-line react/jsx-sort-props
              SelectProps={{ native: true }}
              value={formik.values.time}
              variant="outlined"
              size="small"
            >
              {timeOptionsSelect()}
            </TextField>
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
              <TextField
                fullWidth
                id="movingService"
                name="movingService"
                onChange={(e) => {
                  formik.setFieldValue("movingService", e.target.value);
                }}
                onBlur={(e) => {
                  if (
                    e.target.value === "Inside Move" ||
                    e.target.value === "Loading Help" ||
                    e.target.value === "Unloading Help" ||
                    e.target.value === "Packing Only"
                  ) {
                    formik.setFieldValue("toZip", "");
                    dispatch(setDistance(null));
                    dispatch(setDestination(""));
                  }
                }}
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={formik.values.movingService}
                variant="outlined"
                size="small"
              >
                {movingTypeOptionsSelect()}
              </TextField>
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
                  formik.setFieldValue(
                    "deliveryDate",
                    date.format("YYYY-MM-DDT08:00:00")
                  );
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
              disabled={travelTimeCalculated}
            >
              {travelTimeCalculated ? "Loading..." : "Continue"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fade>
  );
};

export default FirstStep;
