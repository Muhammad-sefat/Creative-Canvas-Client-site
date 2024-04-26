import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAN86hnUwDczuge9g6TiWT-6PmTS2v0nOo",
  authDomain: "creative-canvas-24236.firebaseapp.com",
  projectId: "creative-canvas-24236",
  storageBucket: "creative-canvas-24236.appspot.com",
  messagingSenderId: "1022960272462",
  appId: "1:1022960272462:web:d632f7d90dabd30c6faf1f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
