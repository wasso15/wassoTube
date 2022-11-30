
import Home from "./Pages/Home";
import { Routes, Route, Navigate } from "react-router-dom"; 
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {channelContext} from "./Service/wassoTubeContext"
import { useEffect, useState } from "react";
import VideoPlayer from "./Pages/VideoPlayer";
import Bibliotheque from "./Pages/Bibliotheque";
import ChannelVideo from "./Pages/ChannelVideo";
import Header from "./Component/Header";
import SearchVideo from "./Pages/SearchVideo";
import io from 'socket.io-client';


const socket = io.connect('http://localhost:5000')


function App() 
{
  const [isAuthentified, setIsAuthentified]= useState({}); 
  const [youtubeChannel, setYoutubeChannel] = useState('Bonjour'); 
  const [videoChannel, setVideoChannel]= useState(false);  
  const [fetchUserData, setFetchUserData] = useState(); 
  const [likeVideo, setLikeVideo]= useState()
  const [loader, setLoader]= useState(true); 
  const [dataVideo, setDataVideo] = useState(); 
  const [showInputSub, setShowInputSub]= useState(false)


  useEffect(() => {

    setIsAuthentified(false)

      fetch("http://localhost:5000/userData", {
        method: "GET",
      })
        .then((response) => {
          if (response.status === 200) {
            setIsAuthentified(false); 
            return response.json();}
          
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
       if(resObject.user){
          
       }; 
          // localStorage.setItem("name", name)
          // localStorage.setItem("email", email)
          // localStorage.setItem("profilePic", profilePic)

        })
        .catch((err) => {
          console.log(err);
        });



     
}, [])


  return (
    <div className="App">
     
      <channelContext.Provider 
      value={
        {socket,youtubeChannel, setYoutubeChannel, videoChannel,setVideoChannel,
        isAuthentified,setIsAuthentified,fetchUserData, setFetchUserData,loader,likeVideo,
         setLikeVideo, setLoader, dataVideo, setDataVideo, showInputSub, setShowInputSub}}>
      
         {/* <Navbar  isAuthentified={setIsAuthentified}/> */}
         <Header/>
          <Routes>
            {/* <Route path="/" element={ !isAuthentified ? <Login/> : <Navigate replace to={"/home"}/>}/> */}
            <Route path="/" element={<Home/>} />
            <Route path="playvideo/:id" element={<VideoPlayer/>} />
            <Route path="searchVideo/:term" element={<SearchVideo/>} />
            <Route path="Bibliotheque" element={<Bibliotheque/>} />
            <Route path="channelVideo" element={<ChannelVideo/>} />

          </Routes>
     </channelContext.Provider>
     </div>
  );
}

export default App;
