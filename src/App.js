
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { Routes, Route, Navigate } from "react-router-dom"; 
import Navbar from "./Component/Navbar";
// import firebase from 'firebase/compat/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {channelContext} from "./Service/wassoTubeContext"
import { useEffect, useState } from "react";
import VideoPlayer from "./Pages/VideoPlayer";


function App() 
{
  const [isAuthentified, setIsAuthentified]= useState(false); 
  const [youtubeChannel, setYoutubeChannel] = useState('Bonjour'); 
  const [videoChannel, setVideoChannel]= useState(false);  
  const [fetchUserData, setFetchUserData] = useState()

  useEffect(() => {
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    setIsAuthentified(true); 
   
  }}) 
     
}, [])


  return (
    <div className="App">
     
      <channelContext.Provider value={{youtubeChannel, setYoutubeChannel, videoChannel,setVideoChannel,isAuthentified,setIsAuthentified,fetchUserData, setFetchUserData}}>
      
         <Navbar  isAuthentified={setIsAuthentified}/>
          <Routes>
            {/* <Route path="/" element={ !isAuthentified ? <Login/> : <Navigate replace to={"/home"}/>}/> */}
            <Route path="/" element={<Home/>} />
            <Route path="playvideo/:id" element={<VideoPlayer/>} />
            <Route path="channelVideo/:id" element={<VideoPlayer/>} />
          </Routes>
     </channelContext.Provider>
     </div>
  );
}

export default App;
