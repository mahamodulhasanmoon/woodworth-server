import { Router } from "express";
import { createNewSliderController, createNewWarrentyController, deleteSliderController, getSliderController, getWarrentyController,createNewContactController, getContactController, createGoalController, getGoalsController, createSpecilityController, getSpecilityController } from "./cms.controller";
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

// for Contacts Routes

cmsRoutes.route('/contacts')
.post(
    // authorization("admin"),
    createNewContactController)
    .get(getContactController)

    // goals

    cmsRoutes.route('/goals')
.post(
    // authorization("admin"),
    createGoalController)
    .get(getGoalsController)

    cmsRoutes.route('/speciality')
.post(
    // authorization("admin"),
    createSpecilityController)
    .get(getSpecilityController)