import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAulKflYpoitSBnk7GsiuyT2iG0stghYHk",
  authDomain: "confluence-6e3cd.firebaseapp.com",
  projectId: "confluence-6e3cd",
  storageBucket: "confluence-6e3cd.firebasestorage.app",
  messagingSenderId: "588251915817",
  appId: "1:588251915817:web:9f0d388c0816ab42c55e38",
  measurementId: "G-P1QQVPVQ8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);
