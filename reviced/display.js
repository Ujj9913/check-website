var mysql = require("mysql");

var cn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ujjval@9913",
    database: "student"

}
);
cn.connect((err) => {
    if (err) throw err;
    console.log("connceted");
    const a = 3;
    const sql = "select * from stdetails where rno=" + mysql.escape(a);
    cn.query(sql, (err, result, fileds) => {
        if (err) throw err;
        console.log(result);
    });
});