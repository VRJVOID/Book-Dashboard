// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyCzxVupaP_SLJSOMpD6aMoVpgabSJHA8FY",
  authDomain: "todo-6a189.firebaseapp.com",  projectId: "todo-6a189",
  storageBucket: "todo-6a189.appspot.com",  messagingSenderId: "774179398000",
  appId: "1:774179398000:web:b27b69aeeff7e094c6efb5",  measurementId: "G-3B6F6D3778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authh = getAuth(app);

export { authh };

