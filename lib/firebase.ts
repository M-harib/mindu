// MINDU/lib/firebase.ts
// This file initializes Firebase for frontend usage (auth, firestore, storage)

// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase config object (replace with your project's actual keys)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY, // Public API key
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, // Auth domain
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID, // Project ID
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET, // Storage bucket
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID, // Messaging sender
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID, // App ID
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export auth, firestore DB, and storage instances for frontend usage
export const auth = getAuth(app);      // Authentication
export const db = getFirestore(app);   // Firestore database
export const storage = getStorage(app); // File storage
