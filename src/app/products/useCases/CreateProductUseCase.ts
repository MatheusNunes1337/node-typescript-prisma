import { CreateProductDTO } from "../dto/CreateDramaDto";

export interface CreateProductUseCase {
    execute(drama: CreateProductDTO): Promise<any>
}