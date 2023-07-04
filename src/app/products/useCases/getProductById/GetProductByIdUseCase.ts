import { Product } from "@prisma/client";

export interface GetProductByIdUseCase {
    execute(id: number) : Promise<Product | null>
}