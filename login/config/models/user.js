const mongoose = require('mongoose');
var conn=require('../db');
const jwt= require("jsonwebtoken")
var userSchema=new mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
},{
    timestamps:true
});
userSchema.methods.generateAuthToken= async function(){
    try{
        let token=jwt.sign({_id:this._id},"thisjbsjbfjdbszzshhsdvf")
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
}

let users=conn.model('users',userSchema);
module.exports=users;