"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dealer_controller_1 = require("./dealer.controller");
const dealerRoutes = (0, express_1.Router)();
dealerRoutes.route('/')
    .post(dealer_controller_1.createDealerController)
    .get(dealer_controller_1.getAllDealerController);
dealerRoutes.route('/:id')
    .get(dealer_controller_1.getDealersByIdController)
    .delete(dealer_controller_1.deleteDealersByIdController)
    .patch(dealer_controller_1.updateDealersByIdController);
exports.default = dealerRoutes;
//# sourceMappingURL=dealer.routes.js.map