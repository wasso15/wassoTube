
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChangeds, onAuthStateChanged} from 'firebase/auth'; 

// Authentification avec FireBase 
const firebaseConfig = {
    apiKey: "AIzaSyD1urvE483bNDXro5TsLXgTR27I8ivHAk4",
    authDomain: "wassotube-aca0b.firebaseapp.com",
    projectId: "wassotube-aca0b",
    storageBucket: "wassotube-aca0b.appspot.com",
    messagingSenderId: "872311423051",
    appId: "1:872311423051:web:b1b8dbf81ba71548384dce"
  };
  
  const app = initializeApp(firebaseConfig);
  
  export const auth= getAuth(app);
  
  export const provider= new GoogleAuthProvider(); 
  
  export const signInWithGoogle= ()=>{
          signInWithPopup(auth,provider).then((result)=>{
              const mailVerified = result.user.emailVerified;
              const imgUrl= result.user.photoURL; 
              const userName= result.user.displayName; 
              
  
              // Stockage des informations 
              localStorage.setItem('mailVerified', mailVerified); 
              localStorage.setItem('imgUrl', imgUrl); 
              localStorage.setItem('userName', userName);
              
          }).catch(error=>console.log(error))
  }
  