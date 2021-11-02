import React from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Button, Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  hidden: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      visibility: "hidden",
    },
  },
  download: {
    color: theme.palette.secondary.main,
  },
}));

function Header({ className, pdf, ...rest }) {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      spacing={3}
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid item className={classes.hidden}>
        <Typography variant="h5" color="textPrimary">
          Bill of Lading
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5" color="textPrimary">
          Bill of Lading
        </Typography>
      </Grid>
      <Grid item>
        <Button size="small">
          <RouterLink
            className={classes.download}
            to={pdf}
            target="_blank"
            download
          >
            Download PDF
          </RouterLink>
        </Button>
      </Grid>
    </Grid>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
