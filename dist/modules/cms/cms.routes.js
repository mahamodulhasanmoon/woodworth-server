"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmsRoutes = void 0;
const express_1 = require("express");
const cms_controller_1 = require("./cms.controller");
exports.cmsRoutes = (0, express_1.Router)();
exports.cmsRoutes.route('/slider')
    .post(cms_controller_1.createNewSliderController)
    .get(cms_controller_1.getSliderController);
exports.cmsRoutes.route('/warrenty')
    .post(cms_controller_1.createNewWarrentyController)
    .get(cms_controller_1.getWarrentyController);
//# sourceMappingURL=cms.routes.js.map