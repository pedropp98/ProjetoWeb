'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Client = require('../Models/ClientModel');


exports.logout = (req, res) => {
   req.session.destroy();
   res.redirect('/');
//    const { username, password } = req.body;
  
//   // Perform login validation
//   if (username === 'admin' && password === 'admin123') {
//     // Set user data in session
//     req.session.user = {
//       username: 'admin',
//     };
    
//     res.json({ success: true });
//   } else {
//     res.status(401).json({ error: 'Invalid credentials' });
//   }
};

exports.login = async (req, res, next) => {
   // Destroy session and remove user data

   const userLogin = req.body;

   console.log('Inside local strategy callback');
 
     // Find the user in the database based on their email
   try{
      if(userLogin.email && userLogin.password){
         if(req.session.authenticated){

         }
         else{
            const userDB = await Client.findOne({email : userLogin.email}).lean();
            console.log(userDB);

            if(!userDB || userDB.password !== userLogin.password){
               res.status(401).json({ error: 'Incorrect email or password' });
            }
            else{
               req.session.authenticated = true;
               req.session.user = { username : userLogin.email };
               res.status(200).json({ message: 'Login successful', req : req.session});
            }
         }
      }
      else{
         res.status(403).json({error : 'Bad credetials'});
      }

      

      //req.logout(); // Assuming you're using passport's req.logout() method
      req.session
   }
   catch(error){
      throw error;
   }
};