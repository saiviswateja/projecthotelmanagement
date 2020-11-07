const Guest = require('../models/Guest');
const Room = require('../models/Room');
const Transaction = require('../models/Transaction');

exports.bookRoom =(req,res)=>{
    Guest.findById({_id:"5fa438b9f3a8ba4c949bfb31"},(err,guest)=>{
        if(err){
            return res.send(err)
        }
        if(guest)
        {
            Room.findById({_id:"5fa244c1855dcb40902d17b5"},(err,room)=>{
                if(err){
                    return res.send(err);
                }
                if(room){
                    const transaction = new Transaction({
                        guestDetails:guest,
                        rooms:[room],
                        amount:20000
                    });
                    transaction.save((err,trans)=>{
                        if(err){
                            return res.send(err)
                        }
                        return res.send(trans)
                    })
                }
            })
        }
    })
    // const transaction = new Transaction({
    //     guestDetails:
    // });
    // transaction.save((err,trans)=>{
    //     if(err){
    //         return res.send(err);
    //     }
    //     return res.send(trans);
    // });
    // return res.send(req.body)
}


// {
//     "guestDetails":{
//         "name":"viswa teja",
//         "mobileNumber":"949085",
//         "email":"teja@gmail.com",
//         "city":"anantapur",
//         "state":"AP",
//         "country":"India"
//     },
//     "rooms":[
//         {
//             "typeName":"Deluxe",
//             "price":"1800"
//         }
//     ],
//     "amount":7000
// }

// 5fa438b9f3a8ba4c949bfb31