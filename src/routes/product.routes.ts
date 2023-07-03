import { NextFunction, Request, Response, Router } from 'express'
import { createProductController } from '../app/products/useCases/CreateProduct'

const productRoutes = Router()

productRoutes.post('/', (req: Request, res: Response, next: NextFunction) => {
    return createProductController.execute(req, res, next)
})

export { productRoutes }