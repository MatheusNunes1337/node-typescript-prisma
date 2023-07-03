import { CreateProductDTO } from "../../dto/CreateProductDto";

export interface CreateProductService {
    execute(product: CreateProductDTO): Promise<any>
}