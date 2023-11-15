import { Router } from "express";
import { createNewSliderController, createNewWarrentyController, getSliderController, getWarrentyController } from "./cms.controller";

export const cmsRoutes = Router()

cmsRoutes.route('/slider')
.post(createNewSliderController)
.get(getSliderController)
cmsRoutes.route('/warrenty')
.post(createNewWarrentyController)
.get(getWarrentyController)

