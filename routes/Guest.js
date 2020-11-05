const express = require('express');
const { model } = require('mongoose');
const { bookRoom } = require('../controllers/Guest');
const Router = express.Router();

Router.post('/bookroom',bookRoom);

module.exports = Router;