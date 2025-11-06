import { initializeApp, getApps } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBJnf-BZer0wDk9q2ZVsdoF8rdXIvOB-Uo",
  authDomain: "walkietour-95e87.firebaseapp.com",
  projectId: "walkietour-95e87",
  storageBucket: "walkietour-95e87.firebasestorage.app",
  messagingSenderId: "795755807121",
  appId: "1:795755807121:web:ab5816617f08a97e4f1a30"
};

// Initialize Firebase
let app;
let auth;

try {
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage)
    });
  } else {
    app = getApps()[0];
    auth = getAuth(app);
  }
} catch (error) {
  console.log("Error initializing app:", error);
}

export { auth };
export default auth;