import { Router } from "express";
import { createCategoryController, deleteCategoryController, getAllCategoryController, updateCategoryController } from "./categories.controller";
import { authorization } from "./../../middleware/authorization";
import { verifyToken } from "../../middleware/verifyToken";

const categoryRoutes = Router();

categoryRoutes.route('/')
.get(getAllCategoryController)
.post(verifyToken,authorization("admin"),createCategoryController)

categoryRoutes.route('/:id')
.patch(verifyToken,authorization("admin"),updateCategoryController)
.delete(verifyToken,authorization("admin"),deleteCategoryController)

export default categoryRoutes
