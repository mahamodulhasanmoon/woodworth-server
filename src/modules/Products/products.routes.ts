import { Router } from "express";
import { createPoductsController, getAllProductsController,getProductsByIdController,updateProductsByIdController,deleteProductsByIdController } from "./products.controller";

export const productsRouter = Router()

productsRouter.route('/')
.post(createPoductsController)
.get(getAllProductsController)

productsRouter.route('/:id')
.get(getProductsByIdController)
.patch(updateProductsByIdController)
.delete(deleteProductsByIdController)