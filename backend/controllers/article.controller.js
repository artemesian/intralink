const Article =require('../models/Article.model.js');


module.exports.AddArticle=(req,res,next)=>{
	const {Titre,Resumé,Audio,Video,Text,Image,Commentaire,Likes,Vues,Date_Publication}=req.body
   const article =new Article({
   	Titre:Titre,
   	Resumé:Resumé,
   	Audio:Audio,
   	Video:Video,
   	Text:Text,
   	Image:Image,
   	Commentaire:Commentaire,
   	Likes:Likes,
   	Vues:Vues,
   	Date_Publication:Date_Publication
   })
   article.save()
   .then(article=>res.status(200).json({message:"article is create"}))
   .catch(error=>res.status(500).json({error:error.message}))
}
module.exports.GetArticle=(req,res,next)=>{
    Article.find({})
    .then(article=>res.status(200).json({ARTICLE:article}))
    .catch(error=>console.log(error))
}
module.exports.GetOneArticle=(req,res,next)=>{
    const {id}=req.params.id
    Article.findOne({id})
    .then(article=>res.status(200).json({ARTICLE:article}))
    .catch(error=>console.log(error))
}
module.exports.DeleteArticle=(req,res,next)=>{
    Article.findByIdAndRemove(req.params.id)
      .then(article => {
        res.status(200).json({ message: `article ${article.Titre} was deleted`});
    })
      .catch(err => res.status(500).json({ error: err.message }))
}
module.exports.UpdateArticle=(req,res,next)=>{
    const {id}=req.params.id
  Article.findOneAndUpdate({id}, {...req.body}) 
      .then(article => {
        console.log(user)
        res.status(200).json({message: `Article ${article.Titre} was updated`});
    })
    .catch(err => res.status(500).json({ error: err.message }))
}