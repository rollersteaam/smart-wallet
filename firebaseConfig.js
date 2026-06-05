import { initializeApp } from 'firebase/app';

import GoogleServices from './google-services.json';

import { getAuth } from 'firebase/auth';

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
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export const auth = getAuth(app);
