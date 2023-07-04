import { Product } from "@prisma/client";
import { GetProductByIdUseCase } from "./GetProductByIdUseCase";
import { ProductRepository } from "../../repositories/ProductRepository";

export class GetProductByIdUseCaseImpl implements GetProductByIdUseCase {
    constructor(private readonly productRepository: ProductRepository) {}
    async execute(id: number): Promise<Product | null> {
        return this.productRepository.findById(id)
    }
}