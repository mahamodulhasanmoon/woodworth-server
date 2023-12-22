"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    }
});
exports.Review = (0, mongoose_1.model)('Review', reviewSchema);
//# sourceMappingURL=review.model.js.map