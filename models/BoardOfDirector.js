const mongoose = require('mongoose');

const BodSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:0
    }
});

module.exports = mongoose.model("boarddirectors",BodSchema);