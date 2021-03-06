const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const managerRouter = require('./routes/manager');
const bodRouter = require('./routes/boardOfDirector');
const roomRouter = require('./routes/room');
const guestRouter = require('./routes/Guest');
const cors = require('cors');

const app = express();



app.use(bodyParser.json());
app.use(cors());
app.use('/api/manager',managerRouter);
app.use('/bod',bodRouter);
app.use('/inventory',roomRouter);
app.use('/guest',guestRouter);


mongoose.connect("mongodb://localhost:27017/hotelmanagement",{useCreateIndex:true,useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>{
    console.log("mongo db connected");
})

// var connection = mongoose.createConnection("mongodb://localhost:27017/hotelmanagement");

app.listen(8000,()=>{
    console.log("server running bro");
});

