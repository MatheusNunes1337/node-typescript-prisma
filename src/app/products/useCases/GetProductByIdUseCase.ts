import { Product } from "@prisma/client";
import { IProductRepository } from "../repositories/IProductRepository";

export class GetProductByIdUseCase {
    constructor(private readonly productRepository: IProductRepository) {}
    async execute(id: number): Promise<Product | null> {
        return this.productRepository.findById(id)
    }
}