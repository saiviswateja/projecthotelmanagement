const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;


const transactionSchema = mongoose.Schema({
    guestDetails:{type:ObjectId,ref:"Guest"},
    rooms:[{type:ObjectId,ref:"Room"}],
    amount:{
        type:Number,
        required:true
    }
});


module.exports = mongoose.model("Transaction",transactionSchema);