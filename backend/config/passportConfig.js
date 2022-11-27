const GoogleStrategy= require ('passport-google-oauth2').Strategy; 
// const User= require('./userModel');
const {addUser}= require('../models/AuthUser'); 
const db= require('../config/dbConfig'); 

let existingUser 

module.exports = (passport) => {

    passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:5000/auth/google/callback",
        passReqToCallback   : true
      },

      async (request, accessToken, refreshToken, profile, done) => {
        try 
        {
         db.searchByValue(
            { table: 'user', searchAttribute: 'idYoutube',searchValue:profile.id,attributes: ['*']},
      
            (err, res) => 
            {
              
              existingUser= res.data;

              // if user not exist create new User
                     if(!existingUser.length)
                     {
                        const newUser= {
                          id:profile.id,
                          name: profile.displayName,
                          email:profile.emails[0].value, 
                          picture:profile.picture, 
                          token:accessToken
                        }
                        addUser(newUser.id, newUser.name,newUser.email,newUser.picture);
                        return done(null, newUser); 
                     }
                      // if exist retrieve user data 
                     else{
                      existingUser[0]= {...existingUser[0], accessToken}
                      console.log('user exist')
                      return done(null, existingUser[0]);
                     }
                    
              }
          )
                     
        // return done(null, newUser);
        } catch (error) {
            return done(error, false)
        }
      }
    ));
}

// async (request, accessToken, refreshToken, profile, done) => {
//   try {
//   let existingUser = await User.findOne({ 'google.id': profile.id });
//   // if user exists return the user
//   if (existingUser) {
//   return done(null, existingUser);
//   }
//   // if user does not exist create a new user
//   console.log('Creating new user...');
//   const newUser = new User({
//   method: 'google',
//   google: {
//   id: profile.id,
//   name: profile.displayName,
//   email: profile.emails[0].value
//   }
//   });
//   await newUser.save();
//   return done(null, newUser);
//   } catch (error) {
//   return done(error, false)
//   }
//   }
 