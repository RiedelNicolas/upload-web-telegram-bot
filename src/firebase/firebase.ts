// Import the admin SDK
import * as admin from 'firebase-admin';

// Service account credentials (should be stored securely, preferably as environment variables)
// Download this JSON from Firebase Console > Project Settings > Service Accounts
const serviceAccount = require(process.env.FIREBASE_CERTS_PATH!);

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

/**
 * Adds a video document to the videos collection
 * 
 * @param videoLink - URL of the video
 * @param description - Description of the video
 * @returns Promise with the document ID
 */
export const addVideo = async (videoLink: string, description: string) => {
  try {
    // Add a new document in collection "videos"
    const docRef = await db.collection('videos').add({
      videoLink: videoLink,
      description: description,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
}