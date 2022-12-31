// looks like fineshed
import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema(
        {
            name: {
                    type: String,
                    trim: true,
                    unique: "name already taken",
                    maxlength: 32,
                    required: 'name is required'
                },              
    },
    { timestamps: true }
);


export default mongoose.model('Category', CategorySchema)


