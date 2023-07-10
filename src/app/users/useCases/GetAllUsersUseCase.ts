import { User } from "@prisma/client";
import { FilterUserDTO } from "../dto/FilterUserDto";
import { IUserRepository } from "../repositories/IUserRepository";

export class GetAllUsersUseCase {
    constructor(private readonly userRepository: IUserRepository) {}
    async execute(filter?: FilterUserDTO): Promise<Array<User>> {
        if(filter) return await this.userRepository.findByFilter(filter)

        return this.userRepository.findAll()
    }
}