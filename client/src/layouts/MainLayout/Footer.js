import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0),
    background: theme.palette.background.level2,
    overflow: "hidden",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

const Footer = (props) => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={classes.root}>
      <Grid className={classes.root} container spacing={2}>
        <Box display="inline-flex">
          <Typography variant="body2">
            © InsigntMoving {new Date().getFullYear()}, Make moving chill.
          </Typography>
        </Box>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            style={{ fontSize: 12, textAlign: "center" }}
          >
            When you visit or interact with our sites, services or tools, we or
            our authorised service providers may use cookies for storing
            information to help provide you with a better, faster and safer
            experience and for marketing purposes.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
