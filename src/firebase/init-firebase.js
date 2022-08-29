import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  updateProfile, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut 
  } from 'firebase/auth';
  

const firebaseConfig = {
  apiKey: "AIzaSyCgsmDGKi2yTCseqD-CBdoUaghKRgMrVIs",
  authDomain: "accessgroup-7d2a5.firebaseapp.com",
  projectId: "accessgroup-7d2a5",
  storageBucket: "accessgroup-7d2a5.appspot.com",
  messagingSenderId: "1031907631526",
  appId: "1:1031907631526:web:1abacb09e3801e66aa6f67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
}