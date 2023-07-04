import { NotFound } from "../../../errors/NotFound";
import { ProductRepository } from "../../repositories/ProductRepository";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

export class DeleteProductUseCaseImpl implements DeleteProductUseCase {
    constructor(private readonly productRepository: ProductRepository) {}
    async execute(id: number): Promise<void> {
        const productExists = await this.productRepository.findById(id)
        if(!productExists) throw new NotFound('Product')

        return await this.productRepository.delete(id)
    }
}