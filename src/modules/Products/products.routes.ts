import { Router } from "express";
import { createPoductsController, getAllProductsController,getProductsByIdController,updateProductsByIdController,deleteProductsByIdController, updateStatusByIdController } from "./products.controller";

export const productsRouter = Router()

productsRouter.route('/')
.post(createPoductsController)
.get(getAllProductsController)



productsRouter.route('/:id')
.get(getProductsByIdController)
.patch(updateProductsByIdController)
.delete(deleteProductsByIdController)

productsRouter.route('/status/:id')
.get(updateStatusByIdController)
