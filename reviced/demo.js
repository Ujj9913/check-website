var express = require("express");
var app = express();
var mydb = require("mysql");

app.set('view engine', 'ejs');
const cn = mydb.createConnection({
    host: "localhost",
    user: "root",
    password: "Ujjval@9913",
    database: "student"

})
var r1;
cn.connect((err) => {
    if (err) throw err;
    console.log("connected");
    cn.query("select* from stdetails", (err, result, fileds) => {
        if (err) throw err;
        r1 = result;
        console.log(r1);
    })
})

app.get('/home', (req, res) => {
    res.render('home', { data: r1 });

});
app.listen(3000);