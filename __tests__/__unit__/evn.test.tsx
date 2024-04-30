import {it, expect, describe} from '@jest/globals';
import {REACT_NATIVE_APP_API_BASE_URL} from '@env';

describe('Environment variables existence check', () => {
  it('REACT_NATIVE_APP_API_BASE_URL', () => {
    expect(REACT_NATIVE_APP_API_BASE_URL).not.toEqual(undefined);
  });
});
