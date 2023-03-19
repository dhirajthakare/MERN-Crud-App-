const mongoose = require('mongoose');
const mongooSchema = mongoose.Schema({
    Firstname:String,
    Lastname:String,
    Email:String,
    Password:String,
    Mobile:String,
    Gender:String
})

module.exports = mongoose.model('users',mongooSchema);