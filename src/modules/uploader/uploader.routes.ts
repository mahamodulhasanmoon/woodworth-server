import {  NextFunction, Request, Response, Router } from "express";

import  upload  from "../../utils/uploader";
import { multipleUploadController, singleUploadController } from "./uploader.controller";
type RequestHandler = (req: Request, res: Response, next: NextFunction) => any;

  const uploaderRoutes = Router()
  uploaderRoutes.route('/single')
  .post(upload.single('file'),singleUploadController as RequestHandler);
  uploaderRoutes.route('/multiple')
  .post(upload.array('file'),multipleUploadController as RequestHandler);



  export default uploaderRoutes