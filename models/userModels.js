import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        Phone_number: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true
    }
);
export const User = mongoose.model('User', userSchema); 
