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
exports.deleteCategoryController = exports.updateCategoryController = exports.createCategoryController = exports.getAllCategoryController = void 0;
const categories_services_1 = require("./categories.services");
const getAllCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data, totalData } = yield (0, categories_services_1.getAlllCategoryService)();
        res.status(200).json({
            status: 200,
            message: "successfull",
            total: totalData,
            data: data
        });
    }
    catch (error) {
        res.status(400).json({
            status: 400,
            error: error,
            message: error.message
        });
    }
});
exports.getAllCategoryController = getAllCategoryController;
// create CategoryService
const createCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, categories_services_1.createCategoryService)(req.body);
        res.status(201).json({
            status: 201,
            message: "created Successfully",
            data: data
        });
    }
    catch (error) {
        res.status(400).json({
            status: 400,
            error: error,
            message: error.message
        });
    }
});
exports.createCategoryController = createCategoryController;
const updateCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield (0, categories_services_1.updateCategoryService)(id, req.body);
        res.status(201).json({
            status: 201,
            message: "updated Successfully",
            data: data
        });
    }
    catch (error) {
        res.status(400).json({
            status: 400,
            error: error,
            message: error.message
        });
    }
});
exports.updateCategoryController = updateCategoryController;
const deleteCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield (0, categories_services_1.deleteCategoryService)(id);
        res.status(200).json({
            status: 200,
            message: "deleted Successfully",
            data
        });
    }
    catch (error) {
        res.status(400).json({
            status: 400,
            error: error,
            message: error.message
        });
    }
});
exports.deleteCategoryController = deleteCategoryController;
//# sourceMappingURL=categories.controller.js.map