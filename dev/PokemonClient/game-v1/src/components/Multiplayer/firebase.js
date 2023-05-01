
import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyARcV3n49TWNEUVMmKVGQwUNARjq5iW4ko",
  authDomain: "pokemon-f40f8.firebaseapp.com",
  databaseURL: "https://pokemon-f40f8-default-rtdb.firebaseio.com",
  projectId: "pokemon-f40f8",
  storageBucket: "pokemon-f40f8.appspot.com",
  messagingSenderId: "290518658280",
  appId: "1:290518658280:web:36a615fef47983b59dad5d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();



export { firebase, db, auth };