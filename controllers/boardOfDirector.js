const BoardOfDirector = require("../models/BoardOfDirector");
const jwt = require('jsonwebtoken');

exports.loginBod = (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(422).json({
            error:"please enter the required fields"
        });
    }
    BoardOfDirector.findOne({email:email},(err,bod)=>{
        if(err){
            return res.status(400).json({
                error:"error"
            });
        }
        if(bod.password==password && bod.email==email){
                const token = jwt.sign({_id:bod._id},"secret");
                bod.password = undefined
                return res.send({token,user:bod});
        }
        return res.send("Invalid credentials")
    })
}