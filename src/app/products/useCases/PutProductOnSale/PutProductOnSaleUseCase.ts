import { Product } from "@prisma/client";

export interface PutProductOnSaleUseCase {
    execute(discount: number, id: number): Promise<Product>
    applyDiscount(discount: number, currentPrice: number): number
}