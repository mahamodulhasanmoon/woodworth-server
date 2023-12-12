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
exports.deleteSpecialityController = exports.createSpecilityController = exports.getSpecilityController = exports.deleteGoalController = exports.createGoalController = exports.getGoalsController = exports.deleteContactController = exports.createNewContactController = exports.getContactController = exports.getWarrentyController = exports.createNewWarrentyController = exports.deleteSliderController = exports.getSliderController = exports.createNewSliderController = void 0;
const cms_service_1 = require("./cms.service");
const createNewSliderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, cms_service_1.createNewSliderService)(req.body);
        res.status(201).json({
            status: 201,
            message: "slider Created Successfully",
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
exports.createNewSliderController = createNewSliderController;
const getSliderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, cms_service_1.getSliderService)();
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
exports.getSliderController = getSliderController;
const deleteSliderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield (0, cms_service_1.deleteSliderService)(id);
        res.status(200).json({
            status: 200,
            message: "deleted successfully",
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
exports.deleteSliderController = deleteSliderController;
// for warrenty page
const createNewWarrentyController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, cms_service_1.createNewWarrentyService)(req.body);
        res.status(201).json({
            status: 201,
            message: "slider Created Successfully",
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
exports.createNewWarrentyController = createNewWarrentyController;
const getWarrentyController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, cms_service_1.getWarrentyService)();
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
exports.getWarrentyController = getWarrentyController;
// contact Section
const getContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, cms_service_1.getContactsService)();
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
exports.getContactController = getContactController;
const createNewContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, cms_service_1.createNewContactService)(req.body);
        res.status(201).json({
            status: 201,
            message: "New Record Added",
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
exports.createNewContactController = createNewContactController;
const deleteContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield (0, cms_service_1.deleteContactsService)(id);
        res.status(200).json({
            status: 200,
            message: "deleted successfully",
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
exports.deleteContactController = deleteContactController;
// Goal set
const getGoalsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, cms_service_1.getGoalService)();
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
exports.getGoalsController = getGoalsController;
const createGoalController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, cms_service_1.createGoalService)(req.body);
        res.status(201).json({
            status: 201,
            message: "New Record Added",
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
exports.createGoalController = createGoalController;
const deleteGoalController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield (0, cms_service_1.deleteGoalService)(id);
        return res.status(200).json({
            status: 200,
            message: "deleted successfully",
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
exports.deleteGoalController = deleteGoalController;
const getSpecilityController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, cms_service_1.getSpeciallityService)();
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
exports.getSpecilityController = getSpecilityController;
const createSpecilityController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, cms_service_1.createSpecialityService)(req.body);
        res.status(201).json({
            status: 201,
            message: "New Record Added",
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
exports.createSpecilityController = createSpecilityController;
const deleteSpecialityController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield (0, cms_service_1.deleteSpecialityService)(id);
        return res.status(200).json({
            status: 200,
            message: "deleted successfully",
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
exports.deleteSpecialityController = deleteSpecialityController;
//# sourceMappingURL=cms.controller.js.map