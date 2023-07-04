import { NextFunction, Request, Response, Router } from 'express'
import { createProductController } from '../app/products/useCases/CreateProduct'
import { getAllProductsController } from '../app/products/useCases/getAllProducts'
import { getProductByIdController } from '../app/products/useCases/getProductById'
import { updateProductController } from '../app/products/useCases/UpdateProduct'

const productRoutes = Router()

productRoutes.post('/', (req: Request, res: Response, next: NextFunction) => {
    return createProductController.execute(req, res, next)
})

productRoutes.get('/', (req: Request, res: Response, next: NextFunction) => {
    return getAllProductsController.execute(req, res, next)
})

productRoutes.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    return getProductByIdController.execute(req, res, next)
})

productRoutes.put('/:id', (req: Request, res: Response, next: NextFunction) => {
    return updateProductController.execute(req, res, next)
})

export { productRoutes }