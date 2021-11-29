import firebase from "firebase";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDEUxQOgp5wsly-RjOkJd20apeF_34xutk",
  authDomain: "facebook-clone-8d82d.firebaseapp.com",
  projectId: "facebook-clone-8d82d",
  storageBucket: "facebook-clone-8d82d.appspot.com",
  messagingSenderId: "226468978130",
  appId: "1:226468978130:web:d0ac998e13105151173c0b",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
