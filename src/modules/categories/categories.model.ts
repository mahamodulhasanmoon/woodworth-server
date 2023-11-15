import { Schema, model } from "mongoose";

const categoriesSchema = new Schema({
    title:{
        type:String,
        required:[true,'please provide a category name']
    }
},{
    timestamps:true
})

const Category = model("Category",categoriesSchema)

export default Category