import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  date: null,
  time: "08:00:00",
  deliveryDate: null,
  fromZip: "",
  toZip: "",
  movingService: "Moving",
  check: false,
  fromAddress: "",
  toAddress: "",
  fromApt: "",
  toApt: "",
  origin: "",
  destination: "",
  movingSize: "",
  fromHouseType: "",
  toHouseType: "",
  crewSize: null,
  travelTime: [20, 20],
  timeBetween: 15,
  rates: [],
  rate: null,
  estimateQuote: [],
  estimateTime: [],
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  additionalInfo: "",
  isLoading: false,
  getError: false,
};

const slice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setDate(state, action) {
      state.date = action.payload;
    },
    setDeliveryDate(state, action) {
      state.deliveryDate = action.payload;
    },
    setFromZip(state, action) {
      state.fromZip = action.payload;
    },
    setToZip(state, action) {
      state.toZip = action.payload;
    },
    setFromAddress(state, action) {
      state.fromAddress = action.payload;
    },
    setToAddress(state, action) {
      state.toAddress = action.payload;
    },
    setFromApt(state, action) {
      state.fromApt = action.payload;
    },
    setToApt(state, action) {
      state.toApt = action.payload;
    },
    setOrigin(state, action) {
      state.origin = action.payload;
    },
    setDestination(state, action) {
      state.destination = action.payload;
    },
    setMovingSize(state, action) {
      state.movingSize = action.payload;
    },
    setFromHouseType(state, action) {
      state.fromHouseType = action.payload;
    },
    setToHouseType(state, action) {
      state.toHouseType = action.payload;
    },
    setCrewSize(state, action) {
      state.crewSize = action.payload;
    },
    setTravelTime(state, action) {
      state.travelTime = action.payload;
    },
    setTimeBetween(state, action) {
      state.timeBetween = action.payload;
    },
    setRates(state, action) {
      state.rates = action.payload;
    },
    setRate(state, action) {
      state.rate = action.payload;
    },
    setEstimateQuote(state, action) {
      state.estimateQuote = action.payload;
    },
    setEstimateTime(state, action) {
      state.estimateTime = action.payload;
    },
    setMovingService(state, action) {
      state.movingService = action.payload;
    },
    setCheck(state, action) {
      state.check = action.payload;
    },
    setFirstName(state, action) {
      state.firstName = action.payload;
    },
    setLastName(state, action) {
      state.lastName = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPhone(state, action) {
      state.phone = action.payload;
    },
    setAdditionalInfo(state, action) {
      state.additionalInfo = action.payload;
    },
    setSubmitRequest(state, action) {
      state.isLoading = true;
      state.getError = false;
    },
    setSubmitSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
    },
    setSubmitFailure(state, action) {
      state.isLoading = false;
      state.getError = false;
      state.error = action.payload;
    },
  },
});

export const { reducer } = slice;

export const setDate = (date) => (dispatch) => {
  dispatch(slice.actions.setDate(date));
};
export const setDeliveryDate = (date) => (dispatch) => {
  dispatch(slice.actions.setDeliveryDate(date));
};
export const setFromZip = (zip) => (dispatch) => {
  dispatch(slice.actions.setFromZip(zip));
};
export const setToZip = (zip) => (dispatch) => {
  dispatch(slice.actions.setToZip(zip));
};
export const setFromAddress = (address) => (dispatch) => {
  dispatch(slice.actions.setFromAddress(address));
};
export const setToAddress = (address) => (dispatch) => {
  dispatch(slice.actions.setToAddress(address));
};
export const setFromApt = (apt) => (dispatch) => {
  dispatch(slice.actions.setFromApt(apt));
};
export const setToApt = (apt) => (dispatch) => {
  dispatch(slice.actions.setToApt(apt));
};
export const setOrigin = (origin) => (dispatch) => {
  dispatch(slice.actions.setOrigin(origin));
};
export const setDestination = (destination) => (dispatch) => {
  dispatch(slice.actions.setDestination(destination));
};
export const setMovingSize = (movingSize) => (dispatch) => {
  dispatch(slice.actions.setMovingSize(movingSize));
};
export const setFromHouseType = (fromHouseType) => (dispatch) => {
  dispatch(slice.actions.setFromHouseType(fromHouseType));
};
export const setToHouseType = (toHouseType) => (dispatch) => {
  dispatch(slice.actions.setToHouseType(toHouseType));
};
export const setCrewSize = (crewSize) => (dispatch) => {
  dispatch(slice.actions.setCrewSize(crewSize));
};
export const setTravelTime = (travelTime) => (dispatch) => {
  dispatch(slice.actions.setTravelTime(travelTime));
};
export const setTimeBetween = (timeBetween) => (dispatch) => {
  dispatch(slice.actions.setTimeBetween(timeBetween));
};
export const setRates = (rates) => (dispatch) => {
  dispatch(slice.actions.setRates(rates));
};
export const setRate = (rate) => (dispatch) => {
  dispatch(slice.actions.setRate(rate));
};
export const setEstimateQuote = (quote) => (dispatch) => {
  dispatch(slice.actions.setEstimateQuote(quote));
};
export const setEstimateTime = (time) => (dispatch) => {
  dispatch(slice.actions.setEstimateTime(time));
};

export const setMovingService = (service) => (dispatch) => {
  dispatch(slice.actions.setMovingService(service));
};
export const setCheck = (check) => (dispatch) => {
  dispatch(slice.actions.setCheck(check));
};

export const setFirstName = (name) => (dispatch) => {
  dispatch(slice.actions.setFirstName(name));
};
export const setLastName = (name) => (dispatch) => {
  dispatch(slice.actions.setLastName(name));
};
export const setEmail = (email) => (dispatch) => {
  dispatch(slice.actions.setEmail(email));
};
export const setPhone = (phone) => (dispatch) => {
  dispatch(slice.actions.setPhone(phone));
};
export const setAdditionalInfo = (info) => (dispatch) => {
  dispatch(slice.actions.setAdditionalInfo(info));
};
// export const setDuration = (duration) => (dispatch) => {
//   dispatch(slice.actions.setDuration(duration));
// };
// export const setPrice = (price) => (dispatch) => {
//   dispatch(slice.actions.setPrice(price));
// };
// export const setCustomer = (customer) => (dispatch) => {
//   dispatch(slice.actions.setCustomer(customer));
// };

export const handleNext = () => (dispatch) => {
  dispatch(slice.actions.handleNext());
};
export const handlePrev = () => (dispatch) => {
  dispatch(slice.actions.handlePrev());
};

export const submitRequest = (data) => (dispatch) => {
  dispatch(slice.actions.setSubmitRequest());
  var user = data.user;
  axios
    .post("api/v1/users", { user }, { withCredentials: true })
    .then((response) => {
      let userId = response.data.user.id;
      var job = data.job;
      job.user_id = userId;
      axios
        .post("api/v1/jobs", { job })
        .then((response) => {
          let jobId = response.data.job.id;
          var origin = data.origin;
          var destination = data.destination;
          origin.job_id = jobId;
          destination.job_id = jobId;
          axios.post(`api/v1/jobs/${jobId}/origins`, { origin });
          axios.post(`api/v1/jobs/${jobId}/destinations`, { destination });
        })
        .catch((error) =>
          dispatch(slice.actions.setSubmitFailure(response.data.errors))
        );
    })
    .catch((error) => dispatch(slice.actions.setSubmitFailure(error.message)));
};

export default slice;
