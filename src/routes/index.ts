import { Router } from 'express'
import { productRoutes } from './product.routes'
import { userRoutes } from './user.routes'

const routes = Router()

routes.use('/api/v1/users', userRoutes)
routes.use('/api/v1/products', productRoutes)

export { routes }