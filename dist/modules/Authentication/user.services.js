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
exports.updateUserByIdService = exports.findUserByToken = exports.findUserByEmail = exports.signupService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_model_1 = __importDefault(require("./user.model"));
const dealers_model_1 = __importDefault(require("./../dealers/dealers.model"));
const signupService = (authInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.create(authInfo);
    yield dealers_model_1.default.findByIdAndUpdate(authInfo.dealerId);
    return user;
});
exports.signupService = signupService;
const findUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.findOne({ email });
});
exports.findUserByEmail = findUserByEmail;
const findUserByToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.findOne({ confirmationToken: token });
});
exports.findUserByToken = findUserByToken;
const updateUserByIdService = (id, userData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedData = userData;
    updatedData.password = bcryptjs_1.default.hashSync(userData === null || userData === void 0 ? void 0 : userData.password);
    try {
        const data = yield user_model_1.default.findByIdAndUpdate(id, userData);
        return { data };
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.updateUserByIdService = updateUserByIdService;
//# sourceMappingURL=user.services.js.map