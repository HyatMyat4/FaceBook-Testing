import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const api_key = '69a65b17b82a689fb8dfbe96fb1ccde0';  
export const BaseApi = createApi ({
    reducerPath: 'BaseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
     
    }),
    endpoints: (builder) => ({
      getPopularMovies : builder.query({ query: ({pageId}) => `/movie/popular?api_key=${api_key}&language=en-US&page=${pageId}`}),  
      getNowPlaying : builder.query({ query: ({pageId}) =>   `/movie/now_playing?api_key=${api_key}&language=en-US&page=${pageId}`}),
      getTv: builder.query({ query: ({pageId}) => `/tv/top_rated?api_key=${api_key}&language=en-US&page=${pageId}` })
    }),
});

export const {
    useGetPopularMoviesQuery,
    useGetNowPlayingQuery,
    useGetTvQuery
} = BaseApi;



