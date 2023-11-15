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
exports.deleteProductsByIdService = exports.updateProductsByIdService = exports.getProductsByIdService = exports.getAllProductsService = exports.createProductsService = void 0;
const products_model_1 = __importDefault(require("./products.model"));
const createProductsService = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield products_model_1.default.create(productData);
        return data;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.createProductsService = createProductsService;
const getAllProductsService = (queries) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    if (queries) {
        const { category } = queries;
        category && (query.category = category);
    }
    try {
        const data = yield products_model_1.default.find(query);
        const totalData = yield products_model_1.default.countDocuments();
        return { data, totalData };
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getAllProductsService = getAllProductsService;
const getProductsByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield products_model_1.default.findById(id);
        return { data };
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getProductsByIdService = getProductsByIdService;
const updateProductsByIdService = (id, productsData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield products_model_1.default.findByIdAndUpdate(id, productsData, { new: true });
        return { data };
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.updateProductsByIdService = updateProductsByIdService;
const deleteProductsByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield products_model_1.default.findByIdAndDelete(id);
        if (!data) {
            throw new Error('Products not found');
        }
        return data;
    }
    catch (error) {
        throw new Error(`Error deleting category: ${error.message}`);
    }
});
exports.deleteProductsByIdService = deleteProductsByIdService;
//# sourceMappingURL=products.services.js.map