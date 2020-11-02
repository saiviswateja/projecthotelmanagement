const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const managerRouter = require('./routes/manager');
const bodRouter = require('./routes/boardOfDirector');
const roomRouter = require('./routes/room');
const app = express();


app.use(bodyParser.json());

app.use('/api/manager',managerRouter);
app.use('/bod',bodRouter);
app.use('/inventory',roomRouter);


mongoose.connect("mongodb://localhost:27017/hotelmanagement",{useCreateIndex:true,useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>{
    console.log("mongo db connected");
})

app.listen(8000,()=>{
    console.log("server running bro");
});

