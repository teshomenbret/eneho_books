const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' +(process.env.MONGO_PORT || '27017') +'/eneho',



    // payment information
    sellerCode:"SB2072",
    merchantId:"SB2072",
    pdtToken : "BR9K4IGDELb6CR",
    useSandbox : true,
    process:"Cart",
    currency : "USD",
    expiresAfter:null,
    checkoutUrl:'https://endpoints.yenepay.com/api/urlgenerate/getcheckouturl/',
    sandboxCheckoutUrl:'https://testapi.yenepay.com/api/urlgenerate/getcheckouturl/',
    requestPDTUrl:"https://endpoints.yenepay.com/api/verify/pdt/",
    sandboxRequestPDTUrl:"https://testapi.yenepay.com/api/verify/pdt/",



    successUrlReturn :"http://localhost:3000/yenepay/paymentSuccessReturnUrl",
    ipnUrlReturn : "http://localhost:3000/yenepay/IPNDestination",
    cancelUrlReturn : "http://localhost:3000/yenepay/paymentCancelReturnUrl",
    failureUrlReturn : "http://localhost:3000/yenepay/paymentFailureReturnUrl",

   }
   export default config
   