import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, Grid, MenuItem, Select } from "@material-ui/core";
import Users from "src/icons/Users";

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

const crewSizeOptions = [
  {
    key: "crewSize",
    text: "Please select...",
    value: "",
  },
  { key: "2", text: "2 movers", value: 2 },
  { key: "3", text: "3 movers", value: 3 },
  { key: "4", text: "4 movers", value: 4 },
];

const crewSizeOptionsSelect = () => {
  let crewSize = crewSizeOptions.map((item, index) => {
    return (
      <MenuItem key={index} value={item.value} disabled={item.value === ""}>
        {item.text}
      </MenuItem>
    );
  });
  return crewSize;
};

const EditCrewSize = ({ ...rest }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <label htmlFor="crewSize" className={classes.label}>
          <Users className={classes.icon} />
          Crew size
        </label>
        <FormControl
          variant="outlined"
          size="small"
          placeholder="Select"
          fullWidth
        >
          <Select
            id="crewSize"
            variant="outlined"
            name="crewSize"
            size="small"
            {...rest}
          >
            {crewSizeOptionsSelect()}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default EditCrewSize;
