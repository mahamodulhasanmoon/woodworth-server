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
exports.deleteDealersByIdService = exports.updateDealersByIdService = exports.getDealersByIdService = exports.getAllDealersService = exports.createDealerService = void 0;
const dealers_model_1 = __importDefault(require("./dealers.model"));
const createDealerService = (delearInfo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield dealers_model_1.default.create(delearInfo);
        return data;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.createDealerService = createDealerService;
const getAllDealersService = (queries) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    if (queries) {
        const { category } = queries;
        category && (query.category = category);
    }
    try {
        const data = yield dealers_model_1.default.find(query);
        const totalData = yield dealers_model_1.default.countDocuments();
        return { data, totalData };
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getAllDealersService = getAllDealersService;
const getDealersByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield dealers_model_1.default.findById(id);
        return data;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getDealersByIdService = getDealersByIdService;
const updateDealersByIdService = (id, productsData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield dealers_model_1.default.findByIdAndUpdate(id, productsData, { new: true });
        return { data };
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.updateDealersByIdService = updateDealersByIdService;
const deleteDealersByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield dealers_model_1.default.findByIdAndDelete(id);
        if (!data) {
            throw new Error('Products not found');
        }
        return data;
    }
    catch (error) {
        throw new Error(`Error deleting category: ${error.message}`);
    }
});
exports.deleteDealersByIdService = deleteDealersByIdService;
//# sourceMappingURL=dealer.services.js.map