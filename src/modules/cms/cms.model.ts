import { Schema, model } from "mongoose";

const sliderSchema = new Schema({
    backgroundImageUrl:String,
    heading1:String,
    heading2:String,
    leftText1:String,
    leftText2:String,
    rightText1:String,
    rightText2:String
})

const warrentySchema = new Schema({
    claims:String,
    performance:String,
    limitations:String,
    exclusions:String,
    disclaimers:String,
    coverage:String


})
const contactSchema = new Schema({
    title: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    region: { type: String, required: true },
    websites: { type: String, required: true },
});

// Define the model
export const Contact = model('Contacts', contactSchema);
export const Slider = model('Slider',sliderSchema)
export const Warrenty = model('Warrenty',warrentySchema)

