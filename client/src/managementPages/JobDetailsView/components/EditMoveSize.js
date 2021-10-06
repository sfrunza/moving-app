import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, Grid, MenuItem, Select } from "@material-ui/core";
import Home from "src/icons/Home";

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

const movingSizeOptionsSelect = () => {
  let moveSize = movingSizeOptions.map((item, index) => {
    return (
      <MenuItem key={index} value={item.value} disabled={item.value === ""}>
        {item.text}
      </MenuItem>
    );
  });
  return moveSize;
};

const EditMoveSize = ({ ...rest }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <label htmlFor="movingService" className={classes.label}>
          <Home className={classes.icon} />
          Move Size
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
            {movingSizeOptionsSelect()}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default EditMoveSize;
