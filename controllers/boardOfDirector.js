const BoardOfDirector = require("../models/BoardOfDirector");
const jwt = require('jsonwebtoken');

exports.loginBod = (req,res)=>{
    console.log(req.body)
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
        console.log(bod)
        if(bod)
        if(bod.password==password && bod.email==email){
                console.log("It enetred here bro");
                const token = jwt.sign({_id:bod._id},"secret");
                bod.password = undefined
                return res.send({token,user:bod});
        }
        return res.status(403).json({error:"Invalid credentials"});
    })
}