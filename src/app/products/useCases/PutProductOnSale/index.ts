import { PrismaClient } from "@prisma/client";
import { ProductRepositoryImpl } from "../../repositories/ProductRepositoryImpl";
import { PutProductOnSaleUseCaseImpl } from "./PutProductOnSaleUseCaseImpl";
import { PutProductOnSaleController } from "../../controllers/PutProductOnSaleController";

const prismaClient = new PrismaClient()
const productRepository = new ProductRepositoryImpl(prismaClient)
const putProductOnSaleUseCase = new PutProductOnSaleUseCaseImpl(productRepository)
const putProductOnSaleController = new PutProductOnSaleController(putProductOnSaleUseCase)

export { putProductOnSaleController }