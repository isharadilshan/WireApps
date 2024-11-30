import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
//constants
import {API_ENDPOINTS} from '@utils/constants';
//tags
import {FETCH_ALL_PRODUCTS, REFRESH_TAG} from './tags';

// Base Query
const baseQuery = fetchBaseQuery({
  baseUrl: API_ENDPOINTS.BASE_URL,
});

// Initialize an empty api service to inject endpoints later
export const baseApi = createApi({
  tagTypes: [REFRESH_TAG, FETCH_ALL_PRODUCTS],
  baseQuery: baseQuery,
  endpoints: () => ({}),
});

// Export the API reducer and middleware
export const {reducer, middleware} = baseApi;
