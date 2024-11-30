const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
const timestamps = require('mongoose-timestamps');
const StudentSchema = new Schema({
    profileImage : { type : String },
    firstName : { type : String },
	LastName : { type : String },
	email : { type : String },
	password: { type : String },
	aktuRoll : { type : String },
    createdAt : Date,
    updatedAt : Date
})
StudentSchema.plugin(timestamps, {  index : true });
module.exports = mongoose.model('Student', StudentSchema);