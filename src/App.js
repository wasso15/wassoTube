
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { Routes, Route, Navigate } from "react-router-dom"; 
import Navbar from "./Component/Navbar";
import firebase from 'firebase/compat/app';
import {channelContext} from "./Service/wassoTubeContext"
import { useEffect, useState } from "react";
import VideoPlayer from "./Pages/VideoPlayer";


function App() 
{
  const [isAuthentified, setIsAuthentified]= useState(false); 
  const [youtubeChannel, setYoutubeChannel] = useState('Bonjour')


  useEffect(() => {
    
    firebase.auth().onAuthStateChanged((data) => {
      if(data){
        setIsAuthentified(true); 
      }
    })
  }, [])


  return (
    <div className="App">
      <channelContext.Provider value={{youtubeChannel, setYoutubeChannel}}>

     
       {isAuthentified && <Navbar isAuthentified={setIsAuthentified}/>}
          <Routes>
            <Route path="/" element={ !isAuthentified ? <Login/> : <Navigate replace to={"/home"}/>}/>
            <Route path="home" element={<Home/>} />
            <Route path="playvideo/:id" element={<VideoPlayer/>} />
          </Routes>
        </channelContext.Provider>
     </div>
  );
}

export default App;
