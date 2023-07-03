import { CreateProductServiceImpl } from './CreateProductServiceImpl'
import { ProductRepository } from '../../repositories/ProductRepository'

import { CreateProductController } from '../../controllers/CreateProductController'

const createProductService = new CreateProductServiceImpl()

const createProductController = new CreateProductController(CreateProductServiceImpl)