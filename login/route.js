const { application } = require('express');
const express = require('express');
const userctl = require('./config/controll/userctl');
var router = express()
var multer = require('multer');
var upload = multer();
const auth=require("./config/auth")
var http = require('http');
var fs = require('fs');
router.use(express.urlencoded({ extended: true }))
const port = 8000
router.get('/', (req, res) => {
    res.redirect('login');
})
router.get('/login', (req, res) => {
    res.render('login');

})
router.get('nouser', (req, res) => {
    res.render('nouser')
})
router.get('/add', (req, res) => {
    res.render('add')
})
router.get('/home', (req, res) => {
    // console.log(req.session);
    if (req.session.email) {
        res.render('home',{name:req.session.name,email:req.session.email})
        
    }
    else {
        // console.log('problem in route')
        res.redirect('/')
        
    }
})

router.post('/add-users', upload.any(), userctl.adduser)
router.post('/login', upload.any(), userctl.logincheck)
router.get('/nouser',(req,res)=>{
    res.render('nouser');
    res.send(req.root)
})
router.get('/log-out',(req,res)=>{

    req.session.destroy((err)=>{
        console.log(err)

    })
    res.redirect('/')
})
module.exports = router;