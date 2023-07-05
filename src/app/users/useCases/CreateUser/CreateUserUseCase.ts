import { User } from "@prisma/client";
import { CreateUserDTO } from "../../dto/CreateUserDto";

export interface CreateUserUseCase {
    execute(user: CreateUserDTO): Promise<User>
}