// some configration may be nedd
import express from 'express'
import orderCtrl from '../controllers/order.controller.js'
import yenepay from '../middleware/yenepay.js'

const router = express.Router()

router.route('/api/orders')
  .get(orderCtrl.list)
  .post(orderCtrl.create)

router.route('/api/orders/:orderId')
  .get(orderCtrl.read)
  .put(orderCtrl.update)
  .delete(orderCtrl.remove)

  router.route('/api/orders/status/:orderId')
  .put(orderCtrl.updateStutus)

router.param('orderId', orderCtrl.orderById)

export default router