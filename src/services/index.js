// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAODJeI42ZfaX8_Ck7rjfLRYdk6Sf1sXRE",
  authDomain: "ecommerce-minimal3d.firebaseapp.com",
  projectId: "ecommerce-minimal3d",
  storageBucket: "ecommerce-minimal3d.appspot.com",
  messagingSenderId: "722827271213",
  appId: "1:722827271213:web:da3a3aecf369ecfd3beca4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db