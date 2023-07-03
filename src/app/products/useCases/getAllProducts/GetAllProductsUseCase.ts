import { Product } from "@prisma/client";
import { FilterProductsDTO } from "../../dto/FilterProductsDto";

export interface GetAllProductsUseCase {
    execute(filter?: FilterProductsDTO): Promise<Array<Product>>
}