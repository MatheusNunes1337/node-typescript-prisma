import { Product } from "@prisma/client";
import { UpdateProductDTO } from "../../dto/UpdateProductDto";

export interface UpdateProductUseCase {
    execute(product: UpdateProductDTO, id: number): Promise<Product>
}