// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDw6jBwJpyebS2xjKWdu9a9Si4B9IZfJSE",
authDomain: "queso-app-115e6.firebaseapp.com",
projectId: "queso-app-115e6",
storageBucket: "queso-app-115e6.appspot.com",
messagingSenderId: "27185557948",
appId: "1:27185557948:web:958c76a7968396648dbbb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)