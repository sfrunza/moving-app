import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Grid, Fade, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "src/store";
import {
  setCrewSize,
  setEstimateQuote,
  setEstimateTime,
  setRate,
  setRates,
} from "src/slices/booking";
import moment from "moment";
import MovingStorageQuote from "./components/MovingStorageQuote";

const useStyles = makeStyles((theme) => ({
  buttonsContainer: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
    justifyContent: "space-between",
  },
}));

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

const ThirdStep = ({ handleBack, handleNext, ratesFromDb }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const dispatch = useDispatch();

  const {
    date,
    isFlatRate,
    origin,
    destination,
    movingSize,
    fromHouseType,
    toHouseType,
    crewSize,
    travelTime,
    timeBetween,
    movingService,
    rates,
    distance,
  } = useSelector((state) => state.booking);

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

  const getCrewSizeLoadingUnloading = (apartment, fromFloor) => {
    let nr = 2;
    for (let i = 0; i < apt.length; i++) {
      if (apt[i] === apartment) {
        for (let j = 0; j < floor.length; j++) {
          if (floor[j] === fromFloor) {
            if (i > 6) {
              return (nr += 3);
            } else if (i >= 4) {
              return (nr += 2);
            } else if (i > 2) {
              if (j > 5) {
                return (nr += 2);
              } else return (nr += 1);
            } else if (i >= 1) {
              if (j > 4) {
                return (nr += 1);
              } else return nr;
            } else if (i === 0) {
              if (j === 6) {
                return (nr += 1);
              } else return nr;
            } else return nr;
          }
        }
      }
    }
    return nr;
  };

  useEffect(() => {
    const searchRate = (selectedDay, data) => {
      let dateFormat = moment(selectedDay).format("MM/DD/YYYY");
      for (var i = 0; i < data.length; i++) {
        let renderedDay = data[i].date;
        if (renderedDay && renderedDay === dateFormat) {
          dispatch(setRates(data[i].rates));
          return;
        }
      }
    };

    searchRate(date, ratesFromDb);

    if (toHouseType === "") {
      dispatch(
        setCrewSize(getCrewSizeLoadingUnloading(movingSize, fromHouseType))
      );
    } else if (fromHouseType === "") {
      dispatch(
        setCrewSize(getCrewSizeLoadingUnloading(movingSize, toHouseType))
      );
    } else {
      dispatch(
        setCrewSize(getCrewSize(movingSize, fromHouseType, toHouseType))
      );
    }
  }, [movingSize, fromHouseType, toHouseType, dispatch, date, ratesFromDb]);

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

  const estimateJobTime = () => {
    let travelTimeSum = travelTime.reduce((a, b) => a + b);
    if (isInsideMove(movingService) || isMovingWithStorage(movingService))
      travelTimeSum = travelTime[0] * 2;

    let averageLabourTime = averageTime[movingSize];
    if (isLoading(movingService))
      averageLabourTime = averageTime[movingSize] * 0.75;
    if (isUnloading(movingService) || isPacking(movingService))
      averageLabourTime = averageTime[movingSize] * 0.5;
    if (isInsideMove(movingService))
      averageLabourTime = averageTime[movingSize] * 0.4;
    if (isMovingWithStorage(movingService)) {
      // averageLabourTime = averageTime[movingSize] * 0.8;
      travelTimeSum = travelTime[0] * 2;
    }

    let totalTimeInMinutes = 0;
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
        travelTimeSum +
        (isMovingWithStorage(movingService) ? 0 : timeBetween);
    }
    // console.log("travelTime", travelTimeSum);
    // console.log("labour", averageLabourTime);
    // console.log("tt-->minutes", totalTimeInMinutes);
    let totalTimeInHours = roundTime(totalTimeInMinutes / 60);
    console.log(totalTimeInHours);
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

  const getRate = (crewSize) => {
    if (crewSize === 5) return parseInt(rates[2]) + 40;
    if (crewSize === 4) return parseInt(rates[2]);
    if (crewSize === 3) return parseInt(rates[1]);
    if (crewSize === 2) return parseInt(rates[0]);
  };

  const estimateQuote = () => {
    let estimateQuoteArray = [];
    if (isFlatRate) {
      estimateQuoteArray = [estimateJobTime()[0] * getRate(crewSize)];
    } else {
      estimateQuoteArray = [
        estimateJobTime()[0] * getRate(crewSize),
        estimateJobTime()[1] * getRate(crewSize),
      ];
    }

    return estimateQuoteArray;
  };

  // console.log("travel", travelTime);
  // console.log("between", timeBetween);
  // console.log("service", movingService);
  // console.log("rates", rates);
  // console.log("quote", estimateQuote());
  // console.log("time", estimateJobTime());

  return (
    <Fade in={true} mountOnEnter unmountOnExit>
      <div>
        <MovingStorageQuote
          movingService={movingService}
          movingSize={movingSize}
          fromHouseType={fromHouseType}
          toHouseType={toHouseType}
          distance={distance}
          origin={origin}
          destination={destination}
          crewSize={crewSize}
          rate={getRate(crewSize)}
          estimateJobTime={estimateJobTime}
          travelTime={travelTime}
          estimateQuote={estimateQuote}
          isMovingWithStorage={isMovingWithStorage(movingService)}
        />

        <Grid
          container
          spacing={isMd ? 2 : 1}
          classes={{ root: classes.buttonsContainer }}
        >
          <Grid item xs={6}>
            <Button
              color="primary"
              variant="outlined"
              fullWidth
              onClick={() => handleBack()}
              // disabled={!formik.isValid}
            >
              Back
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => {
                dispatch(setRate(getRate(crewSize)));
                dispatch(setEstimateQuote(estimateQuote()));
                dispatch(setEstimateTime(estimateJobTime()));
                handleNext();
              }}
              disableElevation
              // disabled={!formik.isValid}
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </div>
    </Fade>
  );
};

export default ThirdStep;
