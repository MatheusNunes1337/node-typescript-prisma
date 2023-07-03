import { NextFunction } from "express";
import { CreateProductDTO } from "../../dto/CreateProductDto";
import { ProductRepository } from "../../repositories/ProductRepository";
import { CreateProductService } from "./CreateProductService";
import { Conflict } from "../../../errors/Conflict";

export class CreateProductServiceImpl implements CreateProductService {
    constructor(
        private readonly productRepository: ProductRepository,
        private next: NextFunction
    ) {}
    async execute(product: CreateProductDTO): Promise<any> {
        const { name } = product
        try {
            const productExists = await this.productRepository.findAll({ name })
            if(productExists) throw new Conflict(`The product ${name} already exists`)

            return this.productRepository.create(product)
        } catch(error) {
            this.next(error)
        }
    }
}