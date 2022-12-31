import Order from '../models/order.model.js'
import errorHandler from '../helpers/dbErrorHandler.js'
import payFacilities from '../middleware/payment.facilities.js';

const IPNDestination = (req, res) => {
    let ipnModel = req.body;
    console.log("IPNDestination",ipnModel)
   }


// if yenepay become slow on your computer like me 
// to varify pdt we will do some logic here
// and upadte the stutus of the order to paied
const PaymentSuccessReturnUrl = async (req, res, next) => {
  try {
    const params = req.query;
    const order = await Order.findById(params.MerchantOrderId)
    if (!order){
        return res.status(400).json({
                error: "Order not found"
            })
      }
    order.status = "PreProcessed"
    order.save((err, result) => {
          if (err) {
              return res.status(400).json({
                    error: errorHandler.getErrorMessage(err),
                  });
            }
        });

    req.pdt = await payFacilities.requestPDT(params)
    req.signature = params.Signature               
    next()
  } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
    })
  }
   
}

const PaymentCancelReturnUrl = async (req, res) => {
    var params = req.query;
    const order = await Order.findById(params.MerchantOrderId)
    if (!order){
        return res.status(400).json({
                error: "Order not found"
            })
      }
    order.status = "Cancelled"
    order.save((err, result) => {
          if (err) {
              return res.status(400).json({
                    error: errorHandler.getErrorMessage(err),
                  });
            }
            res.json(result)
        });
};

const paymentFailureReturnUrl = async (req, res) => {
  var params = req.query;
  const order = await Order.findById(params.MerchantOrderId)
  if (!order){
      return res.status(400).json({
              error: "Order not found"
          })
    }
  order.status = "Failed"
  order.save((err, result) => {
        if (err) {
            return res.status(400).json({
                  error: errorHandler.getErrorMessage(err),
                });
          }
          res.json(result)
      });
};


export default { IPNDestination, PaymentSuccessReturnUrl, PaymentCancelReturnUrl, paymentFailureReturnUrl}