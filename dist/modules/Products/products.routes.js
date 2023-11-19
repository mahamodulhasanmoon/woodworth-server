"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const products_controller_1 = require("./products.controller");
exports.productsRouter = (0, express_1.Router)();
exports.productsRouter.route('/')
    .post(products_controller_1.createPoductsController)
    .get(products_controller_1.getAllProductsController);
exports.productsRouter.route('/:id')
    .get(products_controller_1.getProductsByIdController)
    .patch(products_controller_1.updateProductsByIdController)
    .delete(products_controller_1.deleteProductsByIdController);
exports.productsRouter.route('/status/:id')
    .get(products_controller_1.updateStatusByIdController);
//# sourceMappingURL=products.routes.js.map