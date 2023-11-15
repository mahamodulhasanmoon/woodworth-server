import { Schema, Types, model } from "mongoose";

const productsSchema = new Schema({
        thumbnail: {
          type: String,
          required: [true, 'Image is required']
        },
        slNo: {
          type: Number,
          required: [true, 'Sl no  is required']
        },
        name: {
          type: String,
          required: [true, 'Name is required']
        },
        color: {
          type: String,
          required: [true, 'Color is required']
        },
        label: {
          type: String,
          required: [true, 'Label is required']
        },
        class: {
          type: String,
         
        },
        category: {
          type: Types.ObjectId,
          required: [true, 'Category is required'],
          ref:'Category',
        },
        // vector: {
        //   type: String,
        //   required: [true, 'Vector is required']
        // },
        featureImages:Array,
        images: Array,
        details: {
          type: String,
          required: [true, 'Details is required']
        },
        specification: [
          {
            name: {
              type: String,
              required: [true, 'Specification Name is required']
            },
            spList: {
              type: String,
              required: [true, 'Specification List is required']
            },
            otherSpList: Array,

          }
        ]
      
},{timestamps:true})

const Products = model('Products',productsSchema)
export default Products


