const mongoose=require('mongoose');
const MessageSchema=mongoose.Schema({
	_id:{
		type:String,
		required:true
	},
	Contenu:String,
	Date_creation:Date,
	Receive_param:Boolean,
	Read_param:Boolean,
	isEnseignant:Boolean,
	id_Etudiant:{
		type:String,
		required:true
	}
})
module.exports=MessageSchema;