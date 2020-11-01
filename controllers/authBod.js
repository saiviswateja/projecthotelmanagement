const  jwt  = require("jsonwebtoken");
const BoardOfDirector = require("../models/BoardOfDirector");

module.exports = (req,res,next)=>{
    console.log("It entered the middle ware");
    console.log(req.body);
    const {authorization} = req.headers;
    console.log(authorization);
    if(!authorization){
        return res.status(400).json({
            error:"You must be logged in"
        });
    }
    const token = authorization.replace("Bearer ","");
    console.log(token);
    jwt.verify(token,"secret",(err,payload)=>{
        if(err){
            return res.status(401).json({
                error:"You must be logged in"
            });
        }
        console.log("payload is "+payload);
        const {_id,name} = payload;
        console.log(_id);
        BoardOfDirector.findById(_id).then(data=>{
            req.bod = data
            next();
        })
    })
}
