import React from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import { Grid, Fade, FormHelperText, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Home from "src/icons/Home";
import StairsUp from "src/icons/StairsUp";
import { useDispatch, useSelector } from "src/store";
import {
  setMovingSize,
  setFromHouseType,
  setToHouseType,
} from "src/slices/booking";

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
  button: {
    padding: 10,
    minWidth: theme.spacing(6),
    [theme.breakpoints.down("xs")]: {
      padding: 8,
      minWidth: theme.spacing(5),
    },
  },
  helperText: {
    color: theme.palette.error.main,
    marginLeft: 14,
  },
}));

const movingSizeOptions = [
  {
    key: "moveSize",
    text: "Please select...",
    value: "",
  },
  {
    key: "room",
    text: "One Room or less (<1000 lbs)",
    value: "Room or less (partial move)",
  },
  { key: "studio", text: "Studio apartment", value: "Studio apartment" },
  { key: "onebed", text: "1 Bedroom apartment", value: "1 Bedroom apartment" },
  { key: "twobed", text: "2 Bedroom apartment", value: "2 Bedroom apartment" },
  {
    key: "threebed",
    text: "3+ Bedroom apartment",
    value: "3+ Bedroom apartment",
  },
  {
    key: "twohouse",
    text: "2 Bedroom House/Townhouse",
    value: "2 Bedroom House/Townhouse",
  },
  {
    key: "threehouse",
    text: "3 Bedroom House/Townhouse",
    value: "3 Bedroom House/Townhouse",
  },
  {
    key: "fourhouse",
    text: "4+ Bedroom House/Townhouse",
    value: "4+ Bedroom House/Townhouse",
  },
  {
    key: "commercial",
    text: "Office / Commercial space",
    value: "Office / Commercial space",
  },
];

const houseTypeOptions = [
  {
    key: "grfloor",
    text: "1st/Ground floor",
    value: "1",
  },
  { key: "2floor", text: "2nd floor", value: "2" },
  { key: "3floor", text: "3rd floor", value: "3" },
  { key: "4floor", text: "4th floor", value: "4" },
  { key: "elv", text: "elevator building", value: "Elevator" },
  { key: "private", text: "private house", value: "House" },
];

const movingSizeOptionsSelect = () => {
  let moveSize = movingSizeOptions.map((item, index) => {
    return (
      // <MenuItem key={index} value={item.value} disabled={item.value === ""}>
      //   {item.text}
      // </MenuItem>
      <option key={index} value={item.value} disabled={item.value === ""}>
        {item.text}
      </option>
    );
  });
  return moveSize;
};

const validate = (values, movingService) => {
  const errors = {};

  if (!values.movingSize) {
    errors.movingSize = "Required";
  }

  if (movingService !== "Unloading Help") {
    if (!values.fromHouseType) {
      errors.fromHouseType = "Required";
    }
  }

  if (
    movingService === "Moving" ||
    movingService === "Moving with Storage" ||
    movingService === "Unloading Help"
  ) {
    if (!values.toHouseType) {
      errors.toHouseType = "Required";
    }
  }

  return errors;
};

const CustomButton = ({ selected, text, ...rest }) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color={selected ? "primary" : "default"}
      disableElevation
      size="small"
      classes={{ root: classes.button }}
      {...rest}
    >
      {text}
    </Button>
  );
};

const SecondStep = ({ handleNext, handleBack, initial }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { movingService } = useSelector((state) => state.booking);

  // initiate formik
  const formik = useFormik({
    initialValues: initial,
    validate: (values) => validate(values, movingService),
    onSubmit: (values) => {
      dispatch(setMovingSize(values.movingSize));
      dispatch(setFromHouseType(values.fromHouseType));
      dispatch(setToHouseType(values.toHouseType));
      handleNext();
    },
  });

  const hideOption = (movingService, type) => {
    let toReturn = true;
    if (type === "to" && movingService === "Unloading Help") {
      toReturn = false;
    }

    if (type === "from") {
      if (
        movingService === "Loading Help" ||
        movingService === "Packing Only" ||
        movingService === "Inside Move"
      ) {
        toReturn = false;
      }
    }
    return toReturn;
  };

  return (
    <Fade in={true} mountOnEnter unmountOnExit>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <label htmlFor="movingSize" className={classes.label}>
              <Home className={classes.icon} />
              Move Size
            </label>
            <TextField
              fullWidth
              id="movingSize"
              name="movingSize"
              onChange={(e) => {
                formik.setFieldValue("movingSize", e.target.value);
              }}
              error={
                formik.touched.movingSize && Boolean(formik.errors.movingSize)
              }
              helperText={
                formik.touched.movingSize &&
                Boolean(formik.errors.movingSize) &&
                formik.errors.movingSize
              }
              select
              placeholder="Please select..."
              SelectProps={{ native: true }}
              value={formik.values.movingSize}
              variant="outlined"
              size="small"
            >
              {movingSizeOptionsSelect()}
            </TextField>
          </Grid>
          {hideOption(movingService, "to") && (
            <Grid item xs={12}>
              <label htmlFor="fromHouseType" className={classes.label}>
                <StairsUp className={classes.icon} />
                Entrance (from)
              </label>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {houseTypeOptions.map((item, index) => {
                  return (
                    <CustomButton
                      key={index}
                      value={item.text}
                      onClick={() => {
                        formik.setFieldValue("fromHouseType", item.text);
                      }}
                      selected={
                        item.text === formik.values.fromHouseType ? true : false
                      }
                      text={item.value}
                    />
                  );
                })}
              </div>
              {formik.touched.fromHouseType &&
              Boolean(formik.errors.fromHouseType) ? (
                <FormHelperText classes={{ root: classes.helperText }}>
                  {formik.errors.fromHouseType}
                </FormHelperText>
              ) : null}
            </Grid>
          )}
          {hideOption(movingService, "from") && (
            <Grid item xs={12}>
              <label htmlFor="toHouseType" className={classes.label}>
                <StairsUp className={classes.icon} />
                Entrance (to)
              </label>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {houseTypeOptions.map((item, index) => {
                  return (
                    <CustomButton
                      key={index}
                      value={item.text}
                      onClick={() => {
                        formik.setFieldValue("toHouseType", item.text);
                      }}
                      selected={
                        item.text === formik.values.toHouseType ? true : false
                      }
                      text={item.value}
                    />
                  );
                })}
              </div>
              {formik.touched.toHouseType &&
              Boolean(formik.errors.toHouseType) ? (
                <FormHelperText classes={{ root: classes.helperText }}>
                  {formik.errors.toHouseType}
                </FormHelperText>
              ) : null}
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
              onClick={() => {
                // dispatch(setMovingSize(""));
                dispatch(setFromHouseType(""));
                dispatch(setToHouseType(""));
                handleBack();
              }}
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
            >
              Get Quote
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fade>
  );
};

export default SecondStep;
