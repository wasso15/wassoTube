const express= require('express'); 
const app= express(); 

const http= require('http'); 
const cors = require('cors'); 
const {Server} = require('socket.io'); 
require('dotenv').config(); 
const passport= require('passport')
require('./config/passportConfig')(passport); 
const session= require('express-session'); 


const {getVideoComment, getUserComment, getUserSubComment}= require('./controllers/commentVideo')



const server= http.createServer(app); 
app.use(cors()); 
// initialize Sessionn
const sessionMiddleware= session({
  secret: "wassotube",
  resave: false ,
  saveUninitialized: true ,
  cookie: { secure: true }
})



app.use(sessionMiddleware)

// init passport for every route call
app.use(passport.initialize()); 
app.use(passport.session()); 


passport.serializeUser( (user, done) => {

  process.nextTick(function() {
    return done(null, user);
  });
})  


passport.deserializeUser((user, done) => {
  process.nextTick(function() {
    return done(null, user);
  })
})

const io = new Server(server, 
    {
    cors:
    {
        origin: 'http://localhost:3000', 
        methods:['GET', 'POST'],
        credentials: true
    }, 
})

app.options('*', cors()); 
app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        session:true,
        successRedirect: 'http://localhost:3000',
        failureRedirect: 'http://localhost:3000'
}));


 // EndPoint Api 
  app.get("/wassotubeUser", (req, res) => {
      res.status(200).json({
        success: true,
        message: "successfull",
        user: "bonsoir",
      }
      );
    
  });


  app.get('/logout', function(req, res, next)
  {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });



//  connection & gestion des evenements & emission des evenements 
  // convert a connect middleware session to a Socket.IO middleware session
// const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);

// io.use(wrap(sessionMiddleware));

// io.use((socket, next) => {
//   const session = socket.request.session;
//   if (session && session.authenticated) {
//     next();
//   } else {
//     next(new Error("unauthorized"));
//   }
// });


// io.on("connection", (socket) => {
 
//   // Session user info on socket 
//   console.log(` Id session N° ${socket.request.session}`);

//    // socket.on('videoComment',getVideoComment);
//    socket.on('commentUser', (data)=>
//    {
//        getUserComment(data); 
//        const {termComment}= data
//        socket.emit('sendUserComment', {termComment})
//    })

       
//    // subcomment listener
//    socket.on('subcommentUser', (data)=>
//    {
//        console.log(data)
//        getUserSubComment(data); 
//        const {termComment}= data
//        socket.emit('sendUserSubComment', {termComment})
//    })
// });



server.listen(5000);