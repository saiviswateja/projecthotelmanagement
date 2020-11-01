const express = require('express');
const authBod = require('../controllers/authBod');
const {addManager,deleteManager, getManagers} = require('../controllers/manager');
const Router = express.Router();

Router.get('/add',authBod,addManager);
Router.get('/delete',authBod,deleteManager);
Router.get('/manager',authBod,getManagers);
module.exports = Router;