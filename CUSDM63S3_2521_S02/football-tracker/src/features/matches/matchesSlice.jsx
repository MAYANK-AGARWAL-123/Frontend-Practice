import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://jsonmock.hackerrank.com/api/football_matches?page=2';

export const fetchMatches = createAsyncThunk(
  'matches/fetchMatches',
  async () => {
    const response = await axios.get(API_URL);
    return response.data.data;
  }
);

const initialState = {
  isLoading: false,
  isError: false,
  footballMatches: [],
  favorites: [],
  filters: {
    teamName: '',
    date: '',
    outcome: ''
  }
};

const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(match => match.id !== action.payload);
    },
    setTeamFilter: (state, action) => {
      state.filters.teamName = action.payload;
    },
    setDateFilter: (state, action) => {
      state.filters.date = action.payload;
    },
    setOutcomeFilter: (state, action) => {
      state.filters.outcome = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.isLoading = false;
        state.footballMatches = action.payload;
      })
      .addCase(fetchMatches.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  }
});

export const { 
  addToFavorites, 
  removeFromFavorites,
  setTeamFilter,
  setDateFilter,
  setOutcomeFilter
} = matchesSlice.actions;

export const selectAllMatches = (state) => state.matches.footballMatches;
export const selectFavorites = (state) => state.matches.favorites;
export const selectFilters = (state) => state.matches.filters;
export const selectLoadingStatus = (state) => state.matches.isLoading;
export const selectErrorStatus = (state) => state.matches.isError;

export default matchesSlice.reducer;