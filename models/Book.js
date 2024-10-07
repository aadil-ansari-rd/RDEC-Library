const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
const timestamps = require('mongoose-timestamps');
const BookSchema = new Schema({
    bookTitle : { type : String },
	authorName : { type : String },
	publicationHouse : { type : String },
	isbnNo : { type : String },
	price : { type : String },
	language  : { type : String },
	bookImage : { type : String },
    createdAt : Date,
    updatedAt : Date
})
BookSchema.plugin(timestamps, {  index : true });
module.exports = mongoose.model('Book', BookSchema);