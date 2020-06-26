/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React from 'react';
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
  InputLabel
} from '@material-ui/core';
import { KeyboardDatePicker } from "@material-ui/pickers";
import PlacesAutocomplete from 'react-places-autocomplete';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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
  root: {},
  addTab: {
    marginLeft: theme.spacing(2)
  },
  datePicker: {
    '& + &': {
      marginLeft: theme.spacing(2)
    }
  },
  editor: {
    '& .ql-editor': {
      height: 200
    }
  },
  flexConatiner: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    },
  },
  flexItem: {
    flex: '0 0 47%'
  },
  flexItemFirst: {
    flex: '0 0 65%',
    [theme.breakpoints.down('xs')]: {
      flex: '0 0 100%'
    },
  },
  flexItemSecond: {
    flex: '0 0 33%',
  },
  itemsContainerApt: {
    flex: '0 0 30%',
    [theme.breakpoints.down('xs')]: {
      flex: '0 0 27%'
    }
  },
  itemsContainerType: {
    flex: '0 0 65%',
    [theme.breakpoints.down('xs')]: {
      flex: '0 0 70%'
    }
  },
  addressContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  typeContainer: {
    flex: '0 0 48%',
    justifyContent: 'space-evenly',
    display: 'flex',
    flexDirection: 'column',
  },
  itemsContainer: {
    justifyContent: 'space-between',
    display: 'flex',
  },
  disabled: {
    backgroundColor: '#efefef',
  },
  destination: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '32px'
    },
  },
  dateMtop: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '32px'
    },
  },
  icon: {
    position: 'relative',
    top: '3px'
  }
}));

function MovingDetails({
  className,
  onBack,
  onNext,
  id,
  ...rest
}) {
  const classes = useStyles();

  const movingSizeOptionsSelect = () => {
    let moveSize = movingSizeOptions.map((item, index) => {
        return (
            <MenuItem key={item.key} value={item.value}>{item.text}</MenuItem>
        )
    })
    return moveSize
  }

  const movingTypeOptionsSelect = () => {
    let moveType = movingTypeOptions.map((item, index) => {
        return (
            <MenuItem key={item.key} value={item.value}>{item.text}</MenuItem>
        )
    })
    return moveType
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


  const handleAddressChange = ({ name, form, search }) => {
   form.setFieldValue(name, search);
  }

  const renderPlacesAutocomplete = ({ field, form }) => {

    const name = field.name
    let noOrigin = false;
    let bgColor = '#fff';

    if(form.values.move_type === "Loading Help" || form.values.move_type === "Packing Only" || form.values.move_type === "Inside Move" || form.values.move_type === "Moving" || form.values.move_type === "Moving with Storage"){
      noOrigin = false
    } else {
      noOrigin = true;
      bgColor = "#efefef";
    }

      return (

        <PlacesAutocomplete
          value={field.value}
          onChange={search => {
            handleAddressChange({ name: field.name, form, search });
          }}
        >
          {({ getInputProps, getSuggestionItemProps, suggestions }) => {
            const additionalProps = {
              name: field.name,
              className: 'form-input__field',
            };
            const text = () => { return(<span>powered by </span>)}
            const icon = () => { return(<img src="https://cdn.worldvectorlogo.com/logos/google-2015.svg" style={{width: '17%', marginLeft: '5px'}}/>)}

            const autocompleteInputProps = getInputProps(additionalProps);
            return (

              <div className="autocomplete-root">
                  <TextField
                    {...autocompleteInputProps}
                    label="Origin Address"
                    variant="outlined"
                    placeholder="Type Full Address"
                    style={{width: '100%', backgroundColor: bgColor}}
                    error={getIn(form.errors, name) && getIn(form.touched, name)
                      ? true
                      : false}
                    disabled={noOrigin}
                  />
                  <div className="autocomplete-dropdown-container">
                    {suggestions.map(suggestion => {
                       const style = {
                        backgroundColor: suggestion.active ? '#e0e0e0' : '#fff',
                        cursor: 'pointer',
                        fontFamily: 'Maison Neue Normal',
                        padding: '10px',
                        fontSize: '14px',
                        borderBottom: '1px solid #b7b7b7',
                        alignItems: 'center'
                      }
                      return (
                          <div {...getSuggestionItemProps(suggestion, { style })}>
                            <LocationOnIcon className={classes.icon}/><span style={{fontFamily: 'Maison Neue Demi'}}>{suggestion.formattedSuggestion.mainText}</span>,{" "}{suggestion.formattedSuggestion.secondaryText}
                          </div>

                      )
                    })}
                  </div>
                  {
                    suggestions.length != 0 ?<div style={{display: 'flex', alignItems: 'center', float: 'right', justifyContent: 'flex-end', marginTop: '5px'}}>{text()} {icon()}</div> : null
                  }
              </div>
            );
          }}
        </PlacesAutocomplete>

      );
  }

  const renderDestinationAutocomplete = ({ field, form }) => {

    const name = field.name
    let noDestination = false;
    let bgColor = '#fff'

    if(form.values.move_type === "Unloading Help" || form.values.move_type === "Moving" || form.values.move_type === "Moving with Storage"){
      noDestination = false
    } else {
      noDestination = true
      bgColor = '#efefef'
    }

      return (

        <PlacesAutocomplete
          value={field.value}
          onChange={search => {
            handleAddressChange({ name: field.name, form, search });
          }}
        >
          {({ getInputProps, getSuggestionItemProps, suggestions }) => {
            const additionalProps = {
              name: field.name,
              className: 'form-input__field',
            };

            const text = () => { return(<span>powered by </span>)}
            const icon = () => { return(<img src="https://cdn.worldvectorlogo.com/logos/google-2015.svg" style={{width: '17%', marginLeft: '5px'}}/>)}

            const autocompleteInputProps = getInputProps(additionalProps);
            return (

              <div className="autocomplete-root">
                  <TextField
                    {...autocompleteInputProps}
                    label="Destination Address"
                    variant="outlined"
                    placeholder="Type Full Address"
                    style={{width: '100%', backgroundColor: bgColor}}
                    error={getIn(form.errors, name) && getIn(form.touched, name)
                      ? true
                      : false}
                    disabled={noDestination}
                  />
                  <div className="autocomplete-dropdown-container">
                    {suggestions.map(suggestion => {
                       const style = {
                        backgroundColor: suggestion.active ? '#e0e0e0' : '#fff',
                        cursor: 'pointer',
                        fontFamily: 'Maison Neue Normal',
                        padding: '10px',
                        fontSize: '14px',
                        borderBottom: '1px solid #b7b7b7',
                        alignItems: 'center'
                      }
                      return (

                          <div {...getSuggestionItemProps(suggestion, { style })}>
                            <LocationOnIcon className={classes.icon}/><span style={{fontFamily: 'Maison Neue Demi'}}>{suggestion.formattedSuggestion.mainText}</span>,{" "}{suggestion.formattedSuggestion.secondaryText}
                          </div>

                      )
                    })}
                  </div>
                  {
                    suggestions.length != 0 ?<div style={{display: 'flex', alignItems: 'center', float: 'right', justifyContent: 'flex-end', marginTop: '5px'}}>{text()} {icon()}</div> : null
                  }
              </div>
            );
          }}
        </PlacesAutocomplete>

      );
  }

  const SelectDate = ({ field, form, ...other}) => {
    let touch = form.touched;
    let error = form.errors;
    let name = field.name
    let label = '';
    if (name === "pick_up_date") {
      label = 'Move Date'
    } else {
      label = 'Delivery Date'
    }

    return (
      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label={label}
        format="MM/DD/YYYY"
        placeholder="MM/DD/YYYY"
        InputAdornmentProps={{ position: "start" }}
        error={Boolean(touch[name] && error[name])}
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
  function validateAddress(value) {
    let error;
    if (value === '') {
      error = 'Required';
    }
    return error;
  }

  return (
    <Formik
      initialValues={{
        job_id: id,
        move_size: '',
        pick_up_date: null,
        delivery_date: null,
        move_type: 'Moving',
        status: 'Needs Attention',
        origin: {
          address: '',
          job_id: id,
          house_type: '',
          apt_number: ''
        },
        destination: {
          address: '',
          job_id: id,
          house_type: '',
          apt_number: ''
        }
      }}
      validationSchema={Yup.object().shape({
        move_size: Yup.string().required('Required'),
        move_type: Yup.string().required('Required'),
        origin: Yup.object().shape({
          house_type: Yup.string().required('Required'),
          address: Yup.string().required('Required')

        }),
        destination: Yup.object().shape({
          house_type: Yup.string().required('Required'),
          address: Yup.string().required('Required')
        })
      })}
      validateOnChange={true}
      onSubmit={async (values, {
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          fetch('/api/v1/jobs.json',{
              method: "POST",
              body: JSON.stringify(values),
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            })
            fetch('/api/v1/origins.json',{
                method: "POST",
                body: JSON.stringify(values.origin),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
              })
              fetch('/api/v1/destinations.json',{
                  method: "POST",
                  body: JSON.stringify(values.destination),
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                })
          // Do API call to store step data in server session
          // It is important to have it on server to be able to reuse it if user
          // decides to continue later.
          setStatus({ success: true });
          setSubmitting(false);

          if (onNext) {
            onNext();
          }
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
        let noOrigin = false;
        let noDestination = false;
        let backgroundColorDestination = '#fff'
        let backgroundColorOrigin = '#fff'

        if(values.move_type === "Loading Help" || values.move_type === "Packing Only" || values.move_type === "Inside Move"){
          noDestination = true;
          backgroundColorDestination = "#efefef";
          values.destination = Object.assign(values.destination, values.origin);
          delete errors.destination
        }
        if(values.move_type === "Unloading Help"){
          noOrigin = true;
          backgroundColorOrigin = "#efefef";
          values.origin = Object.assign(values.origin, values.destination);
          delete errors.origin;
        }

        return (
        <form
          onSubmit={handleSubmit}
          className={clsx(classes.root, className)}
          {...rest}
        >
          <Typography
            variant="h3"
            color="textPrimary"
          >
            Lets get started. Step 1 of 2.
          </Typography>
          <Box mt={2}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
            >
              Request your move fast and free — no commitments or credit card required.
            </Typography>
          </Box>
          <Box mt={4} className={classes.flexConatiner}>
            <Box className={classes.flexItemFirst}>
              <FormControl variant="outlined" style={{width: '100%'}} error={Boolean(touched.move_size && errors.move_size)}>
                <InputLabel>Size of Move</InputLabel>
                <Select
                  required
                  id="move_size"
                  label="Size of Move"
                  variant="outlined"
                  name="move_size"
                  value={values.move_size}
                  onChange={handleChange}
                >
                  {movingSizeOptionsSelect()}
                </Select>
              </FormControl>
            </Box>
            <Box className={clsx(classes.flexItemSecond, classes.dateMtop)}>
              <Field name='pick_up_date' component={SelectDate} value={values.pick_up_date} validate={validateDate}/>
            </Box>
          </Box>
          <Box mt={4} className={classes.flexConatiner}>
            <Box className={classes.flexItemSecond}>
              <FormControl variant="outlined" style={{width: '100%'}} error={Boolean(touched.move_type && errors.move_type)}>
                <InputLabel>Type of Service</InputLabel>
                <Select
                  required
                  id="move_type"
                  label="Type of Service"
                  variant="outlined"
                  name="move_type"
                  value={values.move_type}
                  onChange={handleChange}
                >
                  {movingTypeOptionsSelect()}
                </Select>
              </FormControl>
            </Box>
            <Box className={classes.flexItemSecond}>
            {

              (values.move_type === "Moving" || values.move_type === "Loading Help" || values.move_type === "Unloading Help" || values.move_type === "Packing Only" || values.move_type === "Inside Move") ?
              (
                  <div></div>
              ) : (
                <Field name='delivery_date' component={SelectDate} value={values.delivery_date} validate={validateDate}/>
              )
            }
            </Box>
          </Box>


          <Box mt={4} className={classes.flexConatiner}>

            <Box className={classes.typeContainer}>
              <Box>
                <Field
                    name="origin.address"
                    value={values.origin.address}
                    handleBlur={handleBlur}
                    component={renderPlacesAutocomplete}
                    disabled={noOrigin}
                    validate={validateAddress}

                />
              </Box>
              <Box className={classes.itemsContainer} mt={4}>
                <Box className={classes.itemsContainerApt}>
                  <TextField
                    id="origin.apt_number"
                    label="Apt#"
                    defaultValue=""
                    variant="outlined"
                    name='origin.apt_number'
                    onChange={handleChange}
                    disabled={noOrigin}
                    style={{width: '100%', backgroundColor: backgroundColorOrigin}}
                  />
                </Box>
                <Box className={classes.itemsContainerType} style={{width: '100%'}}>
                  <FormControl variant="outlined" style={{width: '100%'}} error={getIn(errors, 'origin.house_type') && getIn(touched, 'origin.house_type')
                    ? true
                    : false}>
                    <InputLabel>Select elevator/stairs...</InputLabel>
                    <Select
                      required
                      id="origin.house_type"
                      defaultValue=""
                      label="Select elevator/stairs..."
                      variant="outlined"
                      name="origin.house_type"
                      value={values.origin.house_type}
                      onChange={handleChange}
                      disabled={noOrigin}
                      style={{backgroundColor: backgroundColorOrigin}}
                    >
                      {houseTypeOptionsSelect()}
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Box>

            <Box className={clsx(classes.destination, classes.typeContainer)}>
              <Box>
                <Field
                    name="destination.address"
                    value={values.destination.address}
                    handleBlur={handleBlur}
                    component={renderDestinationAutocomplete}
                    validate={validateAddress}
                />
              </Box>
              <Box className={classes.itemsContainer} mt={4}>
                <Box className={classes.itemsContainerApt}>
                  <TextField
                    id="destination.apt_number"
                    label="Apt#"
                    defaultValue=""
                    variant="outlined"
                    name='destination.apt_number'
                    onChange={handleChange}
                    disabled={noDestination}
                    style={{width: '100%', backgroundColor: backgroundColorDestination}}
                  />
                </Box>
                <Box style={{width: '100%'}} className={classes.itemsContainerType}>
                  <FormControl variant="outlined" style={{width: '100%'}} error={getIn(errors, 'destination.house_type') && getIn(touched, 'destination.house_type')
                    ? true
                    : false}>
                    <InputLabel>Select elevator/stairs...</InputLabel>
                    <Select
                      required
                      id="destination.house_type"
                      defaultValue=""
                      label="Select elevator/stairs..."
                      variant="outlined"
                      name="destination.house_type"
                      value={values.destination.house_type}
                      onChange={handleChange}
                      disabled={noDestination}
                      style={{backgroundColor: backgroundColorDestination}}

                    >
                      {houseTypeOptionsSelect()}
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Box>
          </Box>
          <Typography
            variant="h5"
            style={{fontFamily: 'Maison Neue', fontSize: '12px'}}
          >
            *Please provide us with exact floor if stairs are involved.
          </Typography>
          <Box
            mt={6}
            display="flex"
          >
            {onBack && (
              <Button
                onClick={onBack}
                size="large"
              >
                Previous
              </Button>
            )}
            <Box flexGrow={1} />
            <Button
              color="secondary"
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              size="large"
            >
              Next
            </Button>
          </Box>
          <div>
          </div>
        </form>
      )}
    }

    </Formik>
  );

}

MovingDetails.propTypes = {
  className: PropTypes.string,
  onNext: PropTypes.func,
  onBack: PropTypes.func
};

export default MovingDetails;
