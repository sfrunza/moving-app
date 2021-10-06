import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TruckFill from "src/icons/TruckFill";
import { FormControl, Grid, MenuItem, Select } from "@material-ui/core";

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

const movingTypeOptions = [
  { key: "6", text: "Moving", value: "Moving" },
  { key: "1", text: "Moving with Storage", value: "Moving with Storage" },
  { key: "2", text: "Loading Help", value: "Loading Help" },
  { key: "3", text: "Unloading Help", value: "Unloading Help" },
  { key: "4", text: "Packing Only", value: "Packing Only" },
  { key: "5", text: "Inside Move", value: "Inside Move" },
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

const ServiceChange = ({ ...rest }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
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
        >
          <Select
            id="movingService"
            variant="outlined"
            name="movingService"
            size="small"
            {...rest}
          >
            {movingTypeOptionsSelect()}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default ServiceChange;
