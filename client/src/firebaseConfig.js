import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import axios from "axios";

const firebaseConfig = {
  apiKey: "AIzaSyAB0cLPXo5HIUqDWP_xhDhQxgtyBb0cooA",
  authDomain: "salon-app-cf1db.firebaseapp.com",
  projectId: "salon-app-cf1db",
  storageBucket: "salon-app-cf1db.appspot.com",
  messagingSenderId: "412954767282",
  appId: "1:412954767282:web:ba6aee2bd994b8bad1feab",
  measurementId: "G-3PQ93K5N21",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebaseApp.firestore();
const storage = firebase.storage();
// const analytics = firebase.analytics();

export { auth, firestore, storage, axios };
