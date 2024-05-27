import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANIYo2WKPz72qj65-do-It3GsZh9zPb34",
  authDomain: "clone-d14cc.firebaseapp.com",
  projectId: "clone-d14cc",
  storageBucket: "clone-d14cc.appspot.com",
  messagingSenderId: "278729045452",
  appId: "1:278729045452:web:bc4b9662d429a1e9c79969",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
