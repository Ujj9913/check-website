var mysql = require("mysql");

var cn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Ujjval@9913",
    database:"student"
    
});

    cn.connect((err)=>{
        if(err) throw err;
        console.log("conncted");
        var q1="create table stdetails(rno integer(3),sname varchar(20),saddress varchar(20),mobileno integer(10))";
        cn.query(q1,(err,result)=>{
            if (err) throw err;
            console.log("table created competed!");
        })
    })