const express = require('express');
const multer = require('multer');
const signupLogincontrollers = require('../controllers/signupLogincontrollers')

const router = express.Router();
router.use(express.urlencoded({extended:false}));

const upload = multer({
    storage : multer.diskStorage({}) , 
    limits : {fileSize : 10*1024*1024}
})

router.get('/signupPage/student', (req,res)=>{
    res.render('signupPageForStudent')
})

router.get('/loginPage/student', (req,res)=>{
    res.render('loginPageForStudent')
})

router.get('/signupPage/employee', (req,res)=>{
    res.render('signupPageForEmployee')
})

router.get('/loginPage/employee', (req,res)=>{
    res.render('loginPageForEmployee')
})

router.post('/signup/student',upload.single('profileImage') ,(req,res)=>{
    signupLogincontrollers.signUpStudent(req,res);
})

router.post('/signup/employee',upload.single('profileImage') ,(req,res)=>{
    signupLogincontrollers.signUpEmployee(req,res);
})


module.exports = router ;