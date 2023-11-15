import { NextFunction, Request, Response } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';

interface DecodedToken {
    _id: string;
    email: string;
  }
  declare module 'express' {
    interface Request {
      user?: DecodedToken;
      token:any
    } 
  }

  interface CustomRequest extends Request {
    user?: DecodedToken;
  }

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers?.authorization?.split(" ")?.[1];

    if (!token) {
      return res.status(401).json({
        status: "fail",
        error: "You are not logged in",
      });
    }
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
   (req as CustomRequest).token = decoded;


    if (!decoded) {
      return res.status(403).json({
        status: "fail",
        error: "Invalid token",
      });
    }
    req.user = decoded as DecodedToken;

    next();
  } catch (error) {
    console.error(error);

    if ((error as VerifyErrors).name === 'TokenExpiredError') {
      return res.status(401).json({
        status: "fail",
        error: "Token has expired",
      });
    }

    res.status(500).json({
      status: "fail",
      error: "Internal Server Error",
    });
  }
};
