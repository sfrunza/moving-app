import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import { Button, Box, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import LocationMarker from "src/icons/LocationMarker";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(1),
  },
  content: {},
  bold: {
    fontWeight: 600,
  },
  dot: {
    boxShadow: "none",
  },
  oppositeContent: {
    "&::before": {
      flex: "unset",
      content: "unset",
      padding: 0,
    },
  },
  timelineDot: {
    display: "flex",
    padding: 0,
    alignSelf: "baseline",
    boxShadow: "none",
    marginTop: 6,
    borderStyle: "none",
    borderWidth: "unset",
    borderRadius: "unset",
    marginBottom: 4,
    backgroundColor: "transparent",
  },
  timelineConnector: {
    width: 1,
    flexGrow: 1,
    borderWidth: "0px 0px 0px 4px",
    borderStyle: "dotted",
    borderColor: "rgba(18, 21, 42, 0.3)",
    backgroundColor: "transparent",
  },
}));

export default function AddressesComponent({ job }) {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const TimelineCustomItem = ({
    opositeContent,
    address,
    city,
    state,
    zip,
    button,
    buttonText,
    connector,
    first,
    last,
    floor,
    apt,
  }) => {
    return (
      <TimelineItem
        classes={{ missingOppositeContent: classes.oppositeContent }}
      >
        <TimelineSeparator>
          <TimelineDot classes={{ root: classes.timelineDot }}>
            <LocationMarker
              color={first ? "primary" : last ? "secondary" : "action"}
            />
          </TimelineDot>
          {connector && (
            <TimelineConnector classes={{ root: classes.timelineConnector }} />
          )}
        </TimelineSeparator>
        <TimelineContent classes={{ root: classes.content }}>
          {button ? (
            <Button size="small" variant="outlined" color="primary">
              {buttonText}
            </Button>
          ) : (
            <Box>
              <Typography
                color={first ? "primary" : "secondary"}
                variant="body2"
                className={classes.bold}
              >
                {first ? "Origin" : "Destination"}
              </Typography>
              <Box maxWidth={isMd ? 300 : 300}>
                <Typography variant="body2" className={classes.bold}>
                  {address}, {city}, {state}, {zip}
                </Typography>
                {apt && (
                  <Typography variant="body2" className={classes.bold}>
                    Apt {apt}
                  </Typography>
                )}
                <Typography variant="caption" color="textSecondary">
                  {floor}
                </Typography>
              </Box>
            </Box>
          )}
        </TimelineContent>
      </TimelineItem>
    );
  };

  return (
    <Timeline classes={{ root: classes.main }} align="left">
      <TimelineCustomItem
        address={job.origin.address}
        city={job.origin.city}
        state={job.origin.state}
        zip={job.origin.zip}
        floor={job.origin.floor}
        apt={job.origin.apt_number}
        button={false}
        connector={job.destination.address ? true : false}
        first={true}
      />
      {job.destination.address && (
        <TimelineCustomItem
          address={job.destination.address}
          city={job.destination.city}
          state={job.destination.state}
          zip={job.destination.zip}
          floor={job.destination.floor}
          apt={job.destination.apt_number}
          button={false}
          connector={false}
          last={true}
        />
      )}
    </Timeline>
  );
}
