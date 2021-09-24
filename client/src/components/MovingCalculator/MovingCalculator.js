import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Button,
  TextField,
  FormControl,
  Select,
  InputLabel,
  FormHelperText,
  MenuItem,
  useMediaQuery,
} from "@material-ui/core";
import validate from "validate.js";
// import { DatePicker } from "@material-ui/pickers";
// import Result from './Result'
// import ResultNew from "./ResultNew";
// import {SingleDatePicker} from 'react-dates';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  inputRoot: {
    "& input": {
      [theme.breakpoints.down("xs")]: {
        paddingLeft: "6px",
        paddingRight: "2px",
      },
    },
  },
  selectedDateCSS: {
    colo: "red",
    backgroundColor: "pink",
  },
}));

const schema = {
  movingSize: {
    presence: { allowEmpty: false, message: "is required" },
  },
  typeFrom: {
    presence: { allowEmpty: false, message: "is required" },
  },
  typeTo: {
    presence: { allowEmpty: false, message: "is required" },
  },
  origin: {
    presence: { allowEmpty: false, message: "is required" },
  },
  destination: {
    presence: { allowEmpty: false, message: "is required" },
  },
  startDate: {
    presence: { allowEmpty: false, message: "is required" },
  },
};

const movingSizeOptions = [
  {
    key: "room",
    text: "One Room or less (<1000 lbs)",
    value: "Room or less (partial move)",
  },
  { key: "studio", text: "Studio Apt.", value: "Studio apartment" },
  { key: "onebed", text: "1 Bedroom Apt.", value: "1 Bedroom apartment" },
  { key: "twobed", text: "2 Bedroom Apt.", value: "2 Bedroom apartment" },
  { key: "threebed", text: "3+ Bedroom Apt.", value: "3+ Bedroom apartment" },
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
    text: "Office / Commercial Moving",
    value: "Office / Commercial space",
  },
];

const houseTypeOptions = [
  { key: "elv", text: "Elevator Bldg.", value: "elevator building" },
  {
    key: "grfloor",
    text: "No Stairs - Ground Floor",
    value: "1st/Ground floor",
  },
  { key: "2floor", text: "Stairs - 2nd Floor", value: "2nd floor" },
  { key: "3floor", text: "Stairs - 3rd Floor", value: "3rd floor" },
  { key: "4floor", text: "Stairs - 4th Floor", value: "4th floor" },
  {
    key: "5floor",
    text: "Stairs 5th or Higher - N/A",
    value: "Stairs 5th or Higher - N/A",
    disabled: true,
  },
  { key: "private", text: "Private House", value: "private house" },
  { key: "storage", text: "Storage Unit", value: "storage unit" },
];

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const movingSizeOptionsSelect = () => {
  let moveSize = movingSizeOptions.map((item, index) => {
    return (
      <MenuItem key={index} value={item.value}>
        {item.text}
      </MenuItem>
    );
  });
  return moveSize;
};

const houseTypeOptionsSelect = () => {
  let houseType = houseTypeOptions.map((item, index) => {
    if (item.value === "Stairs 5th or Higher - N/A") {
      return (
        <MenuItem key={index} value={item.value} disabled>
          {item.text}
        </MenuItem>
      );
    } else {
      return (
        <MenuItem key={index} value={item.value}>
          {item.text}
        </MenuItem>
      );
    }
  });
  return houseType;
};

const MovingCalculator = ({ onClose }) => {
  const classes = useStyles();
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const onlyNumbers = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  React.useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const renderDay = (day) => {
    let busy = ["Saturday", "Sunday"];
    let exists = busy.includes(day.format("dddd"));
    return (
      <div
        style={{
          backgroundColor: exists ? "#ff000047" : "#00af2e47",
          height: "100%",
          display: "flex",
        }}
      >
        <span>{day.format("D")}</span>
      </div>
    );
  };

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

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  // <Result
  //   origin='96 Bussey st, Dedham, MA'
  //   destination='2 Saint Paul st, Brookline, MA'
  //   movingsize='1 Bedroom apartment'
  //   typefrom='2nd floor'
  //   typeto='elevator building'
  //   onClose={onClose}
  // />

  // <SingleDatePicker
  //   date={formState.values.startDate}
  //   placeholder="Move Date *"
  //   onDateChange={date =>
  //     setFormState(formState => ({
  //       ...formState,
  //       values: {
  //         ...formState.values,
  //         startDate: date !== null ? moment(date) : ''
  //       }
  //     }))}
  //   onFocusChange={({focused}) => setFocused(focused)}
  //   focused={focused}
  //   id="your_unique_id"
  //   renderDayContents={renderDay}
  //   orientation={isMd ? 'horizontal' : 'vertical'}
  //   transitionDuration={0}
  // />

  if (submitted) {
    return (
      //   <ResultNew
      //     movingSize={formState.values.movingSize}
      //     typeFrom={formState.values.typeFrom}
      //     typeTo={formState.values.typeTo}
      //     origin={formState.values.origin}
      //     destination={formState.values.destination}
      //     onClose={onClose}
      //   />
      <h1>Submitted</h1>
    );
  } else {
    return (
      <div className={classes.root}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <Grid container spacing={2}>
            {/* 
            <Grid item xs>
              <DatePicker
                variant="inline"
                inputVariant="outlined"
                format="MM/DD/YYYY"
                disableToolbar
                autoOk
                maxDate={new Date().setMonth(new Date().getMonth() + 3)}
                disablePast
                className={classes.datePick}
                style={{ width: "100%" }}
                label="Move Date *"
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                  },
                }}
                InputProps={{ classes: { root: classes.inputRoot } }}
                value={formState.values.startDate || null}
                onChange={(date) =>
                  setFormState((formState) => ({
                    ...formState,
                    values: {
                      ...formState.values,
                      startDate: date !== null ? date.format() : "",
                    },
                  }))
                }
              />
            </Grid> */}
            <Grid item xs>
              <TextField
                style={{ width: "100%" }}
                value={formState.values.origin || ""}
                inputProps={{
                  maxLength: 5,
                  inputMode: "numeric",
                }}
                onInput={(e) => onlyNumbers(e)}
                placeholder="12345"
                label="From Zip *"
                variant="outlined"
                name="origin"
                size="small"
                // helperText={hasError('origin') ? formState.errors.origin[0] : null}
                // error={hasError('origin')}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs>
              <TextField
                style={{ width: "100%" }}
                value={formState.values.origin || ""}
                inputProps={{
                  maxLength: 5,
                  inputMode: "numeric",
                }}
                onInput={(e) => onlyNumbers(e)}
                placeholder="12345"
                label="From Zip *"
                variant="outlined"
                name="origin"
                size="small"
                // helperText={hasError('origin') ? formState.errors.origin[0] : null}
                // error={hasError('origin')}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs>
              <TextField
                style={{ width: "100%" }}
                size="small"
                value={formState.values.destination || ""}
                inputProps={{
                  maxLength: 5,
                  inputMode: "numeric",
                }}
                onInput={(e) => onlyNumbers(e)}
                placeholder="12345"
                label="To Zip *"
                variant="outlined"
                name="destination"
                // helperText={hasError('destination') ? formState.errors.destination[0] : null}
                // error={hasError('destination')}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl
                variant="outlined"
                style={{ width: "100%" }}
                error={hasError("movingSize")}
                size="small"
              >
                <InputLabel id="movingSize-label">Size of Move *</InputLabel>
                <Select
                  labelId="movingSize-label"
                  id="movingSize"
                  defaultValue=""
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  label="Size of Move *"
                  variant="outlined"
                  name="movingSize"
                  value={formState.values.movingSize || ""}
                  onChange={handleChange}
                >
                  {movingSizeOptionsSelect()}
                </Select>
                {hasError("movingSize") ? (
                  <FormHelperText>Moving Size is required</FormHelperText>
                ) : null}
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl
                variant="outlined"
                style={{ width: "100%" }}
                error={hasError("typeFrom")}
                size="small"
              >
                <InputLabel id="typeTo">Choose From *</InputLabel>
                <Select
                  labelId="typeTo"
                  defaultValue=""
                  variant="outlined"
                  label="Choose From *"
                  name="typeFrom"
                  value={formState.values.typeFrom || ""}
                  onChange={handleChange}
                >
                  {houseTypeOptionsSelect()}
                </Select>
                {hasError("typeFrom") ? (
                  <FormHelperText>This field is required</FormHelperText>
                ) : null}
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl
                variant="outlined"
                style={{ width: "100%" }}
                error={hasError("typeTo")}
                size="small"
              >
                <InputLabel id="typeTo">Choose To *</InputLabel>
                <Select
                  labelId="typeTo"
                  defaultValue=""
                  variant="outlined"
                  label="Choose To *"
                  name="typeTo"
                  value={formState.values.typeTo || ""}
                  onChange={handleChange}
                >
                  {houseTypeOptionsSelect()}
                </Select>
                {hasError("typeTo") ? (
                  <FormHelperText>This field is required</FormHelperText>
                ) : null}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle2" gutterBottom>
                Fields that are marked with * sign are required.
              </Typography>
              <Button
                size="large"
                variant="contained"
                type="submit"
                color="secondary"
                disabled={!formState.isValid}
              >
                Calculate
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
};

export default MovingCalculator;
