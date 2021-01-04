// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBZauLwdFu3YPqxXqlFha3U_vgMwbqeBlc",
    authDomain: "clone-56669.firebaseapp.com",
    databaseURL: "https://clone-56669.firebaseio.com",
    projectId: "clone-56669",
    storageBucket: "clone-56669.appspot.com",
    messagingSenderId: "172624481501",
    appId: "1:172624481501:web:459032a7760b2603ea5f34",
    measurementId: "G-60FXNZEHHB"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const auth=firebase.auth();

  export {db,auth};