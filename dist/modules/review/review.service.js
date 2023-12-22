"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReviewService = exports.updateCategoryService = exports.createReviewService = exports.getAlllReviewService = void 0;
const review_model_1 = require("./review.model");
const getAlllReviewService = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield review_model_1.Review.find({}).sort({ updatedAt: 1 });
    const totalData = yield review_model_1.Review.countDocuments();
    return { data, totalData };
});
exports.getAlllReviewService = getAlllReviewService;
const createReviewService = (categoryData) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield review_model_1.Review.create(categoryData);
    return data;
});
exports.createReviewService = createReviewService;
const updateCategoryService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_model_1.Review.findByIdAndUpdate(id, data);
    return result;
});
exports.updateCategoryService = updateCategoryService;
const deleteReviewService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield review_model_1.Review.findByIdAndDelete(id);
        if (!data) {
            throw new Error('Category not found');
        }
        return data;
    }
    catch (error) {
        throw new Error(`Error deleting category: ${error.message}`);
    }
});
exports.deleteReviewService = deleteReviewService;
//# sourceMappingURL=review.service.js.map