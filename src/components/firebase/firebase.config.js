// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGMbULogbHmeF_O5raDTEcLeAHfDSOGEI",
  authDomain: "kwrwoodworking-bfd86.firebaseapp.com",
  projectId: "kwrwoodworking-bfd86",
  storageBucket: "kwrwoodworking-bfd86.firebasestorage.app",
  messagingSenderId: "671424160433",
  appId: "1:671424160433:web:f4283f13ba30feb2d6f890"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)