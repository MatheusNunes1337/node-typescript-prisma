import { PrismaClient } from "@prisma/client";

import {
    CreateProductUseCase, 
    DeleteProductUseCase, 
    GetAllProductsUseCase,
    GetProductByIdUseCase,
    PutProductOnSaleUseCase,
    UpdateProductUseCase
} from './useCases'

import {
    CreateProductController, 
    DeleteProductController, 
    GetAllProductsController,
    GetProductByIdController,
    PutProductOnSaleController,
    UpdateProductController
} from './controllers'

import { ProductRepository } from "./repositories/ProductRepository";

const prismaClient = new PrismaClient()
const productRepository = new ProductRepository(prismaClient)

const createProductUseCase = new CreateProductUseCase(productRepository)
const deleteProductUseCase = new DeleteProductUseCase(productRepository)
const getProductByIdUseCase = new GetProductByIdUseCase(productRepository)
const getAllProductsUseCase = new GetAllProductsUseCase(productRepository)
const putProductOnSaleUseCase = new PutProductOnSaleUseCase(productRepository)
const updateProductUseCase = new UpdateProductUseCase(productRepository)

const createProductController = new CreateProductController(createProductUseCase)
const deleteProductController = new DeleteProductController(deleteProductUseCase)
const getProductByIdController = new GetProductByIdController(getProductByIdUseCase)
const getAllProductsController = new GetAllProductsController(getAllProductsUseCase)
const putProductOnSaleController = new PutProductOnSaleController(putProductOnSaleUseCase)
const updateProductController = new UpdateProductController(updateProductUseCase)

export {
    createProductController,
    deleteProductController,
    getAllProductsController,
    getProductByIdController,
    putProductOnSaleController,
    updateProductController
}
