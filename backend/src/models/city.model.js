// looks like fineshed
import mongoose from 'mongoose'

const CitySchema = new mongoose.Schema(
        {
            name: {
                    type: String,
                    trim: true,
                    unique: true,
                    required: 'name is required'
                },
          
            deliveryFee: {
                    type: Number,
                    default: 0
                },              
    },
    { timestamps: true }
);


export default mongoose.model('City', CitySchema)


