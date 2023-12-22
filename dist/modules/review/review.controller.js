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
exports.deleteReviewController = exports.createReviewController = exports.getAllReviewController = void 0;
const review_service_1 = require("./review.service");
const getAllReviewController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data, totalData } = yield (0, review_service_1.getAlllReviewService)();
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
exports.getAllReviewController = getAllReviewController;
// create ReviewService
const createReviewController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, review_service_1.createReviewService)(req.body);
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
exports.createReviewController = createReviewController;
const deleteReviewController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield (0, review_service_1.deleteReviewService)(id);
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
exports.deleteReviewController = deleteReviewController;
//# sourceMappingURL=review.controller.js.map