const express= require('express'); 
const app= express(); 
const db=require('./config/dbConfig')


const http= require('http'); 
const cors = require('cors'); 
const {Server} = require('socket.io'); 
require('dotenv').config(); 
const passport= require('passport')
require('./config/passportConfig')(passport); 
const session= require('express-session'); 
const middleware=require('./config/middlewareFb');
const admin = require('./config/fireBaseConfig');

let idComment


const {getVideoComment, getUserComment, getUserSubComment}= require('./controllers/commentVideo')
const server= http.createServer(app); 

app.use(cors()); 
app.use(middleware.decodeToken)

const io = new Server(server, 
    {
    cors:
    {
        origin: 'http://localhost:3000', 
        methods:['GET', 'POST'],
        credentials: true
    }, 
})


 // EndPoint Api 
  app.get("/wassotubeUser", (req, res) => {  
    console.log("EndPoint", req.data); 
    res.json(req.data)
  });


io.on("connection", (socket) => {
  // Session user info on socket 
  console.log(` Id session N° ${socket.id}`);

   // socket.on('videoComment',getVideoComment);
   socket.on('commentUser', (data)=>
   {
      //  getUserComment(data); 
       const {termComment,idVideo, idClient }= data
       db.insert(
        {table: 'commentaire', records: [{ commentaire:termComment, idVideo:idVideo, idYoutube:idClient }]
        },
        (err, res) => {
          if (err){console.log(err)}
          else{
             socket.emit('sendUserComment', {termComment,idComment:res.data.inserted_hashes.toString()})
          }
        }
      );
   })

   socket.on('GetAllVideoComment', (data)=>
   {
      //  getUserComment(data); 
       const {id }= data; 
       console.log(id)
       db.searchByValue(
        {
          table: 'commentaire',
          searchAttribute: 'idVideo',
          searchValue: id,
          attributes: ['*']
        },
  
        (err, res) => 
        {
          if (err){console.log(err)}
          else{
               
            // console.log(res.data);
            res.data.forEach((element,index) => 
              {
              // console.log(element.idYoutube)

                  db.searchByValue({table: 'user',searchAttribute: 'idYoutube',searchValue: element.idYoutube,attributes: ['name','urlPic']},
                    (err, res) => 
                    {
                      if (err){console.log(err)}
                      else{

                         console.log(element);
                        const {name, urlPic}=res.data[0]; 
                        const commentData={...element, userName:name, urlProfil:urlPic}
                         console.log(commentData)
                         socket.emit('sendAllVideoComment', {commentData})
                      }
                    }
                  );  
            });
          }
        }
      );  
      //  db.insert(
      //   {table: 'commentaire', records: [{ commentaire:termComment, idVideo:idVideo, idYoutube:idClient }]
      //   },
      //   (err, res) => {
      //     if (err){console.log(err)}
      //     else{
      //        socket.emit('sendUserComment', {termComment,idComment:res.data.inserted_hashes.toString()})
      //     }
      //   }
      // );
   })
    


   

   // subcomment listener
   socket.on('subcommentUser', (data)=>
   {
       console.log(data)
       getUserSubComment(data); 
       const {termComment}= data
       socket.emit('sendUserSubComment', {termComment})
   })
});


server.listen(5000);