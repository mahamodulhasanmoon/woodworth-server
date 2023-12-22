import { Router } from "express";
import { createReviewController, deleteReviewController, getAllReviewController } from "./review.controller";
import { verifyToken } from "../../middleware/verifyToken";
import { authorization } from "../../middleware/authorization";


const ReviewRoutes = Router();

ReviewRoutes.route('/')
.get(getAllReviewController)
.post(
    // verifyToken,authorization("admin"),
    createReviewController)

ReviewRoutes.route('/:id')
.delete(verifyToken,authorization("admin"),deleteReviewController)

export default ReviewRoutes
