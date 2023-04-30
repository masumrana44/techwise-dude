// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmC4JwnGYl5ni8v_MQNx5Qwxhs61tS74Q",
  authDomain: "techwise-dude.firebaseapp.com",
  projectId: "techwise-dude",
  storageBucket: "techwise-dude.appspot.com",
  messagingSenderId: "25035951388",
  appId: "1:25035951388:web:d8c2d216c83705effebed9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;