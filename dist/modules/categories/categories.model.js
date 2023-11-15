"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const categoriesSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, 'please provide a category name']
    }
}, {
    timestamps: true
});
const Category = (0, mongoose_1.model)("Category", categoriesSchema);
exports.default = Category;
//# sourceMappingURL=categories.model.js.map