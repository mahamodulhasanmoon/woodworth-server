import { Router } from "express";
import { createUser, getMe, loginUserController, updateUserByIdController } from "./user.controller";
import { verifyToken } from "../../middleware/verifyToken";

const  authRouter = Router();

authRouter.route('/signup')
.post(createUser)
authRouter.route('/login')
.post(loginUserController)
authRouter.route('/me')
.get(verifyToken,getMe)
authRouter.route('/user/:id')
.patch(updateUserByIdController)




export default authRouter