import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://api.themoviedb.org/3/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    searchMovies: builder.query({
      query: (query) => `search/movie?query=${query}&api_key=${process.env.REACT_APP_TMDB_KEY}`,
      transformResponse: (response) => response.results
    }),
    getMovieDetails: builder.query({
      query: (id) => `movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    }),
    // Add more endpoints as needed
  })
});

export const { 
  useSearchMoviesQuery, 
  useGetMovieDetailsQuery 
} = moviesApi;