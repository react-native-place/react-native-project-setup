import {it, expect, describe} from '@jest/globals';
import {REACT_NATIVE_APP_API_BASE_URL} from '@env';
import {isNotEmpty} from '../../../src/utils';

describe('Environment variables value check', () => {
  it('REACT_NATIVE_APP_API_BASE_URL', () => {
    expect(isNotEmpty(REACT_NATIVE_APP_API_BASE_URL)).toBeTruthy();
  });
});
