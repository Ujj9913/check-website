var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "ujjval",
  password: "Ujjval@9913"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});