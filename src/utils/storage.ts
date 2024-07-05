import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  StorageGetArgsType,
  StorageMergeArgsType,
  StorageRemoveArgsType,
  StorageSetArgsType,
} from '../types';
import {isNotEmpty} from './string';

async function set(args: StorageSetArgsType) {
  await AsyncStorage.setItem(args?.key, JSON.stringify(args?.value));
}

async function get(args: StorageGetArgsType) {
  const data = await AsyncStorage.getItem(args?.key);
  if (isNotEmpty(data)) {
    return JSON.parse(data as string);
  }

  return data;
}

async function remove(args: StorageRemoveArgsType) {
  await AsyncStorage.removeItem(args?.key);
}

async function merge(args: StorageMergeArgsType) {
  await AsyncStorage.mergeItem(args?.key, JSON.stringify(args?.value));
}

async function clearAll() {
  await AsyncStorage.clear();
}

const storage = {
  set,
  get,
  remove,
  merge,
  clearAll,
};

export {storage};
