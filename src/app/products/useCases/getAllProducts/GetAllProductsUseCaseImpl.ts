import { Product } from "@prisma/client";
import { FilterProductsDTO } from "../../dto/FilterProductsDto";
import { ProductRepository } from "../../repositories/ProductRepository";
import { GetAllProductsUseCase } from "./GetAllProductsUseCase";

export class GetAllProductsUseCaseImpl implements GetAllProductsUseCase {
    constructor(private readonly productRepository: ProductRepository) {}
   async execute(filter?: FilterProductsDTO): Promise<Array<Product>> {
        if(filter) return this.productRepository.findByFilter(filter)

        return this.productRepository.findAll()
   } 
}