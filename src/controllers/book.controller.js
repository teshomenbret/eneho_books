// some configration is nedd
import extend from 'lodash/extend.js'
import formidable from 'formidable'
import fs from 'fs'
import Book from '../models/book.model.js';
import errorHandler from '../helpers/dbErrorHandler.js'


const create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image could not be uploaded",
            });
        }
        //check the required fields
        const { name} = fields;

        if (!name ) {
            return res.status(400).json({
                error: "All fields are required",
            });
        }

        let book = new Book(fields);
        // 1kb = 1000
        // 1mb = 1000000
        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: "Image size should be less than 1mb",
                });
            }
            book.photo.data = fs.readFileSync(files.photo.filepath);
            book.photo.contentType = files.photo.mimetype;
            // deals with other fieds
        }
        book.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err),
                });
            }
            res.json(result)
        });
    });
};



const remove = async (req, res) => {
    try {
        let book = req.book
        let deletedBook = await book.remove()
        res.json(deletedBook)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}



const list = async (req, res) => {
    try {
        let books = await Book.find()
        res.json(books)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const bookByID = async (req, res, next, id) => {
    try {
        let book = await Book.findById(id)
        if (!book)
            return res.status(400).json({
                    error: "Book not found"
                })

        req.book = book
        next()
    } catch (err) {
            return res.status(400).json({
                error: "Could not retrieve book"
            })
    }
}

const photo = (req, res, next) => {
    res.set("Content-Type", req.book.photo.contentType)
    return res.send(req.book.photo.data)
    }

const read = (req, res) => {
    return res.json(req.book)
}

const update = async (req, res) => {
    try {
        let book = req.book
        book = extend(book, req.body)
        // book.updated = Date.now()
        await book.save()
        res.json(book)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}


export default { create,bookByID, read,update, list, remove ,photo}
