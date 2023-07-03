import { CreateProductDTO } from "../../dto/CreateProductDto";

export interface CreateProductUseCase {
    execute(product: CreateProductDTO): Promise<any>
}