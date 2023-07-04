import { Product } from "@prisma/client";
import { PutProductOnSaleUseCase } from "./PutProductOnSaleUseCase";
import { ProductRepository } from "../../repositories/ProductRepository";
import { NotFound } from "../../../errors/NotFound";

export class PutProductOnSaleUseCaseImpl implements PutProductOnSaleUseCase {
    constructor(private readonly productRepository: ProductRepository) {}
    async execute(discountPercentage: number, id: number): Promise<Product> {
        const productExists = await this.productRepository.findById(id)
        if(!productExists) throw new NotFound('Product')

        const { price } = productExists
        const priceAfterDiscount = this.applyDiscount(discountPercentage, Number(price))
        return this.productRepository.update({price: priceAfterDiscount}, id)
    }

    applyDiscount(discountPercentage: number, currentPrice: number): number {
        const discount = currentPrice * (discountPercentage / 100)
        return currentPrice - discount;
    }
}