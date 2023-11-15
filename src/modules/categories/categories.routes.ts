import { Router } from "express";
import { createCategoryController, deleteCategoryController, getAllCategoryController, updateCategoryController } from "./categories.controller";

const categoryRoutes = Router();

categoryRoutes.route('/')
.get(getAllCategoryController)
.post(createCategoryController)

categoryRoutes.route('/:id')
.patch(updateCategoryController)
.delete(deleteCategoryController)

export default categoryRoutes
