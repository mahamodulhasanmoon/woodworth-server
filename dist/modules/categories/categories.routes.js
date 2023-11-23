"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories_controller_1 = require("./categories.controller");
const authorization_1 = require("./../../middleware/authorization");
const verifyToken_1 = require("../../middleware/verifyToken");
const categoryRoutes = (0, express_1.Router)();
categoryRoutes.route('/')
    .get(categories_controller_1.getAllCategoryController)
    .post(verifyToken_1.verifyToken, (0, authorization_1.authorization)("admin"), categories_controller_1.createCategoryController);
categoryRoutes.route('/:id')
    .patch(verifyToken_1.verifyToken, (0, authorization_1.authorization)("admin"), categories_controller_1.updateCategoryController)
    .delete(verifyToken_1.verifyToken, (0, authorization_1.authorization)("admin"), categories_controller_1.deleteCategoryController);
exports.default = categoryRoutes;
//# sourceMappingURL=categories.routes.js.map