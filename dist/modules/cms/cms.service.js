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
exports.getWarrentyService = exports.createNewWarrentyService = exports.getSliderService = exports.createNewSliderService = void 0;
const cms_model_1 = require("./cms.model");
const createNewSliderService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cms_model_1.Slider.create(data);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.createNewSliderService = createNewSliderService;
const getSliderService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cms_model_1.Slider.find({});
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getSliderService = getSliderService;
//   warrentyPage
const createNewWarrentyService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cms_model_1.Warrenty.findOneAndReplace({}, data, { upsert: true, new: true });
        if (!result) {
            throw new Error('Failed to replace or create document.');
        }
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.createNewWarrentyService = createNewWarrentyService;
const getWarrentyService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cms_model_1.Warrenty.findOne();
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getWarrentyService = getWarrentyService;
//# sourceMappingURL=cms.service.js.map