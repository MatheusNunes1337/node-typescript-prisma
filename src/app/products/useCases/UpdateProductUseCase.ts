import { Product } from "@prisma/client";
import { UpdateProductDTO } from "../dto/UpdateProductDto";
import { IProductRepository } from "../repositories/IProductRepository";
import { Conflict } from "../../errors/Conflict";
import { NotFound } from "../../errors/NotFound";

export class UpdateProductUseCase {
    constructor(private readonly productRepository: IProductRepository) {}

    async execute(product: UpdateProductDTO, id: number): Promise<Product> {
        const productExists = await this.productRepository.findById(id)
        if(!productExists) throw new NotFound('Product')

        const { name } = product
        
        if(name !== productExists.name) {
            const productsWithSameName = await this.productRepository.findByFilter({name})
            if(productsWithSameName.length > 0) throw new Conflict(`The product ${name} already exists`)
        }

        return this.productRepository.update(product, id)
    }
}