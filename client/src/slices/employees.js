import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: null,
  user: null,
  userJobs: [],
  status: true,
  errors: [],
  isUpdating: false,
  updateError: false,
  uError: "",
  isDeleting: false,
  deleteError: false,
  dError: "",
};

const slice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    getUsers(state, action) {
      state.users = action.payload;
    },
    addUser(state, action) {
      state.users.unshift(action.payload);
    },
    getUser(state, action) {
      state.user = action.payload;
    },
    getUserJobs(state, action) {
      state.userJobs = action.payload;
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
      state.user = action.payload;
    },
    updateFailure(state, action) {
      state.isUpdating = false;
      state.updateError = true;
      state.uError = action.payload;
    },
    deleteRequest(state) {
      state.isDeleting = true;
      state.deleteError = false;
    },
    deleteSuccess(state, action) {
      state.isDeleting = false;
      const { userId } = action.payload;
      state.users = state.users.filter((user) => user.id !== userId);
    },
    deleteFailure(state, action) {
      state.isDeleting = false;
      state.deleteError = true;
      state.dError = action.payload;
    },
  },
});

export const { reducer } = slice;

export const getUsers = () => async (dispatch) => {
  dispatch(slice.actions.setLoading(true));
  try {
    const response = await axios.get("/api/v1/users");
    const data = await response.data;
    if (response.status === 200) {
      let users = data.users;
      dispatch(slice.actions.getUsers(users));
    } else {
      dispatch(slice.actions.getUsers(null));
      dispatch(slice.actions.setErrors(data.message));
    }
    dispatch(slice.actions.setLoading(false));
  } catch (error) {
    console.log(error);
    dispatch(slice.actions.setErrors(error.stack));
    dispatch(slice.actions.setLoading(false));
  }
};

export const getUser = (userId) => async (dispatch) => {
  dispatch(slice.actions.setLoading(true));
  try {
    const response = await axios.get(`/api/v1/users/${userId}`);
    const data = await response.data;
    if (response.data) {
      dispatch(slice.actions.getUser(data));
      dispatch(slice.actions.getUserJobs(data.jobs));
    } else {
      dispatch(slice.actions.getUser(null));
      dispatch(slice.actions.getUserJobs(null));
      dispatch(slice.actions.setErrors(data.message));
    }
    dispatch(slice.actions.setLoading(false));
  } catch (error) {
    console.log(error);
    dispatch(slice.actions.setErrors(error.stack));
    dispatch(slice.actions.setLoading(false));
  }
};

export const addUser = (data) => async (dispatch) => {
  let user = data;
  await axios
    .post("api/v1/users", { user })
    .then((response) => {
      dispatch(slice.actions.addUser(response.data.user));
    })
    .catch((error) => {
      console.log(error.message);
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
      dispatch(slice.actions.updateSuccess(data.user));
    })
    .catch((error) => {
      dispatch(slice.actions.updateFailure(error.message));
    });
};

export const deleteUser = (userId) => async (dispatch) => {
  dispatch(slice.actions.deleteRequest());
  await axios
    .delete(`/api/v1/users/${userId}`)
    .then((resp) => {
      dispatch(slice.actions.deleteSuccess({ userId }));
    })
    .catch((error) => {
      dispatch(slice.actions.deleteFailure(error.message));
    });
};

export const cleanUser = () => async (dispatch) => {
  dispatch(slice.actions.getUser(null));
  dispatch(slice.actions.getUserJobs(null));
};
// export const cleanUserJobs = () => async (dispatch) => {
//   dispatch(slice.actions.getUserJobs(null));
// };

export const setLoading = (status) => (dispatch) => {
  dispatch(slice.actions.setLoading(status));
};
export const setErrors = (err) => (dispatch) => {
  dispatch(slice.actions.setErrors(err));
};

export default slice;
