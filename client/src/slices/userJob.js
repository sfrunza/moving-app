import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  job: {},
  customer: {},
  title: null,
  start: null,
  end: null,
  price: null,
  duration: null,
  details: null,
  step: 0,
  isSubmitting: false,
  submitError: false,
};

const slice = createSlice({
  name: "userJob",
  initialState,
  reducers: {
    submitRequest(state) {
      state.isSubmitting = true;
    },
    submitSuccess(state) {
      state.isSubmitting = false;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
    setDetails(state, action) {
      state.details = action.payload;
    },
    setStart(state, action) {
      state.start = action.payload;
    },
    setDuration(state, action) {
      state.duration = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
    setCustomer(state, action) {
      state.customer = action.payload;
    },
    setSubmitBooking(state, action) {
      // state.customer = action.payload;
    },
    handleNext(state) {
      state.step = state.step + 1;
    },
    handlePrev(state) {
      state.step = state.step - 1;
    },
  },
});

export const { reducer } = slice;

export const setUser = (user) => (dispatch) => {
  dispatch(slice.actions.setUser(user));
};
export const setTitle = (title) => (dispatch) => {
  dispatch(slice.actions.setTitle(title));
};
export const setDetails = (details) => (dispatch) => {
  dispatch(slice.actions.setDetails(details));
};
export const setStart = (start) => (dispatch) => {
  dispatch(slice.actions.setStart(start));
};
export const setDuration = (duration) => (dispatch) => {
  dispatch(slice.actions.setDuration(duration));
};
export const setPrice = (price) => (dispatch) => {
  dispatch(slice.actions.setPrice(price));
};
export const setCustomer = (customer) => (dispatch) => {
  dispatch(slice.actions.setCustomer(customer));
};
export const setSubmitBooking =
  (customer, user, title, duration, price, start) => (dispatch) => {
    dispatch(slice.actions.submitRequest());
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer),
    };
    fetch("api/v1/customers", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let customerId = data.customer.id;
        let event = {
          user_id: user.id,
          customer_id: customerId,
          title: title,
          start: start,
          price: price,
          duration: duration,
        };
        const requestEvent = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(event),
        };
        fetch("api/v1/events", requestEvent)
          .then((response) => response.json())
          .then((data) => {
            dispatch(slice.actions.submitSuccess());
          })
          .catch((error) => console.log("api errors:", error));
      });
  };
export const handleNext = () => (dispatch) => {
  dispatch(slice.actions.handleNext());
};
export const handlePrev = () => (dispatch) => {
  dispatch(slice.actions.handlePrev());
};

export default slice;
