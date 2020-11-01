const express = require('express');
const authBod = require('../controllers/authBod');
const { loginBod, signInBod } = require('../controllers/boardOfDirector');
const Router = express.Router();

Router.post('/login',loginBod);

module.exports = Router;