import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoggingIn: false,
  isLoggingOut: false,
  isVerifying: false,
  loginError: false,
  logoutError: false,
  isAuthenticated: false,
  verifyingError: false,
  isUpdating: false,
  updateError: false,
  user: {},
  uError: "",
  error: "",
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest(state) {
      state.isLoggingIn = true;
      state.loginError = false;
    },
    loginSuccess(state, action) {
      state.isLoggingIn = false;
      state.isAuthenticated = true;
      state.error = "";
      state.user = action.payload;
    },
    loginFailure(state, action) {
      state.isLoggingIn = false;
      state.isAuthenticated = false;
      state.loginError = true;
      state.error = action.payload;
    },
    logoutRequest(state) {
      state.isLoggingOut = true;
      state.logoutError = false;
    },
    logoutSuccess(state) {
      state.isLoggingOut = false;
      state.isAuthenticated = false;
      state.user = {};
    },
    logoutFailure(state) {
      state.isLoggingOut = false;
      state.logoutError = true;
    },
    verifyRequest(state) {
      state.isVerifying = true;
      state.verifyingError = false;
    },
    verifySuccess(state) {
      state.isVerifying = false;
    },
    verifyError(state, action) {
      state.isVerifying = false;
      state.error = action.payload;
      state.user = {};
    },
    setError(state, action) {
      state.error = action.payload;
    },
    updateRequest(state) {
      state.isUpdating = true;
      state.updateError = false;
    },
    updateSuccess(state, action) {
      state.isUpdating = false;
      state.user = action.payload;
    },
    updateFailure(state, action) {
      state.isUpdating = false;
      state.updateError = true;
      state.uError = action.payload;
    },
  },
});

export const { reducer } = slice;

export const loginUser = (user, history) => (dispatch) => {
  dispatch(slice.actions.loginRequest());
  axios
    .post("/users/sign_in", { user }, { withCredentials: true })
    .then((response) => {
      if (response.data.status === undefined) {
        dispatch(slice.actions.loginSuccess(response.data.current_user));
        history.push("/dashboard");
      } else {
        dispatch(slice.actions.loginFailure(response.data.errors));
      }
    })
    .catch((error) => {
      dispatch(slice.actions.loginFailure(error.message));
    });
};

export const logoutUser = (history) => (dispatch) => {
  dispatch(slice.actions.logoutRequest());
  axios
    .delete("/users/sign_out")
    .then((res) => {
      if (res.data.success) {
        dispatch(slice.actions.logoutSuccess());
      } else {
        dispatch(slice.actions.logoutFailure());
      }
    })
    .catch((error) => {
      dispatch(slice.actions.logoutFailure());
    });
};

export const updateUser = (userId, update) => async (dispatch) => {
  dispatch(slice.actions.updateRequest());
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(update),
  };
  await fetch(`/api/v1/users/${userId}`, requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(slice.actions.updateSuccess(data));
    })
    .catch((error) => {
      dispatch(slice.actions.updateFailure(error.message));
    });
};

export const verifyAuth = () => (dispatch) => {
  dispatch(slice.actions.verifyRequest());
  axios
    .get("/api/v1/users", { withCredentials: true })
    .then((response) => {
      if (response.data.current_user) {
        dispatch(slice.actions.loginSuccess(response.data.current_user));
      } else {
        dispatch(slice.actions.verifyError());
      }

      dispatch(slice.actions.verifySuccess());
    })
    .catch((error) => dispatch(slice.actions.verifyError(error.message)));
};

export const uploadProfilePicture = (formData, userId) => async (dispatch) => {
  const configurationObject = {
    method: "PUT",
    body: formData,
  };
  await fetch(`/api/v1/users/${userId}`, configurationObject)
    .then((r) => {
      return r.json();
    })
    .then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        // this is where I will dispatch an action creator function to update my store
        dispatch(slice.actions.updateSuccess(data));
      }
    })
    .catch((error) => dispatch(slice.actions.updateFailure(error.message)));
};
export default slice;
