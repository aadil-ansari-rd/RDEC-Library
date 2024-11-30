const Book = require('../models/Book');
const cloudinary = require('cloudinary');

async function bookAdded(req, res) {
    try {
        cloudinary.config({
            cloud_name: "dln7svzdo",
            api_key: "776616335115449",
            api_secret: "IFjZ6HTYGa1plOJB1xoObAE-fgc"
        })
        let book = new Book(req.body);
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            book.bookImage = result.secure_url;
        }
        book.save();
        res.render('AddSuccessful');
    } catch (err) {
        console.log(err.message);
    }
}
async function getBooks(req, res) {
    try {
        let books = await Book.find({});
        res.render('bookLibraryS', { books: books });
    } catch (err) {
        console.log(err.message);
    }
}

async function getEditPage(req, res) {
    try {
        let id = req.params.id;
        let book = await Book.findOne({ _id: id })
        res.render('editPage', { book });
    } catch (err) {
        console.log(err.message)
    }
}
async function bookEdit(req, res) {
    try {
        cloudinary.config({
            cloud_name: "dln7svzdo",
            api_key: "776616335115449",
            api_secret: "IFjZ6HTYGa1plOJB1xoObAE-fgc"
        })
        let id = req.params.id;
        let book = await Book.findOne({ _id: id })
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            book.bookImage = result.secure_url;
        }
        book.authorName = req.body.authorName;
        book.publicationHouse = req.body.publicationHouse;
        book.bookTitle = req.body.bookTitle;
        book.language = req.body.language;
        book.isbnNo = req.body.isbnNo;
        book.price = req.body.price;
        book.save();
        res.render('bookEdited');
    } catch (err) {
        console.log(err.message)
    }
}
async function deleteBook(req, res) {
    try {
        let id = req.params.id;
        await Book.deleteOne({ _id: id });
        res.render('deletedBook');
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = {
    bookAdded,
    getBooks,
    getEditPage,
    bookEdit,
    deleteBook,
    
}