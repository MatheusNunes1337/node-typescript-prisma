import { PrismaClient } from '@prisma/client'

import { CreateProductUseCaseImpl } from './CreateProductServiceImpl'
import { ProductRepositoryImpl } from '../../repositories/ProductRepositoryImpl'
import { CreateProductController } from '../../controllers/CreateProductController'

const prismaClient = new PrismaClient()

const productRepository = new ProductRepositoryImpl(prismaClient)

const createProductUseCase = new CreateProductUseCaseImpl(productRepository)

export const createProductController = new CreateProductController(createProductUseCase)
