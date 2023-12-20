import { Router } from "express";
import { createNewSliderController, createNewWarrentyController, deleteSliderController, getSliderController, getWarrentyController,createNewContactController, getContactController, createGoalController, getGoalsController, createSpecilityController, getSpecilityController, deleteGoalController, deleteSpecialityController, deleteContactController, createAboutController, getAboutController, deleteAboutController } from "./cms.controller";
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
    cmsRoutes.route('/contacts/:id')
    .delete(
        // authorization("admin"),
        deleteContactController)

    // goals

    cmsRoutes.route('/goals')
.post(
    // authorization("admin"),
    createGoalController)
    .get(getGoalsController)

    cmsRoutes.route('/goals/:id')
.delete(
    // authorization("admin"),
    deleteGoalController)

    cmsRoutes.route('/speciality')
.post(
    // authorization("admin"),
    createSpecilityController)
    .get(getSpecilityController)

    cmsRoutes.route('/speciality/:id')
    .delete(
        // authorization("admin"),
        deleteSpecialityController)

        // For About Description Controller

        cmsRoutes.route('/about')
        .patch(
            // authorization("admin"),
            createAboutController)
            .get(getAboutController)
        
            cmsRoutes.route('/about/:id')
            .delete(
                // authorization("admin"),
                deleteAboutController)