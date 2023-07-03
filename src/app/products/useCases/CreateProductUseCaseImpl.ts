import { CreateProductDTO } from "../dto/CreateProductDto";
import { DramaRepository } from "../repositories/ProductRepository";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductUseCaseImpl implements CreateProductUseCase {
    constructor(private readonly productRepository: DramaRepository) {}
    async execute(product: CreateProductDTO): Promise<any> {
        const { name } = product

    }
}