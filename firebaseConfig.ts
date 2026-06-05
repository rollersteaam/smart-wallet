import { initializeApp } from 'firebase/app';
import {
  browserLocalPersistence,
  getReactNativePersistence,
  initializeAuth, ReactNativeAsyncStorage
} from 'firebase/auth';
import { createMMKV } from 'react-native-mmkv';

import { Platform } from 'react-native';
import GoogleServices from './google-services.json';

// Initialize Firebase
const projectId = GoogleServices.project_info.project_id

const androidClientConfig = GoogleServices.client[0]

const firebaseConfig = {
  apiKey: androidClientConfig.api_key[0].current_key,
  authDomain: `${projectId}.firebaseapp.com`,
  databaseURL: `https://${projectId}.firebaseio.com`,
  projectId: projectId,
  storageBucket: GoogleServices.project_info.storage_bucket,
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);

const storage = createMMKV({ id: 'firebase-auth' });

const MMKVStorageAdapter: ReactNativeAsyncStorage = {
  async setItem(key: string, value: string) {
    storage.set(key, value)
  },

  async getItem(key: string) {
    return storage.getString(key) ?? null
  },

  async removeItem(key: string) {
    storage.remove(key)
  }
}

export const auth = initializeAuth(app, {
  persistence: Platform.OS === 'web' ? browserLocalPersistence : getReactNativePersistence(MMKVStorageAdapter)
});
