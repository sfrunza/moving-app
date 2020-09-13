import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
} from '@material-ui/core';
import validate from 'validate.js';
import { DatePicker } from "@material-ui/pickers";
import Result from './Result'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

const schema = {
  movingSize: {
    presence: { allowEmpty: false, message: 'is required' },
  },
  typeFrom: {
    presence: { allowEmpty: false, message: 'is required' },
  },
  typeTo: {
    presence: { allowEmpty: false, message: 'is required' },
  },
  origin: {
    presence: { allowEmpty: false, message: 'is required' },
  },
  destination: {
    presence: { allowEmpty: false, message: 'is required' },
  },
  startDate: {
    presence: { allowEmpty: false, message: 'is required' },
  },
};

const movingSizeOptions = [
  { key: 'room', text: 'One Room or less (<1000 lbs)', value: 'Room or less (partial move)' },
  { key: 'studio', text: 'Studio Apt.', value: 'Studio apartment' },
  { key: 'onebed', text: '1 Bedroom Apt.', value: '1 Bedroom apartment' },
  { key: 'twobed', text: '2 Bedroom Apt.', value: '2 Bedroom apartment' },
  { key: 'threebed', text: '3+ Bedroom Apt.', value: '3+ Bedroom apartment' },
  { key: 'twohouse', text: '2 Bedroom House/Townhouse', value: '2 Bedroom House/Townhouse' },
  { key: 'threehouse', text: '3 Bedroom House/Townhouse', value: '3 Bedroom House/Townhouse' },
  { key: 'fourhouse', text: '4+ Bedroom House/Townhouse', value: '4+ Bedroom House/Townhouse' },
  { key: 'commercial', text: 'Office / Commercial Moving', value: 'Office / Commercial space' },
]

const houseTypeOptions = [
  { key: 'elv', text: 'Elevator Bldg.', value: 'elevator building' },
  { key: 'grfloor', text: 'No Stairs - Ground Floor', value: '1st/Ground floor' },
  { key: '2floor', text: 'Stairs - 2nd Floor', value: '2nd floor' },
  { key: '3floor', text: 'Stairs - 3rd Floor', value: '3rd floor' },
  { key: '4floor', text: 'Stairs - 4th Floor', value: '4th floor' },
  { key: '5floor', text: 'Stairs 5th or Higher - N/A', value: 'Stairs 5th or Higher - N/A', disabled: true },
  { key: 'private', text: 'Private House', value: 'private house' },
  { key: 'storage', text: 'Storage Unit', value: 'storage unit' },
]


const Calculator = ({ onClose }) => {
  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });
  const [submitted, setSubmitted] = useState(false)
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const onlyNumbers = (e) => { e.target.value = e.target.value.replace(/[^0-9]/g, '')};

  const movingSizeOptionsSelect = () => {
    let moveSize = movingSizeOptions.map((item, index) => {
        return (
            <MenuItem key={index} value={item.value}>{item.text}</MenuItem>
        )
    })
    return moveSize
  }

  const houseTypeOptionsSelect = () => {
    let houseType = houseTypeOptions.map((item, index) => {
        if(item.value === "Stairs 5th or Higher - N/A"){
          return (
              <MenuItem key={index} value={item.value} disabled>{item.text}</MenuItem>
          )
        } else {
          return (
              <MenuItem key={index} value={item.value}>{item.text}</MenuItem>
          )
        }
    })
    return houseType
  }

  React.useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
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
    setSubmitted(true)
  }

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  if(submitted){
    return(
      <Result
        origin={formState.values.origin}
        destination={formState.values.destination}
        movingsize={formState.values.movingSize}
        typefrom={formState.values.typeFrom}
        typeto={formState.values.typeTo}
        onClose={onClose}
      />
    )
  } else {
    return (
      <div className={classes.root}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit() }}
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                <strong>How much will my move cost?</strong>
              </Typography>
              <Typography variant="h6" color="textSecondary" align="center">
                Local and long distance moving cost calculator
              </Typography>
            </Grid>

            <Grid item xs>
              <DatePicker
                variant="inline"
                inputVariant="outlined"
                format="MM/DD/YYYY"
                autoOk
                disablePast
                style={{width: '100%'}}
                label="Move Date *"
                value={formState.values.startDate || null}
                onChange={date =>
                  setFormState(formState => ({
                    ...formState,
                    values: {
                      ...formState.values,
                      startDate: date !== null ? date.format() : ''
                    }
                  }))}
              />
            </Grid>

            <Grid item xs>
              <TextField
                style={{width: '100%'}}
                value={formState.values.origin || ''}
                inputProps={{
                  maxLength: 5,
                  inputMode: 'numeric',
                }}
                onInput={(e) => onlyNumbers(e) }
                placeholder="12345"
                label="From Zip *"
                variant="outlined"
                name="origin"
                helperText={hasError('origin') ? formState.errors.origin[0] : null}
                error={hasError('origin')}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs>
              <TextField
                style={{width: '100%'}}
                value={formState.values.destination || ''}
                inputProps={{
                  maxLength: 5,
                  inputMode: 'numeric',
                }}
                onInput={(e) => onlyNumbers(e) }
                placeholder="12345"
                label="To Zip *"
                variant="outlined"
                name="destination"
                helperText={hasError('destination') ? formState.errors.destination[0] : null}
                error={hasError('destination')}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} >
              <FormControl
                variant="outlined"
                style={{width: '100%'}}
                error={hasError('movingSize')}
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
                  value={formState.values.movingSize || ''}
                  onChange={handleChange}
                >
                  {movingSizeOptionsSelect()}
                </Select>
                {
                  hasError('movingSize') ? <FormHelperText>Moving Size is required</FormHelperText> : null
                }
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl
                variant="outlined"
                style={{width: '100%'}}
                error={hasError('typeFrom')}
              >
                <InputLabel id="typeTo">
                  Choose From *
                </InputLabel>
                  <Select
                    labelId="typeTo"
                    defaultValue=""
                    variant="outlined"
                    label="Choose From *"
                    name="typeFrom"
                    value={formState.values.typeFrom || ''}
                    onChange={handleChange}
                  >
                    {houseTypeOptionsSelect()}
                  </Select>
                  {
                    hasError('typeFrom') ? <FormHelperText>This field is required</FormHelperText> : null
                  }
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl
                variant="outlined"
                style={{width: '100%'}}
                error={hasError('typeTo')}
              >
                <InputLabel id="typeTo">
                  Choose To *
                </InputLabel>
                  <Select
                    labelId="typeTo"
                    defaultValue=""
                    variant="outlined"
                    label="Choose To *"
                    name="typeTo"
                    value={formState.values.typeTo || ''}
                    onChange={handleChange}
                  >
                    {houseTypeOptionsSelect()}
                  </Select>
                  {
                    hasError('typeTo') ? <FormHelperText>This field is required</FormHelperText> : null
                  }
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

export default Calculator;
