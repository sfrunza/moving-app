/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik, Field, getIn } from 'formik';
import moment from 'moment';
import {
  Box,
  Button,
  TextField,
  Typography,
  makeStyles,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Grid,
  Paper
} from '@material-ui/core';
import { KeyboardDatePicker } from "@material-ui/pickers";
import PlacesAutocomplete from 'react-places-autocomplete';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Result from "./Result"
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { red, deepPurple } from '@material-ui/core/colors'

const movingTypeOptions = [
  { key: '6', text: 'Moving', value: 'Moving' },
  { key: '1', text: 'Moving with Storage', value: 'Moving with Storage' },
  { key: '2', text: 'Loading Help', value: 'Loading Help' },
  { key: '3', text: 'Unloading Help', value: 'Unloading Help' },
  { key: '4', text: 'Packing Only', value: 'Packing Only' },
  { key: '5', text: 'Inside Move', value: 'Inside Move' },
]
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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    padding: '2em 2em',
    borderRadius: '4px',
    fontFamily: "Maison Neue Bold",
    [theme.breakpoints.down('xs')]: {
      padding: '1em',
      maxWidth: '98%',
    },

  },
  datePicker: {
    '& + &': {
      marginLeft: theme.spacing(2)
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontFamily: "Maison Neue Demi",
    backgroundColor: 'transparent',
    boxShadow: 'none',
    padding: '15px 0px'
  },
  firstRow: {

    [theme.breakpoints.up('sm')]: {
      '& div:first-child': {
        flexGrow: 2,
      }
    },
    [theme.breakpoints.down('xs')]: {
      '& > div:first-child': {
        flex: '1 1 100%',
        padding: '4px 4px 0px 4px',
      },
      '& > div:not(:first-child)': {
        flex: 1,
        padding: '0px 4px 4px 4px',
      },
    },

  },
  topLine: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    color: red[500],
    borderColor: red[500],
    '&:hover': {
      backgroundColor: red[50],
      color: red[500],
      borderColor: red[500],
    },
  },
  button: {

    fontFamily: "Maison Neue Demi",
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    '&:hover': {
      backgroundColor: deepPurple[700],
    },
  },
}));

function MovingDetails({
  className,
  id,
  onClose,
  ...rest
}) {
  const classes = useStyles();
  const [submitted, setSubmitted] = useState(false)

  const movingSizeOptionsSelect = () => {
    let moveSize = movingSizeOptions.map((item, index) => {
        return (
            <MenuItem key={item.key} value={item.value}>{item.text}</MenuItem>
        )
    })
    return moveSize
  }

  const houseTypeOptionsSelect = () => {
    let houseType = houseTypeOptions.map((item, index) => {
        if(item.value === "Stairs 5th or Higher - N/A"){
          return (
              <MenuItem key={item.key} value={item.value} disabled>{item.text}</MenuItem>
          )
        } else {
          return (
              <MenuItem key={item.key} value={item.value}>{item.text}</MenuItem>
          )
        }
    })
    return houseType
  }

  const SelectDate = ({ field, form, ...other}) => {
    let touch = form.touched;
    let error = form.errors;
    let name = field.name

    return (
      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label='Move Date'
        format="MM/DD/YYYY"
        placeholder="MM/DD/YYYY"
        InputAdornmentProps={{ position: "start" }}
        error={getIn(error, 'startDate') && getIn(touch, 'startDate')
          ? true
          : false}
        // if you are using custom validation schema you probably want to pass `true` as third argument
        onChange={date => form.setFieldValue(field.name, moment(date).format('MM/DD/YYYY'), true)}
        {...other}
        maxDate={new Date().setMonth(new Date().getMonth()+3)}
        disablePast
        style={{width: '100%'}}
        invalidDateMessage="Required"
      />

    );
  };

  function validateDate(value) {
    let error;
    if (value === 'Invalid date' || value === null) {
      error = 'Required';
    }
    return error;
  }


  return (
    <Formik
      initialValues={{
        movingSize: '',
        typeFrom: '',
        typeTo: '',
        origin: '',
        destination: '',
        submitted: false,
        startDate: new Date(),
      }}
      validationSchema={Yup.object().shape({
        movingSize: Yup.string().required('Required'),
        origin: Yup.string().required('Required'),
        destination: Yup.string().required('Required'),
        typeTo: Yup.string().required('Required'),
        typeFrom: Yup.string().required('Required'),
      })}
      validateOnChange={true}
      onSubmit={async (values, {
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          setSubmitted(true)
          // Do API call to store step data in server session
          // It is important to have it on server to be able to reuse it if user
          // decides to continue later.
          setStatus({ success: true });
          setSubmitting(false);

        } catch (err) {
          setErrors({ submit: err.message });
          setStatus({ success: false });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        setFieldTouched,
        setFieldError,
        touched,
        values,
      }) => {

        const onlyNumbers = (e) => { e.target.value = e.target.value.replace(/[^0-9]/g, '') };

        if(submitted){
          return(
            <Result
                    origin={values.origin}
                    destination={values.destination}
                    movingsize={values.movingSize}
                    typefrom={values.typeFrom}
                    typeto={values.typeTo}
                    />
          )
        } else {

        return (
        <form
          onSubmit={handleSubmit}
          className={clsx(classes.root, className)}
          {...rest}
        >
          <Box className={classes.topLine}>
            <Box>
              <Typography
                variant="h3"
                color="textPrimary"
              >
                How much will my move cost?
              </Typography>
            </Box>

            <Box>
              <Button
                onClick={onClose}
                variant="outlined"
                size="small"
                color="secondary"
                className={classes.closeButton}
              >
                <CloseOutlinedIcon/>
              </Button>
            </Box>
          </Box>

          <Box mt={2}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
            >
              Local and long distance moving cost calculator
            </Typography>
          </Box>

          <Grid container spacing={1} className={classes.firstRow}>
            <Grid item xs>
              <Paper className={classes.paper}><Field name='startDate' component={SelectDate} value={values.startDate} validate={validateDate}/></Paper>
            </Grid>

            <Grid item xs>
              <Paper className={classes.paper}>
                <TextField
                error={getIn(errors, 'origin') && getIn(touched, 'origin')
                  ? true
                  : false}
                  id="origin"
                  label="From Zip"
                  placeholder="12345"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  name='origin'
                  value={values.origin}
                  onChange={handleChange}
                  style={{width: '100%'}}
                  inputProps={
                    {maxLength: 5}
                  }
                  onInput={(e) => onlyNumbers(e) }
                />
              </Paper>
            </Grid>

            <Grid item xs>
              <Paper className={classes.paper}>
                <TextField
                error={getIn(errors, 'destination') && getIn(touched, 'destination')
                  ? true
                  : false}
                  id="destination"
                  label="To Zip"
                  placeholder="12345"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  name='destination'
                  value={values.destination}
                  onChange={handleChange}
                  style={{width: '100%'}}
                  inputProps={
                    {maxLength: 5}
                  }
                  onInput={(e) => onlyNumbers(e) }
                />
              </Paper>
            </Grid>

          </Grid>

          <Box >
            <FormControl variant="outlined" style={{width: '100%'}} error={getIn(errors, 'movingSize') && getIn(touched, 'movingSize')
              ? true
              : false}>
              <InputLabel>Size of Move</InputLabel>
              <Select
                id="movingSize"
                label="Size of Move"
                variant="outlined"
                name="movingSize"
                value={values.movingSize}
                onChange={handleChange}
              >
                {movingSizeOptionsSelect()}
              </Select>
            </FormControl>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper className={classes.paper}><FormControl variant="outlined" style={{width: '100%'}} error={getIn(errors, 'typeFrom') && getIn(touched, 'typeFrom')
                ? true
                : false}>
                <InputLabel>Choose From...</InputLabel>
                <Select
                  id="typeFrom"
                  variant="outlined"
                  label="Choose From..."
                  name="typeFrom"
                  value={values.typeFrom}
                  onChange={handleChange}
                >
                  {houseTypeOptionsSelect()}
                </Select>
              </FormControl></Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}><FormControl variant="outlined" style={{width: '100%'}} error={getIn(errors, 'typeTo') && getIn(touched, 'typeTo')
                ? true
                : false}>
                <InputLabel>Choose To...</InputLabel>
                <Select
                  id="typeTo"
                  label="Choose To..."
                  variant="outlined"
                  name="typeTo"
                  value={values.typeTo}
                  onChange={handleChange}

                >
                  {houseTypeOptionsSelect()}
                </Select>
              </FormControl></Paper>
            </Grid>
          </Grid>

          <Box
            display="flex"
          >
            <Button
              type="submit"
              variant="contained"
              size="large"
              className={classes.button}
            >
              Calculate
            </Button>
          </Box>
          <div>
          </div>
        </form>
      )
      }
    }
    }

    </Formik>
  );

}

MovingDetails.propTypes = {
  className: PropTypes.string,
};

export default MovingDetails;
