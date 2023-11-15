"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
const errors_1 = require("./errors");
const middlewares_1 = __importDefault(require("./middlewares"));
const app = (0, express_1.default)();
console.log(path_1.default.resolve(__dirname, 'uploads'));
app.use(express_1.default.json());
app.use(middlewares_1.default);
app.use('/api/public', express_1.default.static(path_1.default.resolve(process.cwd(), 'dist', 'uploads')));
app.use('/api', routes_1.default);
app.use(errors_1.notFoundHandler);
app.use(errors_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map