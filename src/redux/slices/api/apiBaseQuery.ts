import {
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import {Mutex} from 'async-mutex';

import {API_BASE_URL, endpoints} from './config';
import {getAccessToken, handleApiError} from './utils';

// create a new mutex
const mutex = new Mutex();

const apiBaseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: async headers => {
    headers.set('Authorization', `Bearer ${await getAccessToken()}`);

    return headers;
  },
});

const apiBaseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result = await apiBaseQuery(args, api, extraOptions);

  if (result.error && !(result.error.status === 401)) {
    handleApiError(result.error);
  }

  if (result.error && result.error.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        // try to get a new token
        const refreshResult = await apiBaseQuery(
          endpoints?.refreshToken,
          api,
          extraOptions,
        );
        if (refreshResult.data) {
          // store the new token
          //   api.dispatch(tokenReceived(refreshResult.data));
          // retry the initial query
          result = await apiBaseQuery(args, api, extraOptions);
        } else {
          //   api.dispatch(loggedOut());
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await apiBaseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export {apiBaseQuery, apiBaseQueryWithReauth};
