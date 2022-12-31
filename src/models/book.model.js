// some configration is nedd
import mongoose from 'mongoose'

const BookSchema = new mongoose.Schema(
        {
            name: {
                    type: String,
                    trim: true,
                    unique: true,
                    required: 'Name is required'
                },
            description: {
                    type: String,
                    trim: true,
                },
            price:{
                    type:Number,
                },
            percentDiscount:{
                    type:Number,
                },
            author:{
                    type: String,
                    trim: true,
                },
            photo: {
                    data: Buffer,
                    contentType: String
                   },

            categories: [{ type: mongoose.Schema.ObjectId, ref: "Category" }],

            language:{
                    type:String,
                },

            publish_date:{
                    type: Date,
                },
                
            edition:{
                    type:Number,
                },

            page_count:{
                    type:Number,
                },
           
            isbn: {
                type: String,
            },                  
    },
    { timestamps: true }
);


export default mongoose.model('Book', BookSchema)


