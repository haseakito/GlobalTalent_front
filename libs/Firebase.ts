// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { GoogleAuthProvider, TwitterAuthProvider, getAuth } from "firebase/auth"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA11Y6UbpkNTyTjWTnapdzAiG1SBJ4AwA",
  authDomain: "hr-globe.firebaseapp.com",
  projectId: "hr-globe",
  storageBucket: "hr-globe.appspot.com",
  messagingSenderId: "800500344193",
  appId: "1:800500344193:web:7dd9f732f86b93c8c1b480"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

// Google auth provider
const GoolgleProvider = new GoogleAuthProvider()

// Twitter auth provider
const TwitterProvider = new TwitterAuthProvider()

export { auth, GoolgleProvider, TwitterProvider }
