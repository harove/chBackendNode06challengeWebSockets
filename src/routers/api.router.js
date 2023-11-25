import { Router } from 'express';
import { productsRouter } from './products.router.js';
import { cartsRouter } from './carts.router.js';


export const apiRouter = Router()
apiRouter.use('/api/products', productsRouter)
apiRouter.use('/api/carts', cartsRouter)