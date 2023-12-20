"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Goal = exports.Speciality = exports.Warrenty = exports.Slider = exports.Contact = void 0;
const mongoose_1 = require("mongoose");
const sliderSchema = new mongoose_1.Schema({
    backgroundImageUrl: String,
    heading1: String,
    heading2: String,
    leftText1: String,
    leftText2: String,
    rightText1: String,
    rightText2: String
});
const warrentySchema = new mongoose_1.Schema({
    claims: String,
    performance: String,
    limitations: String,
    exclusions: String,
    disclaimers: String,
    coverage: String
});
const contactSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    region: { type: String, required: true },
    websites: { type: String },
});
const brandValueSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String }
});
const aboutUsSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String }
});
// Define the model
exports.Contact = (0, mongoose_1.model)('Contacts', contactSchema);
exports.Slider = (0, mongoose_1.model)('Slider', sliderSchema);
exports.Warrenty = (0, mongoose_1.model)('Warrenty', warrentySchema);
exports.Speciality = (0, mongoose_1.model)('Speciality', brandValueSchema);
exports.Goal = (0, mongoose_1.model)('Goal', aboutUsSchema);
//# sourceMappingURL=cms.model.js.map