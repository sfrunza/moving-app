import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import {
  Grid,
  Fade,
  useMediaQuery,
  Typography,
  Tooltip,
  Divider,
} from "@material-ui/core";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "src/store";
import ArrowRightIcon from "src/icons/ArrowRight";
import InformationCircle from "src/icons/InformationCircle";
import {
  setCrewSize,
  setEstimateQuote,
  setEstimateTime,
  setRate,
  setRates,
} from "src/slices/booking";
import moment from "moment";

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
  buttonsContainer: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
    justifyContent: "space-between",
  },
}));

const StyledGrid = withStyles((theme) => ({
  item: {
    display: "flex",
    alignItems: "flex-end",
  },
}))(Grid);

const averageTime = {
  "Room or less (partial move)": 0,
  "Studio apartment": 110,
  "1 Bedroom apartment": 120,
  "2 Bedroom apartment": 180,
  "2 Bedroom House/Townhouse": 240,
  "3+ Bedroom apartment": 360,
  "3 Bedroom House/Townhouse": 420,
  "4+ Bedroom House/Townhouse": 520,
  "Office / Commercial space": 300,
};

const averageFloorTime = {
  "elevator building": 40,
  "private house": 20,
  "storage unit": 20,
  "1st/Ground floor": 20,
  "2nd floor": 30,
  "3rd floor": 50,
  "4th floor": 70,
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

const MovingQuote = ({ handleBack, handleNext, ratesFromDb }) => {
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

  const estimateJobTime = () => {
    const travelTimeSum = travelTime.reduce((a, b) => a + b);
    let averageLabourTime = averageTime[movingSize];
    if (isLoading(movingService))
      averageLabourTime = averageTime[movingSize] * 0.75;
    if (isUnloading(movingService) || isPacking(movingService))
      averageLabourTime = averageTime[movingSize] * 0.5;
    if (isInsideMove(movingService))
      averageLabourTime = averageTime[movingSize] * 0.4;

    let totalTimeInMinutes = 0;
    if (fromHouseType === "") {
      totalTimeInMinutes =
        averageLabourTime + averageFloorTime[toHouseType] + travelTimeSum;
    } else if (toHouseType === "") {
      totalTimeInMinutes =
        averageLabourTime + averageFloorTime[fromHouseType] + travelTimeSum;
    } else {
      totalTimeInMinutes =
        averageLabourTime +
        averageFloorTime[fromHouseType] +
        averageFloorTime[toHouseType] +
        travelTimeSum +
        timeBetween;
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

  console.log("travel", travelTime);
  console.log("between", timeBetween);
  console.log("service", movingService);
  console.log("rates", rates);
  console.log("quote", estimateQuote());
  console.log("time", estimateJobTime());

  return (
    <Fade in={true} mountOnEnter unmountOnExit>
      <div>
        <Grid container spacing={2}>
          <StyledGrid item xs={12} style={{ display: "contents" }}>
            <Typography component="p" variant="body2">
              {movingService} a {movingSize}
            </Typography>
            {fromHouseType && (
              <Typography variant="body2" component="p">
                &nbsp;from {fromHouseType}
              </Typography>
            )}
            {toHouseType && (
              <Typography component="p" variant="body2">
                {" "}
                &nbsp;to {toHouseType}. Distance - {distance} miles.
              </Typography>
            )}
          </StyledGrid>
          {isFlatRate && (
            <StyledGrid item xs={12} style={{ marginTop: 8 }}>
              <Typography component="p" variant="body2">
                The FLAT RATE for this move starts from:
              </Typography>
            </StyledGrid>
          )}

          <StyledGrid item xs={12}>
            <Typography variant="button" classes={{ root: classes.location }}>
              {origin}
              {destination && <ArrowRightIcon className={classes.icon} />}
              {destination}
            </Typography>
          </StyledGrid>
          {!isFlatRate && (
            <>
              <StyledGrid item xs={6} md={6}>
                {crewSize} Movers Crew
              </StyledGrid>
              <StyledGrid item xs={6} md={6}>
                <Typography variant="button">${getRate(crewSize)}</Typography>
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
                  {travelTime[0]}/{travelTime[1]}{" "}
                </Typography>
                <Typography variant="body2" style={{ marginLeft: 4 }}>
                  {" "}
                  min.
                  <Tooltip
                    title="from/to Headquarter"
                    placement="top-end"
                    arrow
                  >
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
            </>
          )}
          {isFlatRate && (
            <>
              <StyledGrid
                item
                xs={6}
                md={6}
                style={{ marginTop: 16, marginBottom: 16 }}
              >
                {crewSize} Movers Crew
              </StyledGrid>
              <StyledGrid
                item
                xs={6}
                md={6}
                style={{ marginTop: 16, marginBottom: 16 }}
              >
                <Typography variant="h6">${estimateQuote()[0]}*</Typography>
              </StyledGrid>
            </>
          )}
          <Divider style={{ width: "100%", margin: "8px 0px" }} />
          {!isFlatRate && (
            <StyledGrid item xs={12}>
              <Typography variant="caption">
                Please note, this quote is just an estimate and provided for
                your convenience only. We give you a database average for
                generally similar moves. However, your final cost is based on
                hourly rate and actual time your move will take.
              </Typography>
            </StyledGrid>
          )}
          {isFlatRate && (
            <StyledGrid item xs={12}>
              <Typography variant="caption">
                Please note, the above information provides an estimated quote
                only and is subject to change. The final Flat Price will be
                determined based on actual inventory and specific moving loads.
              </Typography>
            </StyledGrid>
          )}
        </Grid>

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

export default MovingQuote;
