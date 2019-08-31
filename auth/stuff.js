// const router = require('express').Router();
//  const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const Users = require('../jokes/jokes-model');
// const secrets = require('../config/secrets')  




// router.post('/register', (req, res) => {
//   // implement registration
//    let user =req.body;
//   const hash = bcrypt.hashSync(user.password,10);
//   user.password = hash;

//   Users.add(user)
//   .then(saved => {
//       res.status(201).json(saved);
//   })
//   .catch(err => {
//       res.status(500).json(err)
//   });
// });

// router.post('/login', (req, res) => {
//   // implement login
//    let {username, password} = req.body;
//   Users.findBy({username})
//   .first()
//   .then(user=> {
//     if(user && bcrypt.compareSync(password, user.password)){
//       const token = generateToken (user)
//         //  req.session.user = user; 
//        res.status(200).json({
//         message: `Welcome${user.username}!`
//  });
 
// }else{
//   res.status(401).json({message: 'Invalid credentials'})
// }
// })
// .catch(err=> {
// res.status(500).json(err)
// })
// });


 

// function getToken(user){
//   const payload ={
//     subject: user.id,
//     username: user.username,
//    };
//   const secret = secrets.jwtSecret;
//   const options = {
//     expiresIn: '1d'
//   };
   

//  return jwt.sign(payload, secrets.jwtSecret, options);
 

// }
// const router = require('express').Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const usersModel = require('../jokes/jokes-model');
// const secrets = require('../config/secrets')

// Register
// router.post('/register', validateUser, async (req, res) => {
//   try {
//     let credentials = req.body;
//     let hash = bcrypt.hashSync(credentials.password, 14);
//     credentials.password = hash;
//     let new_user = await usersModel.insert(credentials);
//     res.status(201).json(new_user);
//   } catch (err) {
//     res.status(500).json({ error: 'Error Message Goes Here' });
//   }
// });
// ​
// ​
// // Login
// router.post('/login', validateUser, async (req, res) => {
//   try {
//     let user = await usersModel.getByUsername(req.body.username);
//     if (user && bcrypt.compareSync(req.body.password, user.password)) {
//       let token = generateToken(user);
//       res.status(200).json({ token });
//     } else {
//       res.status(401).json({ message: 'Invalid credentials.' });
//     }
//   } catch (err) {
//     res.status(500).json({ error: 'Error Message Goes Here' });
//   }
// });
​
// Validate User
// function validateUser(req, res, next) {
//   if (req.body) {
//     if (req.body.username) {
//       if (req.body.password) {
//         next();
//       } else {
//         res.status(400).json({ message: 'Missing required password field.' });
//       }
//     } else {
//       res.status(400).json({ message: 'Missing required username field.' });
//     }
//   } else {
//     res.status(400).json({ message: 'Missing user data.' });
//   }
// }
​
// Generate Token
 
// module.exports = router;
