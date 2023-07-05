import { User } from "@prisma/client";
import bcrypt from 'bcrypt';

import { UserRepository } from "../../repositories/UserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserDTO } from "../../dto/CreateUserDto";
import { Conflict } from "../../../errors/Conflict";

export class CreateUserUseCaseImpl implements CreateUserUseCase {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(userInput: CreateUserDTO): Promise<User> {
        const {email, cpf} = userInput

        const usersWithSameEmail = await this.userRepository.findByFilter({ email })
        if(usersWithSameEmail.length > 0) throw new Conflict('This e-mails is already in use')

        const usersWithSameCpf = await this.userRepository.findByFilter({ cpf })
        if(usersWithSameCpf.length > 0) throw new Conflict('This cpf is already in use')

        const { password } = userInput
        const hashedPassword = await bcrypt.hash(password, 10);

        return this.userRepository.create({ ...userInput, password: hashedPassword });
    }
}