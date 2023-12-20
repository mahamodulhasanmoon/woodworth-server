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
    websites: { type: String },
});
const brandValueSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon:{type: String}
});
const aboutUsSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail:{type: String}
});
const aboutSchema = new Schema({
   
    description: { type: String, required: true },
    thumbnail:{type: String}
});

// Define the model
export const Contact = model('Contacts', contactSchema);
export const Slider = model('Slider',sliderSchema)
export const Warrenty = model('Warrenty',warrentySchema)
export const Speciality = model('Speciality',brandValueSchema)
export const About = model('About',aboutSchema)
export const Goal = model('Goal',aboutUsSchema)

