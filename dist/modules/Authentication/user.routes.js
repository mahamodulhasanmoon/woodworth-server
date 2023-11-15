"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const verifyToken_1 = require("../../middleware/verifyToken");
const authRouter = (0, express_1.Router)();
authRouter.route('/signup')
    .post(user_controller_1.createUser);
authRouter.route('/login')
    .post(user_controller_1.loginUserController);
authRouter.route('/me')
    .get(verifyToken_1.verifyToken, user_controller_1.getMe);
exports.default = authRouter;
//# sourceMappingURL=user.routes.js.map