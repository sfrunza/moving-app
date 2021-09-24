import React from "react";
import { Switch, Typography, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { handleThemeChange } from "src/slices/theme";
import { useDispatch, useSelector } from "src/store";

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 32,
    height: 16,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 14,
    height: 14,
    boxShadow: "1px 1px 5px 0 rgb(1 1 1 / 25%)",
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const ThemeToggler = () => {
  const { isDark } = useSelector((state) => {
    return state.theme;
  });
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(handleThemeChange());
  };

  return (
    <Grid container alignItems="center">
      <Typography variant="body2">Dark</Typography>
      <Grid item>
        <IOSSwitch checked={isDark} onChange={handleClick} name="checked" />
      </Grid>
    </Grid>
  );
};

export default ThemeToggler;
