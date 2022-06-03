const express = require('express');

const app = express()
const http = require('http')
const path = require('path');
const server = http.createServer(app)
const { Server } = require("socket.io");
const io = new Server(server);
const fs = require('fs')
app.set('view engine', 'ejs');
const mess = require('./mongo/user')
var bodyParser = require('body-parser')
app.set('views', path.join(__dirname, './views'));

app.get('/', (req, res) => {
    res.render('home', { title: "homechat" })
})


io.on('connection', (socket) => {
    console.log("connection is on");

    mess.find().then(result => {

        socket.emit('output-messages', result)
        // console.log(result.message)
    })


    socket.on('chat message', msg => {
        const message = new mess({ message: msg });
        message.save().then(() => {
            io.emit('chat message', msg);
        })
    });
    socket.on('delete_chat', data => {
        mess.deleteOne({ "messsage": data })
        
    })
});




server.listen(3000, () => {
    console.log("this is runing on the :-3000")
})
