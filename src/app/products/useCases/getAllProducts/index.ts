import { PrismaClient } from "@prisma/client";
import { ProductRepositoryImpl } from "../../repositories/ProductRepositoryImpl";
import { GetAllProductsUseCaseImpl } from "./GetAllProductsUseCaseImpl";
import { GetAllProductsController } from "../../controllers/GetAllProductsController";

const prismaClient = new PrismaClient()

const productRepository = new ProductRepositoryImpl(prismaClient)
const getAllProductsUseCase = new GetAllProductsUseCaseImpl(productRepository)
const getAllProductsController = new GetAllProductsController(getAllProductsUseCase)

export {getAllProductsController}