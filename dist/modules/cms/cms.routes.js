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
// for Contacts Routes
exports.cmsRoutes.route('/contacts')
    .post(
// authorization("admin"),
cms_controller_1.createNewContactController)
    .get(cms_controller_1.getContactController);
exports.cmsRoutes.route('/contacts/:id')
    .delete(
// authorization("admin"),
cms_controller_1.deleteContactController);
// goals
exports.cmsRoutes.route('/goals')
    .post(
// authorization("admin"),
cms_controller_1.createGoalController)
    .get(cms_controller_1.getGoalsController);
exports.cmsRoutes.route('/goals/:id')
    .delete(
// authorization("admin"),
cms_controller_1.deleteGoalController);
exports.cmsRoutes.route('/speciality')
    .post(
// authorization("admin"),
cms_controller_1.createSpecilityController)
    .get(cms_controller_1.getSpecilityController);
exports.cmsRoutes.route('/speciality/:id')
    .delete(
// authorization("admin"),
cms_controller_1.deleteSpecialityController);
//# sourceMappingURL=cms.routes.js.map