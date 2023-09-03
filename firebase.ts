import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAt6vQMKDwhS7rcYhUh3GbLepLNke3DyIo",
  authDomain: "coupe-a067a.firebaseapp.com",
  projectId: "coupe-a067a",
  storageBucket: "coupe-a067a.appspot.com",
  messagingSenderId: "346866670415",
  appId: "1:346866670415:web:5f0362c9b877fb9c70833a",
  measurementId: "G-B8F6YBEBHP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };