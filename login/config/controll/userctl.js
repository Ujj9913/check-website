const Users = require('../models/user')
const session = require('express-session');
const bcrypt = require('bcrypt');
const cookie = require('cookie-parser')
const passport = require('passport')
const { default: mongoose } = require('mongoose');
const jwt = require('jsonwebtoken')
// const { use } = require('../../route');
const http = require('http')
const auth = require('../auth');

const adduser = (req, res) => {
    if (req.body.username == '' || req.body.pass == '' || req.body.email == '') {
        res.send("username,password and email is required");
    }
    console.log(req.body);
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.pass, salt);

    var data = new Users({
        id: new mongoose.Types.ObjectId(),
        name: req.body.username,
        email: req.body.email,
        password: hash
    });
    data.save((err, result) => {
        if (err) {

            console.log(err)
        }
        else {
            res.redirect('/login')
        }
    })

}
const logincheck = async (req, res) => {
    if (req.body.username == '' || req.body.pass == '') {
        if (req.body.username == '') {
            res.send("username is required");
        }
        else if (req.body.pass == '') {
            res.send("password are required");
        }
    }
    else {


        var token;
        var results = await Users.findOne({ name: req.body.username }, {});
        if (results) {

            var check = await bcrypt.compare(req.body.pass, results.password)
            token = await results.generateAuthToken();
            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })



            if (check) {
                sess = req.session;
                sess.name = results.name;
                sess.email = results.email;

                let params = {
                    email: sess.email, name: sess.name
                };
                var header = res.header(sess)

                res.redirect('/home');
            } else {
                res.redirect('/login',)
            }



        } else {
            res.redirect('/login')
        }
    }
    
}
module.exports = { adduser, logincheck }