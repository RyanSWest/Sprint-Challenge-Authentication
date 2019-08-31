const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);



const session = require ('express-session')
const knexSessionStore = require('connect-session-knex')(session);
 


const sessionOptions ={
  name: 'mycookie',
  secret: 'cookiesareyummy',
  cookie:{
  maxAge: 1000 * 60 * 60,
  secure : false,
  httpOnly:true
},
httpOnly:true,
resave: false,
saveUninitialized: false,

store: new knexSessionStore({
  knex:require('../database/dbConfig'),
  tablename: 'sessions',
  
 sidfieldname:'sid',
 createTable: true,
 clearInterval: 1000 * 60 * 60
})
}
 // knexSessionStore(session);

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionOptions))
module.exports = server;
