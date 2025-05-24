import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from './api';
import authReducer from '../features/auth/authSlice';
import watchlistReducer from '../features/watchlist/watchlistSlice';
import bookingsReducer from '../features/bookings/bookingsSlice';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    auth: authReducer,
    watchlist: watchlistReducer,
    bookings: bookingsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware)
});