import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB33SKJ6Uv8Hd9VhsDmE0cj9bnanz7uH8I",
  authDomain: "asta-8b949.firebaseapp.com",
  databaseURL: "https://asta-8b949.firebaseio.com",
  projectId: "asta-8b949",
  storageBucket: "asta-8b949.appspot.com",
  messagingSenderId: "994018320262",
  appId: "1:994018320262:web:4ee76ebe5f4795b78c5607",
  measurementId: "G-BL27C8CX8J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
