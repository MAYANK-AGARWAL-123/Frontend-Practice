import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.push(action.payload);
    },
    cancelBooking: (state, action) => {
      return state.filter(booking => booking.id !== action.payload);
    }
  }
});

export const { addBooking, cancelBooking } = bookingsSlice.actions;
export default bookingsSlice.reducer;