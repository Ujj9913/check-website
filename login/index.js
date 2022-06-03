const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const cookieParser=require('cookie-parser');
const http=require('http')
const port = 8000;
app.use(session({
secret:'this123',
resave:false,
saveUninitialized:false,

}
))
app.use(cookieParser())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use('/', require('./route'));

app.listen(port, console.log(`server is runing on the ${port} `))
app.use((req, res) => {
    res.status(404).render('error')
 });