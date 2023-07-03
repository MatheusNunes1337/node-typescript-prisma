import { Router } from 'express'
import { productRoutes } from './product.routes'

const routes = Router()

routes.use('/api/v1/products', productRoutes)

export { routes }