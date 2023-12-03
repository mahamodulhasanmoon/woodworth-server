"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrenty = exports.Slider = void 0;
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
exports.Slider = (0, mongoose_1.model)('Slider', sliderSchema);
exports.Warrenty = (0, mongoose_1.model)('Warrenty', warrentySchema);
//# sourceMappingURL=cms.model.js.map