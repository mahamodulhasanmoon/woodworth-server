import { Router } from "express";
import { createDealerController, getAllDealerController, getDealersByIdController,deleteDealersByIdController ,updateDealersByIdController} from "./dealer.controller";


const dealerRoutes = Router();

dealerRoutes.route('/')
.post(createDealerController)
.get(getAllDealerController)

dealerRoutes.route('/:id')
.get(getDealersByIdController)
.delete(deleteDealersByIdController)
.patch(updateDealersByIdController)


export default dealerRoutes
