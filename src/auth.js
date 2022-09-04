// call Object from the Firebase to Initialize app
import { initializeApp } from "firebase/app";

// Import Data Base
import { getFirestore } from "firebase/firestore";

// Import Auth
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaE_jzfm6HpVsD93WBv9YeoS0PyyK_8ew",
  authDomain: "fir-auth-4dad2.firebaseapp.com",
  projectId: "fir-auth-4dad2",
  storageBucket: "fir-auth-4dad2.appspot.com",
  messagingSenderId: "502138293740",
  appId: "1:502138293740:web:de9346789ae040afb284c9",
  measurementId: "G-BEV3RPHDR5",
};

// initialize firebase App
initializeApp(firebaseConfig);

//! init services ( Database )
const Database = getFirestore();
console.log("Database: ", Database);

//! Call Object From The Firebase To Initialize Services ( Auth )
const Auth = getAuth();
console.log("Auth: ", Auth);
