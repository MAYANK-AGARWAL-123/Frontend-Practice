import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  genre: 'all',
  readStatus: 'all',
  searchQuery: ''
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setGenreFilter: (state, action) => {
      state.genre = action.payload;
    },
    setReadStatusFilter: (state, action) => {
      state.readStatus = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    }
  }
});

export const { setGenreFilter, setReadStatusFilter, setSearchQuery } = filtersSlice.actions;
export const selectFilters = state => state.filters;
export default filtersSlice.reducer;