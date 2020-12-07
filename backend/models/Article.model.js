const mongoose=require('mongoose')
const Commentaire=require('./Commentaire.model.js')

const ArticleSchema=mongoose.Schema({
	Titre:{
		type:String,
		required:true
	},
	Resumé:{
		type:String,
		required:true
	},
	Text:{type:String},
	Video:[String],
	Audio:[String],
	Image:[String],
	Commentaire:[Commentaire],
	Likes:{type:Number},
	Vues:{type:Number},
	date_publication:{type:Date}
})
module.exports=mongoose.model('Article',ArticleSchema)