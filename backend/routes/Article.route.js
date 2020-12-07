const express =require('express');
const router=express.Router();

const Article=require('../controllers/article.controller.js')

router.post('/SignUp',Article.AddArticle)
router.get('/users',Article.GetArticle)
router.get('/user/:id',Article.GetOneArticle)
router.delete('user/:id/delete',Article.DeleteArticle)
router.put('/user/:id/update',Article.UpdateArticle)

module.exports=router;