import firebase from "firebase/app";
import "firebase/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyCjCzSeB01484E8QgN4YBkLv3GiiB5Qkzs",
  authDomain: "project-ecommerce-3002e.firebaseapp.com",
  projectId: "project-ecommerce-3002e",
  storageBucket: "project-ecommerce-3002e.appspot.com",
  messagingSenderId: "735316628771",
  appId: "1:735316628771:web:dcf3746b707b4f397d2896"
};

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)