import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Formik, Field, getIn } from "formik";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
// import moment from 'moment';
import { Box, Button, TextField, makeStyles } from "@material-ui/core";
// import { KeyboardDatePicker, DatePicker } from "@material-ui/pickers";
import PlacesAutocomplete from "react-places-autocomplete";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({
  root: {},
  flexConatiner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  typeContainer: {
    flex: "0 0 48%",
    justifyContent: "space-evenly",
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    position: "relative",
    width: 16,
    height: 16,
    top: 3,
  },
}));

function AdditionalPickupAddress({
  className,
  setJob,
  job,
  setEditOpen,
  ...rest
}) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const handleAddressChange = ({ name, form, search }) => {
    form.setFieldValue(name, search);
  };

  const renderPlacesAutocomplete = ({ field, form }) => {
    const name = field.name;
    const searchOptions = {
      componentRestrictions: { country: "us" },
      types: ["geocode", "establishment"],
    };

    return (
      <PlacesAutocomplete
        value={field.value || ""}
        searchOptions={searchOptions}
        onChange={(search) => {
          handleAddressChange({ name: field.name, form, search });
        }}
      >
        {({ getInputProps, getSuggestionItemProps, suggestions }) => {
          const additionalProps = {
            name: field.name,
            className: "form-input__field",
          };
          const text = () => {
            return <span>powered by </span>;
          };
          const icon = () => {
            return (
              <img
                src="https://cdn.worldvectorlogo.com/logos/google-2015.svg"
                alt="googleimg"
                style={{ width: "15%", marginLeft: "5px" }}
              />
            );
          };

          const autocompleteInputProps = getInputProps(additionalProps);
          return (
            <div className="autocomplete-root">
              <TextField
                {...autocompleteInputProps}
                label="Address "
                placeholder="Type Full Address"
                style={{ width: "100%" }}
                error={
                  getIn(form.errors, name) && getIn(form.touched, name)
                    ? true
                    : false
                }
              />
              <div className="autocomplete-dropdown-container">
                {suggestions.map((suggestion, i) => {
                  const style = {
                    backgroundColor: suggestion.active ? "#e0e0e0" : "#fff",
                    cursor: "pointer",
                    padding: "10px 0px",
                    fontSize: "12px",
                    borderBottom: "1px solid #b7b7b7",
                    alignItems: "center",
                  };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, { style })}
                      key={i}
                    >
                      <LocationOnIcon className={classes.icon} key={i} />
                      <span style={{ display: "contents", fontWeight: 700 }}>
                        {suggestion.formattedSuggestion.mainText}
                      </span>
                      , {suggestion.formattedSuggestion.secondaryText}
                    </div>
                  );
                })}
              </div>
              {suggestions.length !== 0 ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    float: "right",
                    justifyContent: "flex-end",
                    marginTop: "5px",
                    fontSize: "10px",
                  }}
                >
                  {text()} {icon()}
                </div>
              ) : null}
            </div>
          );
        }}
      </PlacesAutocomplete>
    );
  };

  function validateAddress(value) {
    let error;
    if (value === "") {
      error = "Required";
    }
    return error;
  }

  return (
    <Formik
      initialValues={{
        ...job.origin,
      }}
      validationSchema={Yup.object().shape({
        add_address: Yup.string().required("Required"),
      })}
      validateOnChange={true}
      onSubmit={async (
        values,
        { setErrors, resetForm, setStatus, setSubmitting }
      ) => {
        try {
          await fetch(`/api/v1/origins/${job.origin.id}`, {
            method: "PUT",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
          });
          setJob({ ...job, values });
          enqueueSnackbar("Address Added", {
            variant: "success",
          });
          resetForm();
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
        resetForm,
        values,
      }) => {
        return (
          <form
            onSubmit={handleSubmit}
            className={clsx(classes.root, className)}
            {...rest}
          >
            <Box mt={4} className={classes.flexConatiner}>
              <Box className={classes.typeContainer}>
                <Box>
                  <Field
                    name="add_address"
                    value={values.add_address || ""}
                    handleBlur={handleBlur}
                    component={renderPlacesAutocomplete}
                    validate={validateAddress}
                  />
                </Box>
              </Box>
            </Box>
            <Box mt={6} display="flex" alignItems="center">
              <Button
                size="medium"
                variant="outlined"
                onClick={() => setEditOpen(false)}
              >
                Cancel
              </Button>
              <Box flexGrow={1} />
              <Box>
                <Button
                  color="secondary"
                  type="submit"
                  variant="contained"
                  size="medium"
                  disableElevation
                >
                  Add
                </Button>
              </Box>
            </Box>
          </form>
        );
      }}
    </Formik>
  );
}

AdditionalPickupAddress.propTypes = {
  className: PropTypes.string,
  onNext: PropTypes.func,
  onBack: PropTypes.func,
};

export default AdditionalPickupAddress;
