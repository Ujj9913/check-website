var mysql=require("mysql");


var cn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Ujjval@9913"

})

cn.connect((err)=>{
   if(err) throw err;
   console.log("connected");
   cn.query("create database student",(err,result)=>{
       if(err) throw err;
       console.log("created coplaty");
    });
});
