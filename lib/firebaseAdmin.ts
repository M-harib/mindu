// MINDU/lib/firebaseAdmin.ts
// This file initializes Firebase Admin SDK for backend usage (secure server-side access)

// Import firebase-admin
import admin from "firebase-admin";

// Initialize Firebase Admin only once
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,           // Your project ID
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,      // Admin service account email
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"), // Private key (replace escaped newlines)
    }),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,    // Default storage bucket
  });
}

// Export admin auth, Firestore DB, and storage bucket
export const adminAuth = admin.auth();   // Admin-level authentication
export const adminDB = admin.firestore(); // Firestore DB access
export const adminStorage = admin.storage().bucket(); // Storage bucket
