const Manager = require('../models/Manager');

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
    Manager.findOneAndDelete({name:"Viswa"},(err,manager)=>{
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
