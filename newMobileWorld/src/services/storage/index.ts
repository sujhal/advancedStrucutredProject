import { MMKV } from 'react-native-mmkv';

import { STORAGE_KEYS } from './keys';

const storage = new MMKV({ id: STORAGE_KEYS.preferences });

export const getString = (key: string): string | undefined => storage.getString(key);

export const setString = (key: string, value: string) => {
  storage.set(key, value);
};

export const deleteKey = (key: string) => {
  storage.delete(key);
};
