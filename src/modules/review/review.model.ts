import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    designation:{
        type:String,
        required:true,
    },
    review:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    }
})

export const Review = model('Review',reviewSchema)