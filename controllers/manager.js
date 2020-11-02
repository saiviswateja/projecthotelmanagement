const Manager = require('../models/Manager');
const jwt = require('jsonwebtoken');

exports.loginManager = (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(422).json({
            error:"please enter the required fields"
        });
    }
    Manager.findOne({email:email},(err,manager)=>{
        if(err){
            return res.status(400).json({
                error:"no on eound with the specified email in the database"
            });
        }
        if(manager)
        if(manager.password==password && manager.email==email){
                const token = jwt.sign({_id:manager._id},"secret");
                manager.password = undefined
                return res.send({token,user:manager});
        }
        return res.send("Invalid credentials")
    })
}

exports.addManager = (req,res)=>{
    const managerFromSchema = new Manager(req.body);
    Manager.findOne({email:req.body.email},(err,manager)=>{
        if(err){
            return res.status(400).send({
                error:"Error while saving the manager"
            });
        }
        if(manager){
            return res.status(400).send({
                error:"Already has a manager with the same mail"
            });
        }
        else{
            managerFromSchema.save().then(result=>{
                res.json({manager:result});
            })
            .catch(err=>{
                console.log(err);
            })
        }
    })
    
}

exports.deleteManager = (req,res)=>{
    Manager.findOneAndDelete({name:req.params.id},(err,manager)=>{
        if(err){
            console.log(err);
            return res.send("its ok to user");
        }
        else{
           if(manager){
               return res.send(manager);
           }
           else{
               return res.send("No manager found");
           }
        }
    });
}

exports.getManagers = (req,res)=>{
    Manager.find({},(err,managers)=>{
        return res.send(managers);
    })
}
