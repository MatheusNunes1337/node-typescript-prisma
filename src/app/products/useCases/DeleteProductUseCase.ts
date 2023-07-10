import { NotFound } from "../../errors/NotFound";
import { IProductRepository } from "../repositories/IProductRepository";

export class DeleteProductUseCase {
    constructor(private readonly productRepository: IProductRepository) {}
    async execute(id: number): Promise<void> {
        const productExists = await this.productRepository.findById(id)
        if(!productExists) throw new NotFound('Product')

        return await this.productRepository.delete(id)
    }
}