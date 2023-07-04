import { PrismaClient } from "@prisma/client";
import { ProductRepositoryImpl } from "../../repositories/ProductRepositoryImpl";
import { DeleteProductUseCaseImpl } from "./DeleteProductUseCaseImpl";
import { DeleteProductController } from "../../controllers/DeleteProductController";

const prismaClient = new PrismaClient()
const productRepository = new ProductRepositoryImpl(prismaClient)
const deleteProductUseCase = new DeleteProductUseCaseImpl(productRepository)
const deleteProductController = new DeleteProductController(deleteProductUseCase)

export { deleteProductController}
