const express = require('express');
const multer = require('multer');
const bookcontroller = require('../controllers/bookcontrollers')

const router = express.Router();
router.use(express.urlencoded({extended:false}));

const upload = multer({
    storage : multer.diskStorage({}) , 
    limits : {fileSize : 10*1024*1024}
})


router.get('/' , (req, res)=>{
    res.render('home');
})

router.post('/book/added',upload.single('bookImage'),(req,res)=>{
    console.log(req.file);
    bookcontroller.bookAdded(req,res);
})

router.get('/add/book',(req,res)=>{
    res.render('addBook');
})

router.get('/books' , (req,res)=>{
    bookcontroller.getBooks(req,res);
})

router.get('/edit/:id' ,(req,res)=>{
    bookcontroller.getEditPage(req,res);
})

router.post('/book/edit/:id',upload.single('bookImage'), (req,res)=>{
    bookcontroller.bookEdit(req,res);
})

router.get('/delete/:id',(req,res)=>{
    bookcontroller.deleteBook(req,res);
})

module.exports = router;
