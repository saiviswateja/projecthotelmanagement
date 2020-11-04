const express = require('express');
const authBod = require('../controllers/authBod');
const {addManager,deleteManager, getManagers, loginManager, updateManager} = require('../controllers/manager');
const Router = express.Router();

Router.post('/add',authBod,addManager);
Router.delete('/delete/:id',authBod,deleteManager);
Router.get('/manager',authBod,getManagers);
Router.post('/signin',loginManager);
Router.put('/update',updateManager);


module.exports = Router;