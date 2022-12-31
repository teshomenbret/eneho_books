// looks like fineshed
import express from 'express'
import requestCtrl from '../controllers/request.controller.js'

const router = express.Router()

router.route('/api/requests')
  .get(requestCtrl.list)
  .post(requestCtrl.create)

router.route('/api/requests/:requestId')
  .get(requestCtrl.read)
  .put(requestCtrl.update)
  .delete(requestCtrl.remove)

router.param('requestId', requestCtrl.requestByID)

export default router
