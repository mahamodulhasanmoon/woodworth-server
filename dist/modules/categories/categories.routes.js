"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories_controller_1 = require("./categories.controller");
const categoryRoutes = (0, express_1.Router)();
categoryRoutes.route('/')
    .get(categories_controller_1.getAllCategoryController)
    .post(categories_controller_1.createCategoryController);
categoryRoutes.route('/:id')
    .patch(categories_controller_1.updateCategoryController)
    .delete(categories_controller_1.deleteCategoryController);
exports.default = categoryRoutes;
//# sourceMappingURL=categories.routes.js.map