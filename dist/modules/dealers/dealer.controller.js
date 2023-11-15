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
exports.deleteDealersByIdController = exports.updateDealersByIdController = exports.getDealersByIdController = exports.getAllDealerController = exports.createDealerController = void 0;
const dealer_services_1 = require("./dealer.services");
const createDealerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, dealer_services_1.createDealerService)(req.body);
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
exports.createDealerController = createDealerController;
const getAllDealerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = req.query.categoryId;
        const { data, totalData } = yield (0, dealer_services_1.getAllDealersService)('');
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
exports.getAllDealerController = getAllDealerController;
const getDealersByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield (0, dealer_services_1.getDealersByIdService)(id);
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
exports.getDealersByIdController = getDealersByIdController;
const updateDealersByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield (0, dealer_services_1.updateDealersByIdService)(id, req.body);
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
exports.updateDealersByIdController = updateDealersByIdController;
const deleteDealersByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield (0, dealer_services_1.deleteDealersByIdService)(id);
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
exports.deleteDealersByIdController = deleteDealersByIdController;
//# sourceMappingURL=dealer.controller.js.map