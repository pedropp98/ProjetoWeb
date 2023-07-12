'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Client = require('../Models/ClientModel');


const logout = (req, res) => {
   req.session.destroy((err) => {
      if (err) {
        console.error('Error while logging out:', err);
        res.status(500).send('Error while logging out');
      } else {
        res.send('Logged out');
      }
    });
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

const login = async (req, res) => {
   // Destroy session and remove user data
   const userLogin = req.body;

   console.log('Inside local strategy callback');

   console.log(req.session);
 
     // Find the user in the database based on their email
   try{
      
      if(authenticateUser(userLogin.email, userLogin.password)){
         req.session.user = {
            id : userLogin.email,
         };
         res.send({message: 'Logged in'});
      }
      else{
         res.status(401).send('Unauthorized');
      }

      //req.logout(); // Assuming you're using passport's req.logout() method
   }
   catch(error){
      throw error;
   }
};

const user = (req, res) => {
   if (req.session && req.session.user) {
      // Session is active, user is logged in
      const user = req.session.user;
      res.send(`Welcome, ${req.session.user.id}`).status(201);
    } else {
      // Session is not active, user is not logged in
      res.status(401).send('Unauthorized');
    }
}

const authenticateUser = async (username, password) => {
   try {
     // Find the user in the database by username
     const user = await Client.findOne({ username });
 
     if (user) {
       // Compare the provided password with the hashed password stored in the database
       const isPasswordValid = await user.comparePassword(password);
 
       return isPasswordValid;
     }
 
     return false; // User not found
   } catch (error) {
     console.error('Error authenticating user:', error);
     throw error;
   }
};

module.exports = {
   login,
   logout,
   user
}