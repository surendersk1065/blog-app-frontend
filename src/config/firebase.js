
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL2kePipH-oTikmneNerNwYulRELATtmw",
  authDomain: "blog-app-a873b.firebaseapp.com",
  projectId: "blog-app-a873b",
  storageBucket: "blog-app-a873b.firebasestorage.app",
  messagingSenderId: "788800268645",
  appId: "1:788800268645:web:7d86a0861b938f2480d98c"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth