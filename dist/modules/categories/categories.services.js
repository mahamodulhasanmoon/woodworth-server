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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryService = exports.updateCategoryService = exports.createCategoryService = exports.getAlllCategoryService = void 0;
const categories_model_1 = __importDefault(require("./categories.model"));
const getAlllCategoryService = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield categories_model_1.default.find({}).sort({ updatedAt: 1 });
    const totalData = yield categories_model_1.default.countDocuments();
    return { data, totalData };
});
exports.getAlllCategoryService = getAlllCategoryService;
const createCategoryService = (categoryData) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield categories_model_1.default.create(categoryData);
    return data;
});
exports.createCategoryService = createCategoryService;
const updateCategoryService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield categories_model_1.default.findByIdAndUpdate(id, data);
    return result;
});
exports.updateCategoryService = updateCategoryService;
const deleteCategoryService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield categories_model_1.default.findByIdAndDelete(id);
        if (!data) {
            throw new Error('Category not found');
        }
        return data;
    }
    catch (error) {
        throw new Error(`Error deleting category: ${error.message}`);
    }
});
exports.deleteCategoryService = deleteCategoryService;
//# sourceMappingURL=categories.services.js.map