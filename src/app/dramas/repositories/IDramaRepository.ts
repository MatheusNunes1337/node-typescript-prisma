import { CreateDramaDTO } from "../dto/CreateDramaDto";
import { UpdateDramaDTO } from "../dto/UpdateDramaDto";

export interface IDramaRepository {
    create(user: CreateDramaDTO): Promise<any>;
    findById(id: string): Promise<any | null>;
    update(user: UpdateDramaDTO): Promise<any>;
    delete(id: string): Promise<void>;
}