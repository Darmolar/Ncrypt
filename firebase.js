// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmJytmsOCKrhJo75JEUnQYBm4xrfSlP14",
  authDomain: "ncrypt-80b09.firebaseapp.com",
  projectId: "ncrypt-80b09",
  storageBucket: "ncrypt-80b09.appspot.com",
  messagingSenderId: "679648966843",
  appId: "1:679648966843:web:630c8d11456c13ca33519e"
};

// Initialize Firebase
// let app;

// if(firebase.apps.length == 0){
//     app = firebase.initializeApp(firebaseConfig);
// }else{
//     app = firebase.app();
// }
// const auth = firebase.auth();

// export { auth };
 
const app = initializeApp(firebaseConfig);
const authUser = getAuth(app);
const db = getFirestore();

export { app, authUser, db };
// export default app;
