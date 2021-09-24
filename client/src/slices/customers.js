import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  customers: null,
  customer: null,
  jobs: [],
  customerJobs: [],
  customerOrigins: [],
  customerDestinations: [],
  status: true,
  errors: [],
  isUpdating: false,
  updateError: false,
  uError: "",
};

const slice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    getCustomers(state, action) {
      state.customers = action.payload;
    },
    getCustomer(state, action) {
      state.customer = action.payload;
    },
    getJobs(state, action) {
      state.jobs = action.payload;
    },
    getCustomerOrigins(state, action) {
      state.customerOrigins = action.payload;
    },
    getCustomerDestinations(state, action) {
      state.customerDestinations = action.payload;
    },
    getCustomerJobs(state, action) {
      state.customerJobs = action.payload;
    },
    setLoading(state, action) {
      state.status = action.payload;
    },
    setErrors(state, action) {
      state.errors.push(action.payload);
    },
    updateRequest(state) {
      state.isUpdating = true;
      state.updateError = false;
    },
    updateSuccess(state, action) {
      state.isUpdating = false;
      state.customer = action.payload;
    },
    updateFailure(state, action) {
      state.isUpdating = false;
      state.updateError = true;
      state.uError = action.payload;
    },
  },
});

export const { reducer } = slice;

export const getCustomers = () => async (dispatch) => {
  dispatch(slice.actions.setLoading(true));
  try {
    const response = await axios.get("/api/v1/users");
    const data = await response.data;
    if (response.status === 200) {
      let customers = data.users.filter((user) => user.customer);
      dispatch(slice.actions.getCustomers(customers));
    } else {
      dispatch(slice.actions.getCustomers(null));
      dispatch(slice.actions.setErrors(data.message));
    }
    dispatch(slice.actions.setLoading(false));
  } catch (error) {
    console.log(error);
    dispatch(slice.actions.setErrors(error.stack));
    dispatch(slice.actions.setLoading(false));
  }
};

export const getCustomer = (customerId) => async (dispatch) => {
  dispatch(slice.actions.setLoading(true));
  try {
    const response = await axios.get(`/api/v1/users/${customerId}`);
    const data = await response.data;
    if (response.data) {
      dispatch(slice.actions.getCustomer(data.user));
      dispatch(slice.actions.getCustomerJobs(data.jobs));
      dispatch(slice.actions.getCustomerOrigins(data.origins));
      dispatch(slice.actions.getCustomerDestinations(data.destinations));
    } else {
      dispatch(slice.actions.getCustomer(null));
      dispatch(slice.actions.setErrors(data.message));
    }
    dispatch(slice.actions.setLoading(false));
  } catch (error) {
    console.log(error);
    dispatch(slice.actions.setErrors(error.stack));
    dispatch(slice.actions.setLoading(false));
  }
};

export const getCustomerJobs = (customerId) => async (dispatch) => {
  dispatch(slice.actions.setLoading(true));
  try {
    const response = await axios.get("/api/v1/jobs");
    const data = await response.data;
    if (response.data) {
      let data = response.data.filter((job) => job.user.id === customerId);
      dispatch(slice.actions.getCustomerJobs(data));
    } else {
      dispatch(slice.actions.setErrors(data.message));
    }
    dispatch(slice.actions.setLoading(false));
  } catch (error) {
    console.log(error);
    dispatch(slice.actions.setErrors(error.stack));
    dispatch(slice.actions.setLoading(false));
  }
};

export const updateCustomer = (customerId, update) => async (dispatch) => {
  dispatch(slice.actions.updateRequest());
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(update),
  };
  await fetch(`/api/v1/users/${customerId}`, requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(slice.actions.updateSuccess(data.user));
    })
    .catch((error) => {
      dispatch(slice.actions.updateFailure(error.message));
    });
};

export const cleanCustomer = () => async (dispatch) => {
  dispatch(slice.actions.getCustomer(null));
};

export const setLoading = (status) => (dispatch) => {
  dispatch(slice.actions.setLoading(status));
};
export const setErrors = (err) => (dispatch) => {
  dispatch(slice.actions.setErrors(err));
};

export default slice;
