import { CreateProductDTO } from "../dto/CreateDramaDto";
import { DramaRepository } from "../repositories/DramaRepository";
import { CreateProductUseCase } from "./CreateDramaUseCase";

export class CreateProductUseCaseImpl implements CreateProductUseCase {
    constructor(private readonly dramaRepository: DramaRepository) {}
    async execute(drama: CreateProductDTO): Promise<any> {
        const { title } = drama
    }
}