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

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return; 

    const userRef= firestore.doc(`users/${userAuth.uid}`); 

    const snapShot = await userRef.get();

    // console.log(snapShot);

    //create the snapshot

    if(!snapShot.exists){
      //before we create the documentRef we need to check what properties or data will need to store 
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      
      try{

        await userRef.set({
          displayName, 
          email, 
          createdAt,
          ...additionalData
        })

      }catch(error){

        console.log("error creating user", error.message);
      }

    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore(); 

  //this will give us access to google new auth class 
  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'}); 

  export const signInWithGoogle= ()=>auth.signInWithPopup(provider); 
  export default firebase; 