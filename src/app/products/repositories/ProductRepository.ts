import { Product } from '@prisma/client';
import { CreateProductDTO } from "../dto/CreateProductDto";
import { UpdateProductDTO } from "../dto/UpdateProductDto";
import { FilterProductsDTO } from "../dto/FilterProductsDto";


export interface ProductRepository {
    create(productInput: CreateProductDTO): Promise<Product>;
    findById(id: number): Promise<Product | null>;
    findAll(): Promise<Array<Product> | []>
    findByFilter(filter?: FilterProductsDTO ): Promise<Array<Product> | []>
    update(productInput: UpdateProductDTO, id: number): Promise<Product>;
    delete(id: number): Promise<void>;
}