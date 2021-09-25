import { combineReducers } from "@reduxjs/toolkit";
import { reducer as themeReducer } from "src/slices/theme";
import { reducer as authReducer } from "src/slices/auth";
import { reducer as customersReducer } from "src/slices/customers";
import { reducer as bookingReducer } from "src/slices/booking";
import { reducer as calendarReducer } from "src/slices/calendar";
import { reducer as ratesReducer } from "src/slices/rates";
import { reducer as employeesReducer } from "src/slices/employees";

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  customers: customersReducer,
  booking: bookingReducer,
  calendar: calendarReducer,
  rates: ratesReducer,
  employees: employeesReducer,
});

export default rootReducer;
