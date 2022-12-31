// some configration nedd
// import Order from '../models/order.model.js'
import errorHandler from '../helpers/dbErrorHandler.js'
import payFacilities from '../middleware/payment.facilities.js';

const checkoutCart = async (req, res) => {
  try {
    const checkoutOptions = payFacilities.makeCheckoutOptions(req.order)
    const data = await payFacilities.generateCheckoutUrl(checkoutOptions)

    res.json({ "redirectUrl" : data }); 
     
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
  })
  }
}
   
export default {checkoutCart}