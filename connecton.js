const mongoose = require('mongoose');

async function connection(){
    try{
        await mongoose.connect("mongodb://localhost:27017/RdLibrary");
        console.log("Database connected")
    }catch(err){
        console(err.messege);
        
    }
}

module.exports = connection;