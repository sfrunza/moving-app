import React from "react";
import { Grid, Typography, Tooltip, Divider } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ArrowRightIcon from "src/icons/ArrowRight";
import InformationCircle from "src/icons/InformationCircle";

const useStyles = makeStyles((theme) => ({
  location: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    margin: theme.spacing(0, 2),
    width: 16,
    color: theme.palette.text.secondary,
  },
  infoIcon: {
    color: theme.palette.text.secondary,
    width: 18,
    margin: theme.spacing(0, 1),
    // right: 17,
    top: 6,
    position: "relative",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const StyledGrid = withStyles((theme) => ({
  item: {
    display: "flex",
    alignItems: "flex-end",
  },
}))(Grid);

const MovingStorageQuote = ({
  movingService,
  movingSize,
  fromHouseType,
  toHouseType,
  distance,
  origin,
  destination,
  crewSize,
  rate,
  estimateJobTime,
  travelTime,
  estimateQuote,
  isMovingWithStorage,
}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <StyledGrid item xs={12} style={{ display: "inline-block" }}>
        <Typography component="span" variant="body2">
          {movingService} a <b>{movingSize}</b>
        </Typography>
        {fromHouseType && (
          <Typography variant="body2" component="span">
            &nbsp;from <b>{fromHouseType}</b>
          </Typography>
        )}
        {toHouseType && (
          <Typography component="span" variant="body2">
            {" "}
            &nbsp;to <b>{toHouseType}</b>
          </Typography>
        )}
        {distance && (
          <Typography component="span" variant="body2">
            . Distance - {distance} miles.
          </Typography>
        )}
      </StyledGrid>
      <StyledGrid item xs={12}>
        <Typography variant="button" classes={{ root: classes.location }}>
          {origin}
          {destination && <ArrowRightIcon className={classes.icon} />}
          {destination}
        </Typography>
      </StyledGrid>
      <StyledGrid item xs={6} md={6}>
        {crewSize} Movers Crew
      </StyledGrid>
      <StyledGrid item xs={6} md={6}>
        <Typography variant="button">${rate}</Typography>
        <Typography variant="body2" style={{ marginLeft: 4 }}>
          {" "}
          /hour
        </Typography>
      </StyledGrid>
      <StyledGrid item xs={6} md={6}>
        Estimate job time
      </StyledGrid>
      <StyledGrid item xs={6} md={6}>
        <Typography variant="button">
          {estimateJobTime()[0]}{" "}
          {estimateJobTime()[1] ? "- " + estimateJobTime()[1] : null}
        </Typography>
        <Typography variant="body2" style={{ marginLeft: 4 }}>
          {" "}
          hours*
          <Tooltip
            title="Job Time = Labour Time + Travel Time"
            placement="top-end"
            arrow
          >
            <InformationCircle className={classes.infoIcon} />
          </Tooltip>
        </Typography>
      </StyledGrid>
      <StyledGrid item xs={6} md={6}>
        Travel time
      </StyledGrid>
      <StyledGrid item xs={6} md={6}>
        <Typography variant="body1">
          {travelTime[0]}/{isMovingWithStorage ? travelTime[0] : travelTime[1]}{" "}
        </Typography>
        <Typography variant="body2" style={{ marginLeft: 4 }}>
          {" "}
          min.
          <Tooltip title="from/to Headquarter" placement="top-end" arrow>
            <InformationCircle className={classes.infoIcon} />
          </Tooltip>
        </Typography>
      </StyledGrid>
      <StyledGrid item xs={6} md={6}>
        Estimated Quote
      </StyledGrid>
      <StyledGrid item xs={6} md={6}>
        <Typography variant="button">
          ${estimateQuote()[0]}
          {estimateQuote()[1] ? " - $" + estimateQuote()[1] : null}
        </Typography>
      </StyledGrid>
      <Divider style={{ width: "100%", margin: "8px 0px" }} />
      <StyledGrid item xs={12}>
        <Typography variant="caption">
          Please note, this quote is just an estimate and provided for your
          convenience only. We give you a database average for generally similar
          moves. However, your final cost is based on hourly rate and actual
          time your move will take.
        </Typography>
      </StyledGrid>
    </Grid>
  );
};

export default MovingStorageQuote;
