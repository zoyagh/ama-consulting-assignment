/* eslint-disable */
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BaseQueryFn, FetchArgs, FetchBaseQueryError} from '@reduxjs/toolkit/query';

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  prepareHeaders: (headers) => {
    headers.set('Accept', 'application/json');
    headers.set('Cache-Control', 'cross-fetch');

    return headers;
  },
});

const customFetchBase: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {

  let result = await baseQuery(args, api, extraOptions);

  return result;
};
export const api = createApi({
  baseQuery: customFetchBase,
  keepUnusedDataFor: 10,
  endpoints: () => ({}),
});
