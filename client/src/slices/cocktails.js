import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cocktails: null,
  status: true,
  querry: "",
  errors: [],
};

const slice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {
    getCocktails(state, action) {
      state.cocktails = action.payload;
    },
    setLoading(state, action) {
      state.status = action.payload;
    },
    setQuerry(state, action) {
      state.querry = action.payload;
    },
    setErrors(state, action) {
      state.errors.push(action.payload);
    },
  },
});

export const { reducer } = slice;

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const getCocktails = (querry) => async (dispatch) => {
  dispatch(slice.actions.setLoading(true));
  try {
    const response = await fetch(API_URL + querry);
    const data = await response.json();
    const { drinks } = data;
    if (drinks) {
      dispatch(slice.actions.getCocktails(drinks));
    } else {
      dispatch(slice.actions.getCocktails(null));
      dispatch(slice.actions.setErrors(data.error));
    }
    dispatch(slice.actions.setLoading(false));
  } catch (error) {
    console.log(error);
    dispatch(slice.actions.setErrors(error));
    dispatch(slice.actions.setLoading(false));
  }
};

export const setLoading = (status) => (dispatch) => {
  dispatch(slice.actions.setLoading(status));
};

export const setQuerry = (data) => (dispatch) => {
  dispatch(slice.actions.setQuerry(data));
};
export const setErrors = (data) => (dispatch) => {
  dispatch(slice.actions.setErrors(data));
};

export default slice;
