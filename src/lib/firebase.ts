import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Detect if Firebase has been configured with real, non-placeholder credentials
export const isFirebaseConfigured = firebaseConfig && 
  firebaseConfig.projectId && 
  firebaseConfig.projectId !== 'remixed-project-id' &&
  firebaseConfig.apiKey &&
  firebaseConfig.apiKey !== 'remixed-api-key';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);

// Connectivity check as per instructions, executed only when properly configured
async function testConnection() {
  if (!isFirebaseConfigured) {
    console.log("Firebase is not fully configured yet. Running in offline/local mock mode.");
    return;
  }
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if(error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration.");
    }
  }
}
testConnection();
