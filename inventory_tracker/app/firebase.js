// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9xy7Xa3GCUXG7onpZQ4qxdh-5guMNupg",
  authDomain: "inventory-management-40e66.firebaseapp.com",
  projectId: "inventory-management-40e66",
  storageBucket: "inventory-management-40e66.appspot.com",
  messagingSenderId: "91696556182",
  appId: "1:91696556182:web:d80b5ad3c76ce487de3ab7",
  measurementId: "G-YZKW6PHGY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);