import express from 'express'
import cityCtrl from '../controllers/city.controller.js'

const router = express.Router()

router.route('/api/cities')
  .get(cityCtrl.list)
  .post(cityCtrl.create)

router.route('/api/cities/:cityId')
  .get(cityCtrl.read)
  .put(cityCtrl.update)
  .delete(cityCtrl.remove)

router.param('cityId', cityCtrl.cityByID)

export default router
