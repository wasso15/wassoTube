
import Home from "./Pages/Home";
import { Routes, Route} from "react-router-dom"; 
import {channelContext} from "./Service/wassoTubeContext"
import { useEffect, useState } from "react";
import VideoPlayer from "./Pages/VideoPlayer";
import Bibliotheque from "./Pages/Bibliotheque";
import ChannelVideo from "./Pages/ChannelVideo";
import Header from "./Component/Header";
import SearchVideo from "./Pages/SearchVideo";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import io from 'socket.io-client';
import axios from "axios";
import {app} from "./Service/Auth"; 




const socket = io.connect('http://localhost:5000')


function App() 
{
   // Another
  const [isAuthentified, setIsAuthentified]= useState({}); 
  const [youtubeChannel, setYoutubeChannel] = useState('Bonjour'); 
  const [videoChannel, setVideoChannel]= useState(false);  
  const [fetchUserData, setFetchUserData] = useState(); 
  const [likeVideo, setLikeVideo]= useState()
  const [loader, setLoader]= useState(true); 
  const [dataVideo, setDataVideo] = useState(); 
  const [showInputSub, setShowInputSub]= useState(false); 
  const fetchData = async(token)=>{
    const response = await axios.get('http://localhost:5000/wassotubeUser',{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });
    // setTasks(response.data.tasks;
    const {email,idYoutube,urlPic, name }= response.data[0]; 
      localStorage.setItem("profilName", name)
      localStorage.setItem("image", urlPic); 
      localStorage.setItem("idYoutube", idYoutube)
      }



  useEffect(() => {

    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
    if (user) {
     
        fetchData(user.accessToken)
        setIsAuthentified(true);

    } else {
      // User is signed out
      setIsAuthentified(false)
      console.log('is not Authentified')
       }
});
     
}, [])


  return (
    <div className="App">
     
      <channelContext.Provider 
      value={
        {
          socket,
          youtubeChannel, setYoutubeChannel, videoChannel,setVideoChannel,
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
