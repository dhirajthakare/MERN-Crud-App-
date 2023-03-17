const mongoose = require('mongoose');
const mongooSchema = mongoose.Schema({
    Name:String,
    Email:String,
    password:String,
    phone:String,
    Gender:String
})

module.exports = mongoose.model('users',mongooSchema);