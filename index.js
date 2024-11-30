const express = require('express');
const connection = require('./connecton');
const signupLogin = require('./routes/signupLogin');
const book = require('./routes/book')
const path = require('path')

connection();
const app = express();

app.use(signupLogin);
app.use(book);

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.listen(3000, (err)=>{
    if(err){
        console.log(err.message);
        
    }else{
        console.log("Server is running on port 3000")
    }
})