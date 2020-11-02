const express = require('express');
const authManager = require('../controllers/authManager');
const { addRoom, getRooms, deleteRoom } = require('../controllers/room');
const Router = express.Router();

Router.post('/room',authManager,addRoom);

Router.get('/room',authManager,getRooms);

Router.delete('/room/:id',authManager,deleteRoom);

module.exports = Router;