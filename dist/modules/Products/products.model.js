"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productsSchema = new mongoose_1.Schema({
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
    // label: {
    //   type: String,
    //   required: [true, 'Label is required']
    // },
    class: {
        type: String,
    },
    category: [{
            type: mongoose_1.Types.ObjectId,
            required: [true, 'At least one category is required'],
            ref: 'Category',
        }],
    featureImages: Array,
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
    ],
    isNewStyle: Boolean,
    isCanandaRegion: Boolean
}, { timestamps: true });
const Products = (0, mongoose_1.model)('Products', productsSchema);
exports.default = Products;
//# sourceMappingURL=products.model.js.map