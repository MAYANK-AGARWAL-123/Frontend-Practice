import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      state.push(action.payload);
    },
    removeFromWatchlist: (state, action) => {
      return state.filter(movie => movie.id !== action.payload);
    },
    clearWatchlist: () => []
  }
});

export const { addToWatchlist, removeFromWatchlist, clearWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;