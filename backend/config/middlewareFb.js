const admin = require('./fireBaseConfig');
const db= require('../config/dbConfig'); ; 
const {addUser}= require('../models/AuthUser'); 
let user


class Middleware {
	async decodeToken(req, res, next) {
		const token = req.headers.authorization.split(' ')[1];
		try {
			const decodeValue = await admin.auth().verifyIdToken(token);
			if (decodeValue) 
         {
            const idUser=decodeValue.user_id
            db.searchByValue(
                { table: 'user', searchAttribute: 'idYoutube',searchValue: idUser,attributes: ['*']},
          
                (err, res) => 
                {                 
                  let existingUser= res.data;
                  // if user not exist create new User
                         if(!existingUser.length)
                         {
                            console.log('user not exist')
                              const newUser= {
                              id:idUser,
                              name: decodeValue.name,
                              email:decodeValue.email, 
                              picture:decodeValue.picture, 
                            }
                            addUser(newUser.id, newUser.name,newUser.email,newUser.picture);
                            // return  newUser;
                            req.data=newUser;
                            next()
                               
                         }
                          // if exist retrieve user data 
                         else{
                        //   existingUser[0]= {...existingUser[0], accessToken}
                            // console.log(existingUser);
                            console.log('user exist')
                            req.data=existingUser;
                            next()
                          }
                  })}
		} catch (e) {
			return res.json({ message:'Error Network ' });
		}
	}
}
module.exports = new Middleware();