import mongoose from 'mongoose';
// here we are going to creat a schema for data insertion//
const village_schema = new mongoose.Schema({
    village: { type: String, require: true },
    district: { type: String, require: true },
    post: { type: String },
    code: { type: Number, max: 222139, min: 123456 }

})

//  here we creat a collection "vill_list" in the mentioned database which
//follow the above schema
const village_model = mongoose.model('vill_list', village_schema);

export default village_model;