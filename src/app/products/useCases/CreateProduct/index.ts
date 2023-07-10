import { PrismaClient } from '@prisma/client'

import { CreateProductUseCase } from '../CreateProductServiceImpl'
import { ProductRepository } from '../../repositories/ProductRepository'
import { CreateProductController } from '../../controllers/CreateProductController'

const prismaClient = new PrismaClient()

const productRepository = new ProductRepository(prismaClient)

const createProductUseCase = new CreateProductUseCase(productRepository)

export const createProductController = new CreateProductController(createProductUseCase)
