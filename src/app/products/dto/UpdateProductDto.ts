import { CreateProductDTO } from "./CreateProductDto";

export interface UpdateProductDTO extends Partial<CreateProductDTO> {
    name?: string,
    description?: string,
    price?: number,
    stock?: number,
    coverImage?: string
}