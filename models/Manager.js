const mongoose = require('mongoose');

const ManagerSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    number:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Manager",ManagerSchema);