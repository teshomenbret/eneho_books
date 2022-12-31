// some configration may be nedd
import express from 'express'
import yenepayCtrl from '../controllers/yenepay.controller.js'
import yenepay from '../middleware/yenepay.js'

const router = express.Router()

router.route('/yenepay/IPNDestination')
    .post(yenepayCtrl.IPNDestination)

router.route('/yenepay/paymentSuccessReturnUrl')
    .get(yenepayCtrl.PaymentSuccessReturnUrl,yenepay.verifyPDT)
    
router.route('/yenepay/paymentCancelReturnUrl')
    .get(yenepayCtrl.PaymentCancelReturnUrl)

router.route('/yenepay/paymentFailureReturnUrl')
    .get(yenepayCtrl.paymentFailureReturnUrl)

    
export default router
