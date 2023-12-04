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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserByIdController = exports.getMe = exports.loginUserController = exports.createUser = void 0;
const user_services_1 = require("./user.services");
const token_1 = require("./../../utils/token");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = yield (0, user_services_1.signupService)(req.body);
        const token = (0, token_1.genarateToken)(userData.email);
        res.status(201).json({
            status: 201,
            message: "Successfully created account",
            data: {
                accessToken: token,
            }
        });
    }
    catch (error) {
        res.status(400).json({
            status: "failed",
            message: "403 Bad Request",
            error: error.message,
        });
    }
});
exports.createUser = createUser;
const loginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                status: "fail",
                message: "Please provide your credentials",
            });
        }
        const user = yield (0, user_services_1.findUserByEmail)(email);
        if (!user) {
            return res.status(401).json({
                status: "fail",
                error: "No user found. Please create an account",
            });
        }
        const isPasswordValid = user.comparePassword(password, user.password);
        if (!isPasswordValid) {
            return res.status(403).json({
                status: "fail",
                message: "Password is not correct",
            });
        }
        const token = (0, token_1.genarateToken)(user);
        const _a = user.toObject(), { password: pwd } = _a, others = __rest(_a, ["password"]);
        res.status(200).json({
            status: "success",
            message: "Successfully logged in",
            data: {
                user: others,
                token,
            },
        });
    }
    catch (error) {
        res.status(500).json({
            status: "fail",
            error,
            message: error.message
        });
    }
});
exports.loginUserController = loginUserController;
const getMe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const user = yield (0, user_services_1.findUserByEmail)((_b = req === null || req === void 0 ? void 0 : req.user) === null || _b === void 0 ? void 0 : _b.email);
        res.status(200).json({
            status: "success",
            data: user,
        });
    }
    catch (error) {
        res.status(500).json({
            status: "fail",
            error,
            message: error.message
        });
    }
});
exports.getMe = getMe;
const updateUserByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield (0, user_services_1.updateUserByIdService)(id, req.body);
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
exports.updateUserByIdController = updateUserByIdController;
//# sourceMappingURL=user.controller.js.map