import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBOmk9IDTlXUSKEgMy7jVur4nESUgWL-2k",
  authDomain: "recipe-finder-and-genera-d1363.firebaseapp.com",
  databaseURL: "https://recipe-finder-and-genera-d1363-default-rtdb.firebaseio.com",
  projectId: "recipe-finder-and-genera-d1363",
  storageBucket: "recipe-finder-and-genera-d1363.appspot.com",
  messagingSenderId: "19285283995",
  appId: "1:19285283995:web:ad39f73ade3218bd14a23e",
  measurementId: "G-HDTBC59XCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };