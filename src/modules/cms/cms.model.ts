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

export const Slider = model('Slider',sliderSchema)
export const Warrenty = model('Warrenty',warrentySchema)

