import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBtfmbff_BjsgwYnAC6jWml8FrqXiZ-fVc",
    authDomain: "citationgenerator-24e5c.firebaseapp.com",
    databaseURL: "https://citationgenerator-24e5c.firebaseio.com",
    projectId: "citationgenerator-24e5c",
    storageBucket: "",
    messagingSenderId: "724517447054",
    appId: "1:724517447054:web:606001fb9a7a514e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;