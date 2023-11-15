"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define a schema for your data
const dealerSchema = new mongoose_1.Schema({
    companyName: { type: String, required: true },
    businessName: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    stateProvince: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    officePhone: { type: String, required: true },
    fax: { type: String, required: true },
    email: { type: String, required: true },
    website: String,
    contactFirstName: { type: String, required: true },
    contactLastName: { type: String, required: true },
    position: { type: String, required: true },
    contactPhone: { type: String, required: true },
    contactEmail: { type: String, required: true },
    businessCard: { type: String, required: true },
    driverLicense: { type: String, required: true },
    businessType: { type: String, required: true },
    businessRole: { type: String, required: true },
    startupYear: { type: String, required: true },
    businessLicense: { type: String, required: true },
    referralDescription: String,
    isApprove: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
// Create a Mongoose model using the schema
const Dealer = (0, mongoose_1.model)('Dealer', dealerSchema);
exports.default = Dealer;
//# sourceMappingURL=dealers.model.js.map