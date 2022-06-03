var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ujjval@9913",
  database:"mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //const q1="selct * from customers";
    
           
  con.query("select * from  customers", function (err, result,fileds) {
    if (err) throw err;
    console.log(result);
  });
});