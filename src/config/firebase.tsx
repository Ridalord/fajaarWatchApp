import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


type FirebaseConfigType = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

const firebaseConfig: FirebaseConfigType = {
  apiKey: "AIzaSyDKTzaoRCsbxNr_py-7mLWz3OPJ6C7XrE4",
  authDomain: "farjaa-6672c.firebaseapp.com",
  projectId: "farjaa-6672c",
  storageBucket: "farjaa-6672c.appspot.com",
  messagingSenderId: "777046053429",
  appId: "1:777046053429:web:8fd43f5df0cb40d145177c",
  measurementId: "G-KF92GFBDL2"
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore()
