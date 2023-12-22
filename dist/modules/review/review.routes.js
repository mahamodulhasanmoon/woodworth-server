"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const review_controller_1 = require("./review.controller");
const verifyToken_1 = require("../../middleware/verifyToken");
const authorization_1 = require("../../middleware/authorization");
const ReviewRoutes = (0, express_1.Router)();
ReviewRoutes.route('/')
    .get(review_controller_1.getAllReviewController)
    .post(
// verifyToken,authorization("admin"),
review_controller_1.createReviewController);
ReviewRoutes.route('/:id')
    .delete(verifyToken_1.verifyToken, (0, authorization_1.authorization)("admin"), review_controller_1.deleteReviewController);
exports.default = ReviewRoutes;
//# sourceMappingURL=review.routes.js.map