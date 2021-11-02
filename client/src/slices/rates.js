import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  error: "",
  isLoading: false,
  getError: false,
  rates: null,
};

const slice = createSlice({
  name: "rates",
  initialState,
  reducers: {
    getRatesRequest(state) {
      state.isLoading = true;
      state.getError = false;
    },
    getRatesSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
      state.rates = action.payload;
    },
    getRatesFailure(state, action) {
      state.isLoading = false;
      state.getError = false;
      state.error = action.payload;
    },
    updateRates(state, action) {
      state.isLoading = false;
      state.getError = false;
      state.rates.push(action.payload);
    },
    resetRates(state, action) {
      state.rates = null;
    },
  },
});

export const { reducer } = slice;

export const getRates = () => (dispatch) => {
  dispatch(slice.actions.getRatesRequest());
  axios
    .get("/api/v1/rates")
    .then((response) => {
      if (response.data.status === undefined) {
        dispatch(slice.actions.getRatesSuccess(response.data));
      } else {
        dispatch(slice.actions.getRatesFailure(response.data.errors));
      }
    })
    .catch((error) => {
      dispatch(slice.actions.getRatesFailure(error.message));
    });
};

export const resetRates = () => (dispatch) => {
  dispatch(slice.actions.resetRates());
};

export const saveRate = (data) => async (dispatch) => {
  dispatch(slice.actions.getRatesRequest());
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  await fetch("/api/v1/rates", requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(slice.actions.updateRates(data.rate));
    })
    .catch((error) => {
      dispatch(slice.actions.getRatesFailure(error.message));
    });
};

export default slice;
