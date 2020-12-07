const express=require('express');
const router=express.Router();

const User=require('../controllers/user.controller.js')


router.post('/Login',User.Login)
router.post('/SignUp',User.SignUp)
router.get('/users',User.GetUser)
router.get('/user/:id',User.GetOneUser)
router.delete('user/:id/delete',User.DeleteUser)
router.put('/user/:id/update',User.UpdateUser)
module.exports=router;