const mongoose=require('mongoose');

const ClasseSchema=mongoose.Schema({
	_id:String,
	Nom:{
		type:String,
		required:true
	},
	Niveau:{
		type:Number,
		required:true
	},
	Filiere:{
		type:String,
		required:true
	},
	Member:[String],
	id_Createur:String,
	Date_Creation:Date
})

module.exports=mongoose.model('Classe',ClasseSchema);