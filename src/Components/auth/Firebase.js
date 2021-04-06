import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB9kdOVkF0PxFU33OOhVnv50RWxgy9JUYk",
  authDomain: "todoapp-1bc73.firebaseapp.com",
  projectId: "todoapp-1bc73",
  storageBucket: "todoapp-1bc73.appspot.com",
  messagingSenderId: "540668699397",
  appId: "1:540668699397:web:b545052866db0fb2a7cd6c",
};
// Initialize Firebase
const fireBase = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
export { fireBase, firestore };
