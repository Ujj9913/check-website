var mysql=require("mysql");

var cn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Ujjval@9913",
    database:"student"
});
cn.connect((err)=>{
    if(err)throw err;
    console.log("connected");
    const q1=`insert into stdetails(rno,sname,saddress,mobileno) values ?`;
    const data=[
        [1,'ujjval','punagam',97864554],
        [2,'fukara','delhi',4587888],
        [3,'srusti','gandnagar',7845715],
        [4,'gandhi','hardnagar',4571245],
        [5,'sahajanad','akshham',47851274]
    ];
    
    cn.query(q1,[data],(err,result)=>{
        if (err)throw err;
        console.log("insert recored");
    }) ;

});