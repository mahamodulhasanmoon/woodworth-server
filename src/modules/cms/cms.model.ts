import { Schema, model } from "mongoose";

const sliderSchema = new Schema({
    backgroundImageUrl:String,
    heading:String,
    leftText:String,
    rightText:String
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

