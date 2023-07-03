import { CreateProductDTO } from "../dto/CreateProductDto";
import { ProductRepository } from "../repositories/ProductRepository";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductUseCaseImpl implements CreateProductUseCase {
    constructor(private readonly productRepository: ProductRepository) {}
    async execute(product: CreateProductDTO): Promise<any> {
        const { name } = product

    }
}