const express = require('express');
const authManager = require('../controllers/authManager');
const { addRoom, getRooms } = require('../controllers/room');
const Router = express.Router();

Router.post('/room',authManager,addRoom);

Router.get('/room',authManager,getRooms);

module.exports = Router;