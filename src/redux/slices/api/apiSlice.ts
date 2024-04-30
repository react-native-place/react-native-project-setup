import {createApi} from '@reduxjs/toolkit/query/react';

import {LoginApiArgs} from './type';
import {endpoints} from './config';
import {apiMethods} from './constant';
import {apiBaseQueryWithReauth} from './apiBaseQuery';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: apiBaseQueryWithReauth,
  endpoints: builder => ({
    login: builder.mutation({
      query: (loginCredentials: LoginApiArgs) => ({
        url: endpoints?.login,
        method: apiMethods?.post,
        body: loginCredentials,
      }),
    }),
  }),
});

export const {useLoginMutation} = apiSlice;
export {apiSlice};
