import mongoose from "mongoose";
// here we are going to creat a schema for data insertion//
const client_schema=new mongoose.Schema({
    name:{type:String, require:true, trim:true},
    email:{type:String, require:true},
    phone:{type:Number, min:1000000000, max:9999999999},
    password:{type:String},
    join:{type:Date,default:Date.now}
})


//  here we creat a collection "vill_list" in the mentioned database which
//follow the above schema
const  client_model=mongoose.model('client_list', client_schema);

export default client_model;
