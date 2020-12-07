const jwt =require('jsonwebtoken');
const bcrypt=require('bcrypt');


const User =require('../models/User.model.js');

module.exports.Login=(req,res,next)=>{
	const {email,password}=req.body;
    console.log(req.body)
	User.findOne({email})
	.then(user=>{
		if(!user)
			return res.status(404).json({message:'not found !'});
		let valid=bcrypt.compareSync(password,user.Password);
		if(!valid)
			return res.status(401).json({massage:{auth:false,token:null}});
		let token=jwt.sign({user:user},process.env.KEY_JWT,{expiresIn:86400});
		res.status(200).json({message:{auth:true,token:token}});
	})
	.catch(err=>res.status(500).json({error:err.message}))
}

module.exports.SignUp=(req,res,next)=>{
    const {Email,Password,Phone,Name,Surname,Pseudo,Role,Niveau,Filiere,Departement,Formation}=req.body;
     console.log(req.body);
    bcrypt.hash(Password,10)
    .then(hash=>{
    	const user= new User({
    		Password:hash,
    		Email,
    		Name,
    		Surname,
    		Role,
    		Phone,
    		Pseudo,
            Niveau,
            Departement,
            Filiere,
            Formation
    	})
    	user.save()
    	.then(user=>{
            console.log(user)
           if(!user)
           	return res.status(404).json({error:"user are not created"})
            let token =jwt.sign({user:user},process.env.KEY_JWT,{expiresIn:86400});
            res.status(200).json({auth:true,token:token,message:'good'});

           })
    	.catch(error=>console.log(error))
    	})
    .catch(error=>console.log(error))
}
module.exports.GetUser=(req,res,next)=>{
    User.find({})
    .then(user=>res.status(200).json({USERS:user}))
    .catch(error=>console.log(error))
}
module.exports.GetOneUser=(req,res,next)=>{
    const {id}=req.params.id
    User.findOne({id})
    .then(user=>res.status(200).json({USERS:user}))
    .catch(error=>console.log(error))
}
module.exports.DeleteUser=(req,res,next)=>{
    User.findByIdAndRemove(req.params.id)
      .then(user => {
        res.status(200).json({ message: `User ${user.Name} was deleted`});
    })
      .catch(err => res.status(500).json({ error: err.message }))
}
module.exports.UpdateUser=(req,res,next)=>{
    const {id}=req.params.id
  User.findOneAndUpdate({id}, {...req.body}) 
      .then(user => {
        console.log(user)
        res.status(200).json({message: `User ${user.Name} was updated`});
    })
    .catch(err => res.status(500).json({ error: err.message }))
}