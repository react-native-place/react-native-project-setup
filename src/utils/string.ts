import {PossibleString} from '../types';

function isEmpty(str: PossibleString): boolean {
  return !str || /^\s*$/.test(str);
}

function isNotEmpty(str: PossibleString): boolean {
  return !isEmpty(str);
}

export {isEmpty, isNotEmpty};
