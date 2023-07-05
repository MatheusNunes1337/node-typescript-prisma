import { User } from "@prisma/client";
import { FilterUserDTO } from "../../dto/FilterUserDto";
import { UserRepository } from "../../repositories/UserRepository";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

export class GetAllUsersUseCaseImpl implements GetAllUsersUseCase {
    constructor(private readonly userRepository: UserRepository) {}
    async execute(filter?: FilterUserDTO): Promise<Array<User>> {
        if(filter) return await this.userRepository.findByFilter(filter)

        return this.userRepository.findAll()
    }
}