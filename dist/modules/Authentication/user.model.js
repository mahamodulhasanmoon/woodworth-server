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
const mongoose_1 = require("mongoose");
const validator_1 = __importDefault(require("validator"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userSchema = new mongoose_1.Schema({
    dealerId: {
        type: mongoose_1.Types.ObjectId,
        ref: 'Dealer',
        required: [true, 'User Data not Found'],
        unique: true,
    },
    name: {
        type: String,
        required: [true, "Please provide a first name"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large"],
    },
    email: {
        type: String,
        validate: [validator_1.default.isEmail, "Provide a valid Email"],
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "Email address is required"],
    },
    role: {
        type: String,
        default: "dealer",
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        validate: {
            validator: (value) => validator_1.default.isStrongPassword(value, {
                minLength: 8,
                minLowercase: 1,
                minNumbers: 1,
                minUppercase: 1,
                minSymbols: 1,
            }),
            message: "Password {VALUE} is not strong enough.",
        },
    },
}, { timestamps: true });
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const password = this.password;
            const hashedPassword = bcryptjs_1.default.hashSync(password);
            this.password = hashedPassword;
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
userSchema.methods.comparePassword = function (password, hash) {
    const isPasswordValid = bcryptjs_1.default.compareSync(password, hash);
    return isPasswordValid;
};
userSchema.methods.generateConfirmationToken = function () {
    const token = crypto === null || crypto === void 0 ? void 0 : crypto.randomBytes(32).toString("hex");
    this.confirmationToken = token;
    const date = new Date();
    date.setDate(date.getDate() + 1);
    this.confirmationTokenExpires = date;
    return token;
};
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
//# sourceMappingURL=user.model.js.map