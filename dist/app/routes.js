"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories_routes_1 = __importDefault(require("../modules/categories/categories.routes"));
const products_routes_1 = require("../modules/Products/products.routes");
const dealer_routes_1 = __importDefault(require("../modules/dealers/dealer.routes"));
const uploader_routes_1 = __importDefault(require("../modules/uploader/uploader.routes"));
const cms_routes_1 = require("../modules/cms/cms.routes");
const user_routes_1 = __importDefault(require("../modules/Authentication/user.routes"));
const review_routes_1 = __importDefault(require("../modules/review/review.routes"));
const routes = (0, express_1.Router)();
routes.get('/health', (_req, res) => {
    res.status(200).json({
        status: 200,
        message: 'success',
    });
});
// all Routes 
routes.use('/uploads', uploader_routes_1.default);
routes.use('/categories', categories_routes_1.default);
routes.use('/reviews', review_routes_1.default);
routes.use('/products', products_routes_1.productsRouter);
routes.use('/dealer', dealer_routes_1.default);
routes.use('/auth', user_routes_1.default);
routes.use('/cms', cms_routes_1.cmsRoutes);
exports.default = routes;
//# sourceMappingURL=routes.js.map