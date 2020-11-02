const express = require('express');
const authBod = require('../controllers/authBod');
const {addManager,deleteManager, getManagers, loginManager} = require('../controllers/manager');
const Router = express.Router();

Router.post('/add',authBod,addManager);
Router.post('/delete',authBod,deleteManager);
Router.get('/manager',authBod,getManagers);
Router.post('/signin',loginManager);


module.exports = Router;