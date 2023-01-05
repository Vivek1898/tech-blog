// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import * as firebase from "firebase";
import { GOOGLE_CLIENT_ID } from "./config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: {GOOGLE_CLIENT_ID},
  authDomain: "tech-blog-7.firebaseapp.com",
  projectId: "tech-blog-7",
  storageBucket: "tech-blog-7.appspot.com",
  messagingSenderId: "759540397324",
  appId: "1:759540397324:web:6a7cb7efcf33a5d3b74529",
  measurementId: "G-DRXLBHCEN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
 
export const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export {firebase};