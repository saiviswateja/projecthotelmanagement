const Room = require('../models/Room');

exports.addRoom = (req,res)=>{
    if(req.body.typeName==null || req.body.price==null){
        return res.status(400).json({
            error:"Type and price should be mentioned"
        });
    }
    const room = new Room(req.body);
    room.save((err,r)=>{
        if(err){
            console.log(err)
            return res.status(400).json({
                error:"Error while saving the room"
            });
        }
        return res.send("Room saved bro")  
    })
}

exports.getRooms = (req,res)=>{
    console.log("came here to get all rooms");
    Room.find({},(err,rooms)=>{
        if(err){
            console.log(err)
            return res.status(400).send(err)
        }
        return res.send(rooms);
    })
}