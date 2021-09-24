import { createSlice } from "@reduxjs/toolkit";

const getLocalStorage = () => {
  let theme = localStorage.getItem("dark", "false");
  if (theme) {
    return JSON.parse(localStorage.getItem("dark"));
  } else {
    return null;
  }
};

const initialState = {
  isDark: getLocalStorage(),
};

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    handleThemeChange(state) {
      state.isDark = !state.isDark;
    },
  },
});

export const { reducer } = slice;

export const handleThemeChange = () => (dispatch) => {
  dispatch(slice.actions.handleThemeChange());
};

export default slice;
