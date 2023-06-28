
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBPrSvM-Z2Is5KBPiQWdNbhJBUC5k261Us",
  authDomain: "tiktok-clone-c33a5.firebaseapp.com",
  projectId: "tiktok-clone-c33a5",
  storageBucket: "tiktok-clone-c33a5.appspot.com",
  messagingSenderId: "655686392776",
  appId: "1:655686392776:web:e13e9f3c03a906baa87efd",
  measurementId: "G-MKEMC6GT9Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;