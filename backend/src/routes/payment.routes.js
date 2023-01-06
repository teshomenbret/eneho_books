import express from 'express'
import payCtrl from '../controllers/payment.controller.js'
import orderCtrl from '../controllers/order.controller.js'

const router = express.Router()

router.route('/api/payments/:orderId')
    .post(payCtrl.checkoutCart)

router.param('orderId', orderCtrl.orderById)

    
export default router
