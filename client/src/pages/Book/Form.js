import React, { useState, useEffect, useCallback } from "react";
import "react-nice-dates/build/style.css";
import moment from "moment";
import DayTimePicker from "src/components/dayTimePicker";
import axios from "axios";
import { useSelector } from "src/store";

function Form() {
  const [events, setEvents] = useState(null);
  const { user } = useSelector((state) => state.booking);

  const getEvents = useCallback(() => {
    axios.get("/api/v1/events").then((response) => {
      if (response.data) {
        let data = response.data;
        setEvents(data);
      }
    });
  }, []);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  const searchDateAndTime = (startKey, myArray) => {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].start === startKey && user.id === myArray[i].user.id) {
        return myArray[i];
      }
    }
  };

  const timeSlotValidator = (slotTime) => {
    const eveningTime = new Date(
      slotTime.getFullYear(),
      slotTime.getMonth(),
      slotTime.getDate(),
      19,
      0,
      0
    );
    const morningTime = new Date(
      slotTime.getFullYear(),
      slotTime.getMonth(),
      slotTime.getDate(),
      8,
      0,
      0
    );

    var resultObject = searchDateAndTime(
      moment(slotTime).format("YYYY-MM-DDTHH:mm:ss"),
      events
    );

    if (!resultObject) {
      const isValid =
        slotTime.getTime() > morningTime.getTime() &&
        slotTime.getTime() < eveningTime.getTime();
      return isValid;
    } else {
      let timeFound = moment(resultObject.start).format("HH:mm:ss").split(":");
      const bookedTime = new Date(
        slotTime.getFullYear(),
        slotTime.getMonth(),
        slotTime.getDate(),
        timeFound[0],
        timeFound[1],
        timeFound[2]
      );
      const isValid =
        slotTime.getTime() > morningTime.getTime() &&
        slotTime.getTime() < eveningTime.getTime() &&
        slotTime.getTime() !== bookedTime.getTime();
      return isValid;
    }
  };

  if (!events) {
    return null;
  }

  return (
    <DayTimePicker
      timeSlotSizeMinutes={60}
      timeSlotValidator={timeSlotValidator}
    />
  );
}
export default Form;
