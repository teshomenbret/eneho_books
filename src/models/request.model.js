// looks like fineshed
import mongoose from 'mongoose'

const RequestSchema = new mongoose.Schema(
        {
            name: {
                    type: String,
                    trim: true,
                    unique: true,
                    required: 'Name is required'
                },
            author:{
                    type: String,
                    trim: true,
                },
            description: {
                    type: String,
                    trim: true,
                },
            user: { type: mongoose.Schema.ObjectId, ref: "User" }

                  
    },
    { timestamps: true }
);


export default mongoose.model('Request', RequestSchema)


