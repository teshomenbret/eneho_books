// some configration may be nedd
import config from "../configs/config.js";
import fetch from 'node-fetch'

const makePdtReqData = (params) =>{   
  const pdtReqData = {
      requestType:"PDT",
      pdtToken:config.pdtToken,
      transactionId:params.TransactionId,
      merchantOrderId:params.MerchantOrderId
    }
  return pdtReqData
 
}

const calculateTotalDeliveryFee = (order) =>{   
  return 10
 
}

const calculateTotalDiscount  = (order) =>{
  return 20
  
}





const makeCheckoutOptions = (order) =>{   
    
    const checkoutOptions = {
        process:config.process,
        items:order.books,

        merchantOrderId:order._id,
        merchantId:config.merchantId,
        successUrl:config.successUrlReturn,
        cancelUrl:config.cancelUrlReturn,
        ipnUrl:config.ipnUrlReturn,
        failureUrl:config.failureUrlReturn,
        expiresAfter:config.expiresAfter,
        totalItemsHandlingFee:10,
        totalItemsDeliveryFee:calculateTotalDeliveryFee(order),
        totalItemsDiscount:calculateTotalDiscount(order),
    }

    return checkoutOptions
   
  }


  const generateCheckoutUrl = async (checkoutOptions) =>{
      const url = config.useSandbox?config.sandboxCheckoutUrl:config.checkoutUrl

      const response = await fetch(url, 
                                    {
                                    method: 'post',
                                    body: JSON.stringify(checkoutOptions),
                                    headers: {'Content-Type': 'application/json'}
                                    }
                                );  
      return await response.json()
  }

const requestPDT = async(params) =>{
    const pdtReqData = makePdtReqData(params)
    const url = config.useSandbox?config.sandboxRequestPDTUrl:config.requestPDTUrl

    const response = await fetch(url, 
                {
                  method: 'post',
                  body: JSON.stringify(pdtReqData),
                  headers: {'Content-Type': 'application/json'}
                }
            );

    return await response.json();

  }

  const queryStringToJSON = (queryString) =>{            
    if(queryString.indexOf('?') > -1){
        queryString = queryString.split('?')[1]
    }

    let pairs = queryString.split('&')
    let result = {}
    pairs.forEach(function(pair) {
        pair = pair.split('=')
        result[pair[0]] = decodeURIComponent(pair[1] || '')
    });
    
    return result
  }



  export default {makeCheckoutOptions, requestPDT, generateCheckoutUrl,queryStringToJSON}

  