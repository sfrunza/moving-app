import React, { useState, useEffect, useCallback } from "react";
import "react-nice-dates/build/style.css";
import moment from "moment";
import DayTimePicker from "src/components/dayTimePicker";

function Form() {
  const [isScheduling, setIsScheduling] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);
  const [scheduleErr, setScheduleErr] = useState("");

  const [events, setEvents] = useState(null);

  // const getUsers = useCallback(() => {
  //   axios.get("/api/v1/events").then((response) => {
  //     if (isMountedRef.current) {
  //       let data = response.data;
  //       setEvents(data);
  //     }
  //   });
  // }, [isMountedRef]);

  // useEffect(() => {
  //   getUsers();
  // }, [getUsers, JSON.stringify(events)]);

  //   function searchDateAndTime(dateKey, timeKey, myArray) {
  //     for (var i = 0; i < myArray.length; i++) {
  //       if (myArray[i].date === dateKey && myArray[i].time === timeKey) {
  //         return myArray[i];
  //       }
  //     }
  //   }

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

    const theDate = moment(slotTime).format("dddd MMM Do, YYYY");
    // var resultObject = searchDateAndTime(
    //   theDate,
    //   moment(slotTime).format("HH:mm:ss"),
    //   events
    // );

    var resultObject = null;

    if (!resultObject) {
      const isValid =
        slotTime.getTime() > morningTime.getTime() &&
        slotTime.getTime() < eveningTime.getTime();
      return isValid;
    } else {
      let timeFound = resultObject.time.split(":");
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

  const handleScheduled = (date) => {
    // setFormState({
    //   ...formState,
    //   values: {
    //     ...formState.values,
    //     date: moment(date).format("dddd MMM Do, YYYY"),
    //     time: moment(date).format("HH:mm:ss"),
    //   },
    // });
    // onNext(1);
  };

  //   if (!events) {
  //     return null;
  //   }

  return (
    <DayTimePicker
      timeSlotSizeMinutes={60}
      timeSlotValidator={timeSlotValidator}
      isLoading={isScheduling}
      isDone={isScheduled}
      err={scheduleErr}
      onConfirm={handleScheduled}
      confirmText="Contact Info"
    />
  );
}
export default Form;
