import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  makeStyles,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import moment from "moment";
import { updateEvent } from "src/slices/calendar";

const averageTime = {
  "Room or less (partial move)": 30,
  "Studio apartment": 100,
  "1 Bedroom apartment": 120,
  "2 Bedroom apartment": 180,
  "2 Bedroom House/Townhouse": 240,
  "3+ Bedroom apartment": 360,
  "3 Bedroom House/Townhouse": 420,
  "4+ Bedroom House/Townhouse": 520,
  "Office / Commercial space": 300,
};

const averageFloorTime = (size) => {
  let obj = {
    "elevator building": Math.round(averageTime[size] * 0.2),
    "private house": Math.round(averageTime[size] * 0.1),
    "storage unit": Math.round(averageTime[size] * 0.2),
    "1st/Ground floor": Math.round(averageTime[size] * 0.1),
    "2nd floor": Math.round(averageTime[size] * 0.2),
    "3rd floor": Math.round(averageTime[size] * 0.3),
    "4th floor": Math.round(averageTime[size] * 0.4),
  };
  return obj;
};

const floor = [
  "elevator building", //0
  "private house", //1
  "storage unit", //2
  "1st/Ground floor", //3
  "2nd floor", //4
  "3rd floor", //5
  "4th floor", //6
];

const apt = [
  "Room or less (partial move)", //0
  "Studio apartment", //1
  "1 Bedroom apartment", //2
  "2 Bedroom apartment", //3
  "2 Bedroom House/Townhouse", //4
  "3+ Bedroom apartment", //5
  "3 Bedroom House/Townhouse", //6
  "4+ Bedroom House/Townhouse", //7
  "Office / Commercial space", //8
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

function ChangesMade({
  formState,
  event,
  dispatch,
  setFormState,
  rates,
  recalc,
  setRecalc,
  saveAndUpdate,
  setSaveAndUpdate,
}) {
  const classes = useStyles();

  const getCrewSize = (apartment, fromFloor, toFloor) => {
    let nr = 2;
    for (let i = 0; i < apt.length; i++) {
      if (apt[i] === apartment) {
        for (let j = 0; j < floor.length; j++) {
          if (floor[j] === fromFloor) {
            for (let k = 0; k < floor.length; k++) {
              if (floor[k] === toFloor) {
                // logic start from big to small
                if (i > 6) {
                  return (nr += 3);
                } else if (i >= 4) {
                  return (nr += 2);
                } else if (i > 2) {
                  if (j > 4 && k > 4) {
                    return (nr += 2);
                  } else return (nr += 1);
                } else if (i >= 1) {
                  if (j > 4 || k > 4) {
                    return (nr += 1);
                  } else return nr;
                } else if (i === 0) {
                  if (j === 6 || k === 6) {
                    return (nr += 1);
                  } else return nr;
                } else return nr;
              }
            }
          }
        }
      }
    }
    return nr;
  };

  const roundTime = (hours) => {
    return Math.round(hours * 2) / 2;
  };
  const isLoading = (service) => {
    return service === "Loading Help";
  };
  const isUnloading = (service) => {
    return service === "Unloading Help";
  };
  const isPacking = (service) => {
    return service === "Packing Only";
  };
  const isInsideMove = (service) => {
    return service === "Inside Move";
  };
  const isMovingWithStorage = (service) => {
    return service === "Moving with Storage";
  };

  function roundToHalf(value) {
    var converted = parseFloat(value); // Make sure we have a number
    var decimal = converted - parseInt(converted, 10);
    decimal = Math.round(decimal * 10);
    if (decimal === 5) {
      return parseInt(converted, 10) + 0.5;
    }
    if (decimal < 3 || decimal > 7) {
      return Math.round(converted);
    } else {
      return parseInt(converted, 10) + 0.5;
    }
  }

  const estimateJobTime = () => {
    let movingService = formState.job_type;
    let movingSize = formState.job_size;
    let fromHouseType = formState.origin.floor;
    let toHouseType = formState.destination.floor;

    let travelTimeSum = formState.travel_time.reduce((a, b) => a + b);
    if (isInsideMove(movingService))
      travelTimeSum = formState.travel_time[0] * 2;

    let averageLabourTime = averageTime[movingSize];
    if (isLoading(movingService))
      averageLabourTime = averageTime[movingSize] * 0.75;
    if (isUnloading(movingService) || isPacking(movingService))
      averageLabourTime = averageTime[movingSize] * 0.5;
    if (isInsideMove(movingService))
      averageLabourTime = averageTime[movingSize] * 0.4;
    if (isMovingWithStorage(movingService))
      averageLabourTime = averageTime[movingSize] * 0.8;

    let totalTimeInMinutes = 0;

    let diff = formState.crew_size - event.crew_size;

    // console.log(diff);
    // console.log(
    //   "getCrew",
    //   getCrewSize(
    //     formState.job_size,
    //     formState.origin ? formState.origin.floor : formState.destination.floor,
    //     formState.destination
    //       ? formState.destination.floor
    //       : formState.origin.floor
    //   )
    // );
    // console.log("crew", formState.crew_size);

    if (fromHouseType === "") {
      totalTimeInMinutes =
        averageLabourTime +
        averageFloorTime(movingSize)[toHouseType] +
        travelTimeSum;
    } else if (toHouseType === "") {
      totalTimeInMinutes =
        averageLabourTime +
        averageFloorTime(movingSize)[fromHouseType] +
        travelTimeSum;
    } else {
      totalTimeInMinutes =
        averageLabourTime +
        averageFloorTime(movingSize)[fromHouseType] +
        averageFloorTime(movingSize)[toHouseType] +
        travelTimeSum;
      // +
      // timeBetween;
    }

    if (Math.sign(diff) < 0) {
      if (Math.abs(diff) === 1) {
        totalTimeInMinutes = roundToHalf(
          totalTimeInMinutes + totalTimeInMinutes * 0.2
        );
      } else if (Math.abs(diff) === 2) {
        totalTimeInMinutes = roundToHalf(
          totalTimeInMinutes + totalTimeInMinutes * 0.35
        );
      }
    }
    if (Math.sign(diff) > 0) {
      if (Math.abs(diff) === 1) {
        totalTimeInMinutes = roundToHalf(
          totalTimeInMinutes - totalTimeInMinutes * 0.2
        );
      } else if (Math.abs(diff) === 2) {
        totalTimeInMinutes = roundToHalf(
          totalTimeInMinutes - totalTimeInMinutes * 0.35
        );
      }
    }

    let totalTimeInHours = roundTime(totalTimeInMinutes / 60);
    let estimateTimeArray = [];
    if (movingService === "Moving" || movingService === "Moving with Storage") {
      estimateTimeArray = [
        roundTime(totalTimeInHours),
        roundTime(totalTimeInHours + 1),
      ];
    } else {
      estimateTimeArray = [
        roundTime(totalTimeInHours),
        roundTime(totalTimeInHours + 0.5),
      ];
    }

    if (totalTimeInHours < 2) estimateTimeArray = [2];
    return estimateTimeArray;
  };

  const estimateQuote = () => {
    let estimateQuoteArray = [];
    estimateQuoteArray = [
      estimateJobTime()[0] *
        searchRate(formState.pick_up_date)[formState.crew_size - 2],
      estimateJobTime()[1] *
        searchRate(formState.pick_up_date)[formState.crew_size - 2],
    ];
    return estimateQuoteArray;
  };

  const handleUpdateJob = () => {
    dispatch(
      updateEvent(event.id, {
        ...formState,
        estimated_time: `{${formState.estimated_time[0]},${formState.estimated_time[1]}}`,
        estimated_quote: `{${formState.estimated_quote[0]},${formState.estimated_quote[1]}}`,
      })
    );
  };

  function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  const searchRate = (selectedDay) => {
    let dateFormat = moment(selectedDay).format("MM/DD/YYYY");
    for (var i = 0; i < rates.length; i++) {
      let renderedDay = rates[i].date;
      if (renderedDay && renderedDay === dateFormat) {
        return rates[i].rates;
      }
    }
  };

  return (
    <Card>
      <CardHeader title="Changes made" />
      <Divider />
      <CardContent classes={{ root: classes.root }}>
        {formState.pick_up_date &&
        moment(formState.pick_up_date).format("MM/DD/YYYY") !==
          moment(event.pick_up_date).format("MM/DD/YYYY") ? (
          <Typography variant="caption">
            Move date changed from{" "}
            <b>{moment(event.pick_up_date).format("MMM DD, YYYY")}</b> to{" "}
            <b>{moment(formState.pick_up_date).format("MMM DD, YYYY")}</b>
          </Typography>
        ) : null}
        {formState.origin && formState.origin !== event.origin ? (
          <Typography variant="caption">
            Origin changed from{" "}
            <b>
              {event.origin.address}, {event.origin.city}
            </b>{" "}
            to{" "}
            <b>
              {formState.origin.address}, {formState.origin.city}
            </b>
          </Typography>
        ) : null}

        {formState.job_type && event.job_type !== formState.job_type ? (
          <Typography variant="caption">
            Moving Service changed from <b>{event.job_type}</b> to{" "}
            <b>{formState.job_type}</b>
          </Typography>
        ) : null}
        {formState.job_size && event.job_size !== formState.job_size ? (
          <Typography variant="caption">
            Move Size changed from <b>{event.job_size}</b> to{" "}
            <b>{formState.job_size}</b>
          </Typography>
        ) : null}
        {formState.crew_size && event.crew_size !== formState.crew_size ? (
          <Typography variant="caption">
            Crew Size changed from <b>{event.crew_size}</b> to{" "}
            <b>{formState.crew_size}</b>
          </Typography>
        ) : null}
        {formState.job_rate &&
        event.job_rate !== parseInt(formState.job_rate) ? (
          <Typography variant="caption">
            Rate changed from <b>{event.job_rate}</b> to{" "}
            <b>{formState.job_rate}</b>
          </Typography>
        ) : null}
        {formState.estimated_time &&
        !arraysEqual(formState.estimated_time, event.estimated_time) ? (
          <Typography variant="caption">
            Est. time changed from{" "}
            <b>
              {event.estimated_time[0]} - {event.estimated_time[1]}
            </b>{" "}
            to{" "}
            <b>
              {formState.estimated_time[0]} - {formState.estimated_time[1]}
            </b>
          </Typography>
        ) : null}
        {formState.estimated_quote &&
        !arraysEqual(formState.estimated_quote, event.estimated_quote) ? (
          <Typography variant="caption">
            Est. quote changed from{" "}
            <b>
              {event.estimated_quote[0]} - {event.estimated_quote[1]}
            </b>{" "}
            to{" "}
            <b>
              {formState.estimated_quote[0]} - {formState.estimated_quote[1]}
            </b>
          </Typography>
        ) : null}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => setFormState(event)}
        >
          Cancel
        </Button>
        <Button
          size="small"
          color="primary"
          variant="contained"
          disableElevation
          onClick={handleUpdateJob}
          disabled={saveAndUpdate}
        >
          Save and Update
        </Button>
        <Button
          size="small"
          color="primary"
          variant="contained"
          disableElevation
          disabled={recalc}
          onClick={() => {
            setSaveAndUpdate(false);
            setRecalc(true);
            setFormState({
              ...formState,
              crew_size:
                formState.crew_size === event.crew_size
                  ? getCrewSize(
                      formState.job_size,
                      formState.origin
                        ? formState.origin.floor
                        : formState.destination.floor,
                      formState.destination
                        ? formState.destination.floor
                        : formState.origin.floor
                    )
                  : formState.crew_size,
              job_rate:
                formState.crew_size === event.crew_size
                  ? searchRate(formState.pick_up_date)[
                      getCrewSize(
                        formState.job_size,
                        formState.origin
                          ? formState.origin.floor
                          : formState.destination.floor,
                        formState.destination
                          ? formState.destination.floor
                          : formState.origin.floor
                      ) - 2
                    ]
                  : formState.job_rate,
              estimated_time: estimateJobTime(),
              estimated_quote: estimateQuote(),
            });

            // console.log(estimateJobTime());
            // console.log(estimateQuote());
          }}
        >
          Recalculate
        </Button>
      </CardActions>
    </Card>
  );
}
export default ChangesMade;
