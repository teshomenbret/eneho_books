// some configration may be  nedd
import express from 'express'
import bookCtrl from '../controllers/book.controller.js'

const router = express.Router()

router.route('/api/books')
  .get(bookCtrl.list)
  .post(bookCtrl.create)

router.route('/api/books/:bookId')
  .get(bookCtrl.read)
  .put(bookCtrl.update)
  .delete(bookCtrl.remove)
  
router.route('/api/books/photo/:bookId')
  .get(bookCtrl.photo)


router.param('bookId', bookCtrl.bookByID)

export default router
