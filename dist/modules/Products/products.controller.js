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
exports.updateProductsByIdController = exports.deleteProductsByIdController = exports.getProductsByIdController = exports.getAllProductsController = exports.createPoductsController = void 0;
const products_services_1 = require("./products.services");
const createPoductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, products_services_1.createProductsService)(req.body);
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
exports.createPoductsController = createPoductsController;
const getAllProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = req.query.categoryId;
        const queries = {
            category: category
        };
        const { data, totalData } = yield (0, products_services_1.getAllProductsService)(queries);
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
exports.getAllProductsController = getAllProductsController;
const getProductsByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { data } = yield (0, products_services_1.getProductsByIdService)(id);
        res.status(200).json({
            status: 200,
            message: "successfull",
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
exports.getProductsByIdController = getProductsByIdController;
const deleteProductsByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield (0, products_services_1.deleteProductsByIdService)(id);
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
exports.deleteProductsByIdController = deleteProductsByIdController;
const updateProductsByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield (0, products_services_1.updateProductsByIdService)(id, req.body);
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
exports.updateProductsByIdController = updateProductsByIdController;
//# sourceMappingURL=products.controller.js.map