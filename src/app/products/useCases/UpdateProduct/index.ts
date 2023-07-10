import { PrismaClient } from "@prisma/client";
import { ProductRepositoryImpl } from "../../repositories/ProductRepositoryImpl";
import { UpdateProductUseCase } from "./UpdateProductUseCaseImpl";
import { UpdateProductController } from "../../controllers/UpdateProductController";

const prismaClient = new PrismaClient()

const productRepository = new ProductRepositoryImpl(prismaClient)
const updateProductUseCase = new UpdateProductUseCase(productRepository)
const updateProductController = new UpdateProductController(updateProductUseCase)

export { updateProductController }