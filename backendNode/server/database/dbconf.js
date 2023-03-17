const mongoose = require('mongoose');
mongoose.connect(process.env.MongoDbUrl).then((res)=>{
    console.log("connection done");
}).catch(err=>{
    console.log(err);
})

module.exports = mongoose;