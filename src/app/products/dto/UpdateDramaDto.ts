import { CreateProductDTO } from "./CreateDramaDto";

export interface UpdateProductDTO extends Partial<CreateProductDTO> {
    product?: string,
    description?: string,
    price?: number,
    stock?: number,
    coverImage?: string
}