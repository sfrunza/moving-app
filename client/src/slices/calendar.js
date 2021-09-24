import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  events: [],
  event: null,
  isModalOpen: false,
  selectedEventId: null,
  selectedRange: null,
};

const slice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    getEvents(state, action) {
      state.events = action.payload;
    },
    getEvent(state, action) {
      state.event = action.payload;
    },
    createEvent(state, action) {
      const { event } = action.payload;

      state.events.push(event);
    },
    selectEvent(state, action) {
      const { eventId = null } = action.payload;

      state.isModalOpen = true;
      state.selectedEventId = eventId;
    },
    updateEvent(state, action) {
      const event = action.payload;
      state.event = action.payload;
      state.events = state.events.map((ev) => {
        if (ev.id === event.id) {
          return event;
        }
        return ev;
      });
    },
    deleteEvent(state, action) {
      const { eventId } = action.payload;

      state.events = state.events.filter((event) => event.id !== eventId);
    },
    selectRange(state, action) {
      const { start, end } = action.payload;

      state.isModalOpen = true;
      state.selectedRange = {
        start,
        end,
      };
    },
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
      state.selectedEventId = null;
      state.selectedRange = null;
    },
  },
});

export const { reducer } = slice;

export const getEvents = () => async (dispatch) => {
  const response = await axios.get("/api/v1/jobs");
  dispatch(slice.actions.getEvents(response.data));
};

export const getEvent = (id) => async (dispatch) => {
  const response = await axios.get(`/api/v1/jobs/${id}`);
  dispatch(slice.actions.getEvent(response.data));
};

export const cleanEvent = () => async (dispatch) => {
  dispatch(slice.actions.getEvent(null));
};

export const createEvent = (data) => async (dispatch) => {
  const response = await axios.post("/api/v1/events/new", data);
  dispatch(slice.actions.createEvent(response.data));
};

export const selectEvent = (eventId) => async (dispatch) => {
  dispatch(slice.actions.selectEvent({ eventId }));
};

export const updateEvent = (eventId, update) => async (dispatch) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(update),
  };
  await fetch(`/api/v1/jobs/${eventId}`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      dispatch(slice.actions.updateEvent(data));
    });
};

export const deleteEvent = (eventId) => async (dispatch) => {
  await axios.post("/api/v1/events/remove", {
    eventId,
  });
  dispatch(slice.actions.deleteEvent({ eventId }));
};

export const selectRange = (start, end) => (dispatch) => {
  dispatch(
    slice.actions.selectRange({
      start: start.getTime(),
      end: end.getTime(),
    })
  );
};

export const openModal = () => (dispatch) => {
  dispatch(slice.actions.openModal());
};

export const closeModal = () => (dispatch) => {
  dispatch(slice.actions.closeModal());
};

export default slice;
