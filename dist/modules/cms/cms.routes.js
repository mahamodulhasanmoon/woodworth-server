"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmsRoutes = void 0;
const express_1 = require("express");
const cms_controller_1 = require("./cms.controller");
const authorization_1 = require("../../middleware/authorization");
exports.cmsRoutes = (0, express_1.Router)();
exports.cmsRoutes.route('/slider')
    .post((0, authorization_1.authorization)("admin"), cms_controller_1.createNewSliderController)
    .get(cms_controller_1.getSliderController);
exports.cmsRoutes.route('/warrenty')
    .post((0, authorization_1.authorization)("admin"), cms_controller_1.createNewWarrentyController)
    .get(cms_controller_1.getWarrentyController);
exports.cmsRoutes.route('/slider/:id')
    .delete((0, authorization_1.authorization)("admin"), cms_controller_1.deleteSliderController);
//# sourceMappingURL=cms.routes.js.map