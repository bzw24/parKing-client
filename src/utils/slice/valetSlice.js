import { createSlice }from "@reduxjs/toolkit";
const initialState = {
  time: 13,
  reservations: [],
  reservationDetails: {},
  garage_id: 1,
  date: "",
}
export const valetSlice = createSlice({
  name: "valet",
  initialState,
  reducers: {
    setTime: (state) => {
      state.time = new Date().getHours();
    },
    setReservations: (state, action) => {
      state.reservations = action.payload;
    },
    setReservtionDetails: (state, action) => {
      state.reservationDetails = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    }
  },
});

export const { setTime, setReservations, setReservationDetails, setDate } = valetSlice.actions;
export default valetSlice.reducer;