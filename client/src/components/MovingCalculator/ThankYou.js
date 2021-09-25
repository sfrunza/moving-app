import React from "react";
import { Grid, Fade, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import hands from "src/assets/img/hands.png";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2),
  },
  alightCenter: {
    textAlign: "center",
  },
}));

const ThankYou = ({ handleClose }) => {
  const classes = useStyles();

  return (
    <Fade in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={classes.alightCenter}>
              <img src={hands} alt="raising hands" width="50" height="50" />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.alightCenter}>
              We're on it!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" className={classes.alightCenter}>
              Thanks for your submission. One of our moving specialists will
              contact you shortly.
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.alightCenter}>
            <Button
              color="primary"
              className={classes.alightCenter}
              size="large"
              component="a"
              href="#"
            >
              +1 (617) 232-2334
            </Button>
          </Grid>
          {/* <Grid item xs={12}>
            <Typography variant="body1" className={classes.alightCenter}>
              Check your email for instructions on how to access your moving
              request information online!
            </Typography>
          </Grid> */}
        </Grid>
      </div>
    </Fade>
  );
};

export default ThankYou;
