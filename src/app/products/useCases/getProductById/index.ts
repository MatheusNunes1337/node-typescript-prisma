import { PrismaClient } from "@prisma/client";
import { ProductRepositoryImpl } from "../../repositories/ProductRepositoryImpl";
import { GetProductByIdUseCaseImpl } from "./GetProductByIdUseCaseImpl";
import { GetProductByIdController } from "../../controllers/GetProductByIdController";

const prismaClient = new PrismaClient()

const productRepository = new ProductRepositoryImpl(prismaClient)
const getProductByIdUseCase = new GetProductByIdUseCaseImpl(productRepository)
const getProductByIdController = new GetProductByIdController(getProductByIdUseCase)

export { getProductByIdController }