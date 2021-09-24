import { combineReducers } from "@reduxjs/toolkit";
import { reducer as themeReducer } from "src/slices/theme";
import { reducer as authReducer } from "src/slices/auth";
import { reducer as cocktailsReducer } from "src/slices/cocktails";
import { reducer as customersReducer } from "src/slices/customers";
import { reducer as bookingReducer } from "src/slices/booking";
import { reducer as calendarReducer } from "src/slices/calendar";
import { reducer as ratesReducer } from "src/slices/rates";

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  cocktails: cocktailsReducer,
  customers: customersReducer,
  booking: bookingReducer,
  calendar: calendarReducer,
  rates: ratesReducer,
});

export default rootReducer;
