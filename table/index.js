const express = require("express");
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const mysql = require("mysql");
app.set("view engine", "ejs");
const cn = mysql.createPool({
    connectionLimit: 100, //important
    host: 'localhost',
    user: "root",
    password: "Ujjval@9913",
    database: "student"




});
var c1 = ""

cn.query("select * from stdetails order by rno", (err, result, fildes) => {
    if (err) throw err;

    c1 = result;
    console.log(c1);
});

app.get("/", (req, res) => {
    res.render('home', { c1 });
});
app.post("/", (req, res) => {

    const det = req.body;
    const q1 = 'insert into stdetails values(' + mysql.escape(det.rno)+','  + mysql.escape(det.sname)+',' +  mysql.escape(det.saddress) +','+  mysql.escape(det.mno) + ')';
    cn.query(q1, (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});
app.post('/delete',(req,res)=>{
    const no=req.body;
    const q1="DELETE FROM stdetails WHERE rno ="+mysql.escape(no.rno);
    cn.query(q1,(err,result)=>{
        if(err) throw err;
        res.redirect("/");
    });
});
app.get("/delete",(req,res)=>{
    res.redirect("/");
});
app.listen(3000);