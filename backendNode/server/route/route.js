const express = require('express');
const route = express.Router();
const userController = require('../controller/userContoller')

 route.get('/',(req,res)=>{
    res.json('Api')
 })

 route.post('/create',userController.creteuser);
 route.post('/updateuser',userController.updateuser);
 route.post('/getAllUser',userController.getAlluser);
 route.get('/deleteuser/:id',userController.deleteUser);


 module.exports = route