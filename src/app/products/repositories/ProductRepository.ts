import { CreateProductDTO } from "../dto/CreateProductDto";
import { UpdateProductDTO } from "../dto/UpdateProductDto";
import { FilterProductsDTO } from "../dto/FilterProductsDto";

export interface ProductRepository {
    create(user: CreateProductDTO): Promise<any>;
    findById(id: string): Promise<any | null>;
    findAll(filter?: FilterProductsDTO): Promise<any | null>
    update(user: UpdateProductDTO): Promise<any>;
    delete(id: string): Promise<void>;
}