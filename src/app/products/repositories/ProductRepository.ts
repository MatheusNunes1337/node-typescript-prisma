import { CreateProductDTO } from "../dto/CreateProductDto";
import { FilterProductsDTO } from "../dto/FilterProductsDto";
import { UpdateProductDTO } from "../dto/UpdateProductDto";

export interface ProductRepository {
    create(user: CreateProductDTO): Promise<any>;
    findById(id: string): Promise<any | null>;
    findByFilter(filter: FilterProductsDTO): Promise<any | null>
    update(user: UpdateProductDTO): Promise<any>;
    delete(id: string): Promise<void>;
}