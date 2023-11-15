import { Request, Response, Router } from 'express';
import categoryRoutes from '../modules/categories/categories.routes';
import { productsRouter } from '../modules/Products/products.routes';
import dealerRoutes from '../modules/dealers/dealer.routes';
import uploaderRoutes from '../modules/uploader/uploader.routes';
import { cmsRoutes } from '../modules/cms/cms.routes';
import authRouter from '../modules/Authentication/user.routes';
const routes = Router();


routes.get('/health', (_req:Request, res:Response) => {
  res.status(200).json({
    status: 200,
    message:'success',
  });
});

// all Routes 
routes.use('/uploads',uploaderRoutes)


routes.use('/categories',categoryRoutes)
routes.use('/products',productsRouter)
routes.use('/dealer',dealerRoutes)
routes.use('/auth',authRouter)
routes.use('/cms',cmsRoutes)

export default routes;