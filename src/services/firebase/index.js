import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
apiKey: "AIzaSyDw6jBwJpyebS2xjKWdu9a9Si4B9IZfJSE",
authDomain: "queso-app-115e6.firebaseapp.com",
projectId: "queso-app-115e6",
storageBucket: "queso-app-115e6.appspot.com",
messagingSenderId: "27185557948",
appId: "1:27185557948:web:958c76a7968396648dbbb9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)