const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
const timestamps = require('mongoose-timestamps');
const EmployeeSchema = new Schema({
    profileImage : { type : String },
    firstName : { type : String },
	LastName : { type : String },
	email : { type : String },
	password: { type : String },
    createdAt : Date,
    updatedAt : Date
})
EmployeeSchema.plugin(timestamps, {  index : true });
module.exports = mongoose.model('Employee', EmployeeSchema);