import React from "react";
import CalendarWithRates from "src/components/CalendarWithRates";

const DateChange = ({ ...rest }) => {
  return (
    <CalendarWithRates
      inputVariant="outlined"
      size="small"
      orientation="portrait"
      variant="static"
      disableToolbar
      autoOk
      format="MMMM DD, YYYY"
      // maxDate={new Date().setMonth(new Date().getMonth() + 3)}
      disablePast
      fullWidth
      {...rest}
    />
  );
};

export default DateChange;
