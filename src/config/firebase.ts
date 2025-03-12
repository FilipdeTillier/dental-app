import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyByEYylD_yuLodYzMGShTXkV8fNlcJ51Ag",
  authDomain: "dental-app-96f92.firebaseapp.com",
  databaseURL:
    "https://dental-app-96f92-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dental-app-96f92",
  storageBucket: "dental-app-96f92.firebasestorage.app",
  messagingSenderId: "977406663826",
  appId: "1:977406663826:web:889b37241a94768f9f9a4b",
  measurementId: "G-2TJKDM29X7",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
