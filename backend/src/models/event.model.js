// looks like fineshed
import mongoose from 'mongoose'

const EventSchema = new mongoose.Schema(
        {
            name: {
                    type: String,
                    trim: true,
                    unique: true,
                    required: 'name is required'
                },
            description: {
                    type: String,
                    trim: true,
                },
          
            date:{
                    type: Date,
                }, 
            time:{
                    type:String
                },
            image:{
                    data: Buffer,
                    contentType: String
               },

    },
    { timestamps: true }
);


export default mongoose.model('Event', EventSchema)


