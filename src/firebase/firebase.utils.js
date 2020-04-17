import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyBgyJRTH8FpKAK41m8ooxf9SlFx4atrSAQ",
    authDomain: "royl-db.firebaseapp.com",
    databaseURL: "https://royl-db.firebaseio.com",
    projectId: "royl-db",
    storageBucket: "royl-db.appspot.com",
    messagingSenderId: "1090387736595",
    appId: "1:1090387736595:web:bb74bee9cf41254c7c67e6",
    measurementId: "G-J91RDBWX33"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore(); 

  //this will give us access to google new auth class 
  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'}); 

  export const signInWithGoogle= ()=>auth.signInWithPopup(provider); 
  export default firebase; 