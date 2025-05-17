// Import the admin SDK
import * as admin from 'firebase-admin';
import { Video, VideoPayload } from './model';

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
      link: videoLink,
      description: description,
      createdAt: new Date(),
    } as VideoPayload);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
}

export const getVideos = async () => {
  try {
    const snapshot = await db.collection('videos').get();
    const videos: Video[] = [];
    
    snapshot.forEach((doc: admin.firestore.QueryDocumentSnapshot) => {
      // Extract the data and combine with the ID
      const data = doc.data();
      videos.push({ 
        id: doc.id, 
        link: data.link, 
        description: data.description,
        createdAt: data.createdAt
      } as Video);
    });
    
    return videos;
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw error;
  }
}

export const deleteVideo = async (index: number) => {
  try {
    const videos = await getVideos();
    const videoId = videos?.[index]?.id;
    await db.collection('videos').doc(videoId).delete();
    console.log("Document successfully deleted!");
  } catch (error) {
    console.error("Error removing document: ", error);
    throw error;
  }
}

export const updateVideoDescription = async (index: number, newDescription: string) => {
  try {
    const videos = await getVideos();
    const videoId = videos?.[index]?.id;
    await db.collection('videos').doc(videoId).update({ description: newDescription });
    console.log("Document description successfully updated!");
  } catch (error) {
    console.error("Error updating document: ", error);
    throw error;
  }
}