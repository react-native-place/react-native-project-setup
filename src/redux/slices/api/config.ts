import {REACT_NATIVE_APP_API_BASE_URL} from '@env';

import {Endpoints} from './type';

const API_BASE_URL = REACT_NATIVE_APP_API_BASE_URL;

const endpoints: Endpoints = {
  login: '/auth/login',
  refreshToken: '/auth/token/refresh',
};

export {endpoints, API_BASE_URL};
