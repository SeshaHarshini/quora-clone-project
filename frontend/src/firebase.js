// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbBd-popimC_bO-UKKUHTzL3rbEh7Bzow",
  authDomain: "quora-clone-d3def.firebaseapp.com",
  projectId: "quora-clone-d3def",
  storageBucket: "quora-clone-d3def.appspot.com",
  messagingSenderId: "85467244144",
  appId: "1:85467244144:web:80066479cb6f368311f6b5",
  measurementId: "G-Z9K7QT1NRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth, provider};
