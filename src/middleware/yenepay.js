// some configration may be nedd
import Order from "../models/order.model.js";
import errorHandler from '../helpers/dbErrorHandler.js'
import payFacilities from './payment.facilities.js'

const verifyPDT = async (req, res) => {
  try {
      const pdt = payFacilities.queryStringToJSON(req.pdt);
      if(pdt.result =='SUCCESS' && pdt.Status =='Paid'){
              const order = await Order.findById(pdt.MerchantOrderId)
              if (!order){
                  return res.status(400).json({
                          error: "Order not found"
                      })
                }
                  order.status = pdt.Status 
                  order.paymentMethod = "yenepay"
                  order.save((err, result) => {
                    if (err) {
                        return res.status(400).json({
                            error: errorHandler(err),
                        });
                    }
                    res.json(result);
                });
      }
      else{
          return res.status(400).json({
            error: "problem happen"
        })
      }  
  } catch (error) {
      return res.status(400).json({
        error:errorHandler.getErrorMessage(error)
    })
  }
}

export default {verifyPDT}