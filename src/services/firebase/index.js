import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCtEIlE9CpyNFP0gwiHZluAZedLatXza-U",
  authDomain: "matias-78c97.firebaseapp.com",
  projectId: "matias-78c97",
  storageBucket: "matias-78c97.appspot.com",
  messagingSenderId: "1058871658776",
  appId: "1:1058871658776:web:b618020a3612c95082b66d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)