import { Product } from "@prisma/client";
import { FilterProductsDTO } from "../dto/FilterProductsDto";
import { IProductRepository } from "../repositories/IProductRepository";

export class GetAllProductsUseCase {
    constructor(private readonly productRepository: IProductRepository) {}
   async execute(filter?: FilterProductsDTO): Promise<Array<Product>> {
        if(filter) return this.productRepository.findByFilter(filter)

        return this.productRepository.findAll()
   } 
}