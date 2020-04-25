import React, { useState } from "react";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const RateIndex = () => {
  const [date, changeDate] = useState();

  return(
    <div style={{ marginTop: '3rem' }}>
      <DatePicker
        selected={date}
        onChange={changeDate}
        monthsShown={6}
        inline
      />
    </div>
  );
};

export default RateIndex;
