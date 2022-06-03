const express = require('express');
const app = express();
const session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

// const mongoose=require('mongoose');
const mysql = require('mysql');
const cn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Ujjval@9913',
    datbase: 'ca'

});

// all miedal war is hear
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))
const options = {

    host: 'localhost',

    user: 'root',
    password: 'Ujjval@9913',
    datbase: 'ca'
};


const sessionstore = new MySQLStore(options);
app.use(session({
    secret: "key that will sign cookie",
    resave: false,

    saveUninitialized: false,
    store: sessionstore

}));
app.get("/", (req, res) => {

    res.render("index");
})

app.get('/nouser', (req, res) => {
    res.render("nouser");
})

app.get('/home', (req, res) => {
    res.render("nouser");
})
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    cn.query("select * from cust where username = ? and password = ?", [username, password], (err, result, fildes) => {
        if (result.length > 0) {
            res.render('/home');
        }
        else {
            res.render('/nouser');
        }

    })
})

app.listen(5000, console.log(`server runing on 5000 port`));