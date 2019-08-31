 const router = require('express').Router();
 const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../jokes/jokes-model');
const secrets = require('../config/secrets')  
const usersModel = require('../jokes/jokes-model');




router.post('/register', (req, res) => {
  // implement registration
   let user =req.body;
  const hash = bcrypt.hashSync(user.password,10);
  user.password = hash;

  Users.add(user)
  .then(saved => {
      res.status(201).json(saved);
  })
  .catch(err => {
      res.status(500).json(err)
  });
});
 
router.post('/login', (req, res) => {
  // implement login
   let {username, password} = req.body;
  Users.findBy({username})
  .first()
  .then(user=> {
    if(user && bcrypt.compareSync(password, user.password)){
      const token = getToken (user)
        //  req.session.user = user; 
       res.status(200).json({
        message: `Welcome${user.username}!`
 });
 
}else{
  res.status(401).json({message: 'Invalid credentials'})
}
})
.catch(err=> {
res.status(500).json(err)
})
});

// router.post('/login', validateUser, async (req, res) => {
//   try {
//     let user = await usersModel.getByUserName(req.body.username);
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

 

function getToken(user){
  const payload ={
    subject: user.id,
    username: user.username,
   };
  const secret = secrets.jwtSecret;
  const options = {
    expiresIn: '1d'
  };
   

 return jwt.sign(payload, secrets.jwtSecret, options);
 
}
module.exports =router;