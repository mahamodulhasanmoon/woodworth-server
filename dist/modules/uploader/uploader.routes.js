"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uploader_1 = __importDefault(require("../../utils/uploader"));
const uploader_controller_1 = require("./uploader.controller");
const uploaderRoutes = (0, express_1.Router)();
uploaderRoutes.route('/single')
    .post(uploader_1.default.single('file'), uploader_controller_1.singleUploadController);
uploaderRoutes.route('/multiple')
    .post(uploader_1.default.array('file'), uploader_controller_1.multipleUploadController);
exports.default = uploaderRoutes;
//# sourceMappingURL=uploader.routes.js.map