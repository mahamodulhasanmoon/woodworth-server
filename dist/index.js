"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app/app"));
const dbConnect_1 = __importDefault(require("./db/dbConnect"));
const port = process.env.PORT || 8000;
const dbUrl = process.env.DB_URI || 'test';
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, dbConnect_1.default)(dbUrl);
        app_1.default.listen(port, () => {
            console.log(`server is running at ${process.env.SERVER_URI}`);
        });
    }
    catch (error) {
        console.error('Failed to connect to the database:', error);
    }
}))();
//# sourceMappingURL=index.js.map