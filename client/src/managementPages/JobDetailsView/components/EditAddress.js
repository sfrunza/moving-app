import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField } from "@material-ui/core";
import LocationMarker from "src/icons/LocationMarker";
import Hashtag from "src/icons/Hashtag";
import { jsonCityState } from "src/components/MovingCalculator/UsCities";

const useStyles = makeStyles((theme) => ({
  root: {},
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
}));

function capitalize(input) {
  return input
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
}

const onlyNumbers = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
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

const EditAddress = ({ job, formState, setFormState }) => {
  const classes = useStyles();

  const handleZipBlur = (e) => {
    let zip = "";
    if (e === null) {
      zip = "";
    } else {
      zip = e.target.value;
    }
    const cityObject = findCity(zip);

    console.log(cityObject);
    if (!cityObject) {
    }
    if (cityObject) {
      const city = cityObject.c;
      const state = cityObject.s;
      setFormState({
        ...formState,
        origin: {
          ...formState.origin,
          city: city,
          state: state,
        },
      });
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <label htmlFor="address" className={classes.label}>
          <LocationMarker className={classes.icon} />
          Address
        </label>
        <TextField
          fullWidth
          id="address"
          name="address"
          variant="outlined"
          size="small"
          placeholder="123 Street Name"
          value={
            formState.origin ? formState.origin.address : job.origin.address
          }
          onChange={(e) => {
            setFormState({
              ...formState,
              origin: {
                ...formState.origin,
                address: capitalize(e.target.value),
              },
            });
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <label htmlFor="fromApt" className={classes.label}>
          <Hashtag className={classes.icon} />
          Apt
        </label>
        <TextField
          fullWidth
          id="fromApt"
          name="fromApt"
          variant="outlined"
          size="small"
          placeholder="Apt"
          value={
            formState.origin
              ? formState.origin.apt_number
              : job.origin.apt_number
          }
          onChange={(e) => {
            setFormState({
              ...formState,
              origin: {
                ...formState.origin,
                apt_number: e.target.value,
              },
            });
          }}
        />
      </Grid>
      <Grid item xs={4} md={4}>
        <label htmlFor="city" className={classes.label}>
          <LocationMarker className={classes.icon} />
          City
        </label>
        <TextField
          fullWidth
          id="city"
          name="city"
          variant="outlined"
          size="small"
          placeholder="City"
          disabled
          value={formState.origin ? formState.origin.city : job.origin.city}
        />
      </Grid>
      <Grid item xs={4} md={4}>
        <label htmlFor="state" className={classes.label}>
          <LocationMarker className={classes.icon} />
          State
        </label>
        <TextField
          fullWidth
          id="state"
          name="state"
          variant="outlined"
          size="small"
          placeholder="State"
          disabled
          value={formState.origin ? formState.origin.state : job.origin.state}
        />
      </Grid>
      <Grid item xs={4} md={4}>
        <label htmlFor="zip" className={classes.label}>
          <LocationMarker className={classes.icon} />
          Zip
        </label>
        <TextField
          fullWidth
          id="zip"
          name="zip"
          variant="outlined"
          size="small"
          placeholder="ZIP Code"
          onInput={(e) => onlyNumbers(e)}
          inputProps={{
            maxLength: 5,
            inputMode: "numeric",
          }}
          value={formState.origin ? formState.origin.zip : job.origin.zip}
          onBlur={(e) => {
            handleZipBlur(e);
          }}
          onChange={(e) => {
            setFormState({
              ...formState,
              origin: {
                ...formState.origin,
                zip: e.target.value,
              },
            });
          }}
        />
      </Grid>
    </Grid>
  );
};

export default EditAddress;
