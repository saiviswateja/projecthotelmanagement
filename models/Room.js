const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    typeName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model("Room",roomSchema);