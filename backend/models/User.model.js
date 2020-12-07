const mongoose=require('mongoose');


const UserSchema=mongoose.Schema({
Name:{
		type:String,
		required:true

	},
Surname:{
		type:String,
	},
Pseudo:{
		type:String,
		required:true

	},
Phone:{
		type:Number,

	},
Email:{
	type:String,
	required:true,
	unique:true

},
Password:{
	type:String,
	required:true
},
Role:String,
Filiere:{
	type:String,
},
Niveau:{
	type:Number
},
Departement:{
	type:String
},
Formation:String
})
module.exports=mongoose.model('User',UserSchema);