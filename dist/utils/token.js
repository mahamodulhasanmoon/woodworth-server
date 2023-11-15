"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genarateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const genarateToken = (userInfo) => {
    const payload = {
        email: userInfo.email,
        role: userInfo.role
    };
    const token = jsonwebtoken_1.default.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: '24hr'
    });
    return token;
};
exports.genarateToken = genarateToken;
//# sourceMappingURL=token.js.map