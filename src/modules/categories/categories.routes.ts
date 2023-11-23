import { Router } from "express";
import { createCategoryController, deleteCategoryController, getAllCategoryController, updateCategoryController } from "./categories.controller";
import { authorization } from "./../../middleware/authorization";

const categoryRoutes = Router();

categoryRoutes.route('/')
.get(getAllCategoryController)
.post(authorization("admin"),createCategoryController)

categoryRoutes.route('/:id')
.patch(authorization("admin"),updateCategoryController)
.delete(authorization("admin"),deleteCategoryController)

export default categoryRoutes
