// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBFSlCn8hGKSx_vfctWsOJ3Aj1Phl2sTl0",
  authDomain: "imgdb-21e94.firebaseapp.com",
  projectId: "imgdb-21e94",
  storageBucket: "imgdb-21e94.appspot.com",
  messagingSenderId: "471558846366",
  appId: "1:471558846366:web:aa3564ef4e83eede95888f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imgDb = getStorage(app)	