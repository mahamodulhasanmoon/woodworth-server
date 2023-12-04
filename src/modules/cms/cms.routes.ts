import { Router } from "express";
import { createNewSliderController, createNewWarrentyController, deleteSliderController, getSliderController, getWarrentyController } from "./cms.controller";
import { authorization } from "../../middleware/authorization";

export const cmsRoutes = Router()

cmsRoutes.route('/slider')
.post(
    authorization("admin"),
    createNewSliderController)



.get(getSliderController)
cmsRoutes.route('/warrenty')
.post(
    authorization("admin"),
    createNewWarrentyController)
.get(getWarrentyController)

cmsRoutes.route('/slider/:id')
.delete(
    authorization("admin"),
    deleteSliderController)

