// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaCj78ERNVnBTl7M1wGCV1tDwOWTz68I8",
    authDomain: "studentattendance-39c53.firebaseapp.com",
    projectId: "studentattendance-39c53",
    storageBucket: "studentattendance-39c53.appspot.com",
    messagingSenderId: "19157904881",
    appId: "1:19157904881:web:833a1385692b9eb8c52850"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)