import { NextFunction } from "express";
import { CreateProductDTO } from "../dto/CreateProductDto";
import { ProductRepository } from "../repositories/ProductRepository";
import { Conflict } from "../../errors/Conflict";

export class CreateProductUseCase {
    constructor(
        private readonly productRepository: ProductRepository,
    ) {}
    async execute(product: CreateProductDTO): Promise<any> {
        const { name } = product

        const productsWithSameName = await this.productRepository.findByFilter({name})
        if(productsWithSameName.length > 0) throw new Conflict(`The product ${name} already exists`)

        return this.productRepository.create(product)
    }
}