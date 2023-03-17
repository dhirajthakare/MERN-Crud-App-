const usermodel = require("../model/usermodel");
const bcrypt = require('bcryptjs');

exports.creteuser = async (req, res) => {
  try {
    const hashpassword = bcrypt.hashSync(req.body.Password,10);
    const save = await new usermodel({
      Name: req.body.Name,
      Email: req.body.Email,
      password: hashpassword,
      phone: req.body.phone,
      Gender: req.body.Gender,
    }).save();
    if (save) {
      res.json(save);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateuser = async (req, res) => {
    try {
      const update = await usermodel.updateOne({_id:req.body.id},{$set:{
        Name: req.body.Name,
        Email: req.body.Email,
        phone: req.body.phone,
        Gender: req.body.Gender,
      }});
      if (update) {
        res.json(update);
      }
    } catch (err) {
      res.status(400).json(err);
    }
  }

  exports.getAlluser = async (req,res)=>{
    try{
        const regex = new RegExp(req.params.search,'i');
        const data = await usermodel.find({$or:[{Name:regex},{Email:regex}]});
        res.json(data);
    }catch(err){
        res.status(400).json(err);
    } 
  }

  exports.deleteUser = async (req,res)=>{
    try{
        const deleteuser = await usermodel.deleteOne({_id:req.params.id});
        if(deleteuser){
            res.json(deleteuser);
        }else{
            res.status(400).json("something happen while delete");
        }
    }catch(err){
        res.status(400).json(deleteuser);
    } 
  }
