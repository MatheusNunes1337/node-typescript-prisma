import { CreateProductDTO } from "../dto/CreateDramaDto";
import { UpdateProductDTO } from "../dto/UpdateDramaDto";

export interface DramaRepository {
    create(user: CreateProductDTO): Promise<any>;
    findById(id: string): Promise<any | null>;
    findByFilter(title: string): Promise<any | null>
    update(user: UpdateProductDTO): Promise<any>;
    delete(id: string): Promise<void>;
}