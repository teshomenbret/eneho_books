// some configration may be  nedd
import mongoose from 'mongoose'

const CartItemSchema = new mongoose.Schema(
    {
        itemId: { type: mongoose.Schema.ObjectId, ref: "Book" },
        itemName: String,
        unitPrice: Number,
        quantity: Number,
        unitPercetDiscount:Number,
    },
    
    { timestamps: true }
);

const OrderSchema = new mongoose.Schema(
  {
    books: [CartItemSchema],
    user: { type: mongoose.Schema.ObjectId, ref: "User" },
    transactionId: String,
    totalPrice:Number,

    paymentMethod:{
        type: String,
        trim: true,
      },

    status: {
      type: String,
      default: "UnProcessed",

      enum: [
          "UnProcessed",
          "PreProcessed",
          "Failed",
          "Paid",
          "Shipped",
          "Delivered",
          "Cancelled",
      ],
  },

    city: { 
          type: mongoose.Schema.ObjectId, 
          ref: "City" 
        },
    streetName:{
        type: String,
        trim: true,
      },
    nameOfBookStore :{
        type: String,
        trim:true,
      },
    postalCode:{
      type:String,
      trim: true,
    }

  },
  { timestamps: true }
);



export default mongoose.model('Order', OrderSchema)
