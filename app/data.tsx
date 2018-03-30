import * as firebase from 'firebase'

import { FIREBASE_API_KEY, FIREBASE_PROJECT_ID, FIREBASE_DB_URL, FIREBASE_BUCKET } from 'variables'

// firebase init
// firebase serve

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
const config = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_PROJECT_ID,
    databaseURL: FIREBASE_DB_URL,
    storageBucket: FIREBASE_BUCKET
}

firebase.initializeApp(config)
