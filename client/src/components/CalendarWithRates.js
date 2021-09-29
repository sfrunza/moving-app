import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DatePicker } from "@material-ui/pickers";
import moment from "moment";
import { useDispatch, useSelector } from "src/store";
import { getRates } from "src/slices/rates";

const useStyles = makeStyles(() => ({
  dateBox: {
    margin: "2px 4px",
    borderRadius: 8,
    border: "1px solid transparent",
    "& >.MuiPickersDay-current": {
      borderRadius: 12,
    },
    "& >.MuiPickersDay-daySelected": {
      borderRadius: 12,
    },
    "& >.MuiPickersDay-day": {
      margin: 0,
      width: 30,
      height: 30,
    },
  },
}));

const CalendarWithRates = ({ ...rest }) => {
  const classes = useStyles();

  const { rates, error } = useSelector((state) => state.rates);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRates());
  }, [dispatch]);

  // if (!rates || isLoading) return <div>Loading...</div>;
  if (error.length > 0) return <div>{error}</div>;

  const isSameDate = (date, rateDate) => {
    let dateFormat = moment(date).format("MM/DD/YYYY");
    return dateFormat === rateDate;
  };

  // const disableWeekends = (date) => {
  //   //diable date with regular rate example
  //   let fDate = moment(date).format("MM/DD/YYYY");
  //   for (var i = 0; i < data.length; i++) {
  //     let renderedDay = moment(data[i].date).format("MM/DD/YYYY");
  //     if (renderedDay && renderedDay === fDate) {
  //       return data[i].rates[0] === "120";
  //     }
  //   }
  // };

  return (
    <>
      {rates && (
        <DatePicker
          // shouldDisableDate={disableWeekends}
          renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => {
            let selectColor = "transparent";
            let selectBorderColor = "transparent";

            rates.map((item) => {
              let rate = item.rates[0] ? item.rates[0] : "120";
              if (isSameDate(day, item.date)) {
                if (rate === "120") {
                  selectColor = "rgb(0 186 93 / 25%)";
                  selectBorderColor = "rgb(0 186 93 / 10%)";
                }
                if (rate === "160") {
                  selectColor = "rgba(253 201 9 / 25%)";
                  selectBorderColor = "rgba(253 201 9 / 10%)";
                }
                if (rate === "200") {
                  selectColor = "rgba(251 0 9 / 25%)";
                  selectBorderColor = "rgba(253 153 9 / 10%)";
                }
              }
              return 0;
            });
            const style = {
              backgroundColor: selectColor,
              border: `1px solid ${selectBorderColor}`,
            };
            return (
              <Box
                className={classes.dateBox}
                style={isInCurrentMonth ? style : null}
              >
                {dayComponent}
              </Box>
            );
          }}
          {...rest}
        />
      )}
    </>
  );
};

export default CalendarWithRates;
