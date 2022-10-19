
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { Routes, Route, Navigate } from "react-router-dom"; 
import Navbar from "./Component/Navbar";

import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut,onAuthStateChanged} from 'firebase/auth'; 
import { useEffect, useState } from "react";
import VideoPlayer from "./Pages/VideoPlayer";
let userData= ''

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
            const userToken= result.user.accessToken

            // Stockage des informations 
            localStorage.setItem('mailVerified', mailVerified); 
            localStorage.setItem('imgUrl', imgUrl); 
            localStorage.setItem('userName', userName);
            localStorage.setItem('userToken', userToken);
            
        }).catch(error=>console.log(error))
}

const logout= ()=>{
  auth.signOut().then(()=>{
    console.log( " Succeful Logout")
  })
}

function App() 
{
  const [isAuthentified, setIsAuthentified]= useState(false); 


  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if(data){
        setIsAuthentified(true); 
      }
    })
  }, [])


  return (
    <div className="App">
       {isAuthentified && <Navbar/>}
        <Routes>
          <Route path="/" element={ !isAuthentified ? <Login/> : <Navigate replace to={"/home"}/>}/>
          <Route path="home" element={<Home/>} />
          <Route path="playvideo/:id" element={<VideoPlayer/>} />
        </Routes>
      
     </div>
  );
}

export default App;
