import { Request, Response } from "express";
import { findUserByEmail, signupService, updateUserByIdService } from "./user.services";
import { genarateToken } from "./../../utils/token";

export const createUser = async (req:Request, res:Response,) => {
    try {
      const userData = await signupService(req.body);
      
      const token = genarateToken(userData.email)
      res.status(201).json({
        status: 201,
        message: "Successfully created account",
        data:{
            accessToken: token,
        }

      });
    } catch (error) {
      res.status(400).json({
        status: "failed",
        message: "403 Bad Request",
        error: error.message,
      });
    }
}


export const loginUserController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(401).json({
        status: "fail",
        message: "Please provide your credentials",
        
      });
    }

    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        status: "fail",
        error: "No user found. Please create an account",
      });
    }

    const isPasswordValid = (user as any).comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(403).json({
        status: "fail",
        message: "Password is not correct",
        
      });
    }

    const token = genarateToken(user);

    const { password: pwd, ...others } = user.toObject();

    res.status(200).json({
      status: "success",
      message: "Successfully logged in",
      data: {
        user: others,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
      message:error.message
    });
  }
};

export const getMe = async (req:Request, res:Response) => {
  try {
    const user = await findUserByEmail((req as any)?.user?.email);

    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
      message:error.message
    });
  }
};


export const updateUserByIdController = async (req:Request, res:Response) => {
  try {
      const {id} = req.params
      
      const data = await updateUserByIdService(id,req.body)
  
      res.status(201).json({
          status:201,
          message:"updated Successfully",
          data:req.body
      });
  } catch (error) {
      res.status(400).json({
          status:400,
          error:error,
          message:error.message
      });
  } 
  };