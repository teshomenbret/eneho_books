// looks like fineshed
import express from 'express'
import catCtrl from '../controllers/category.controller.js'

const router = express.Router()

router.route('/api/categories')
  .get(catCtrl.list)
  .post(catCtrl.create)

router.route('/api/categories/:categoryId')
  .get(catCtrl.read)
  .put(catCtrl.update)
  .delete(catCtrl.remove)

router.param('categoryId', catCtrl.categoryByID)

export default router
