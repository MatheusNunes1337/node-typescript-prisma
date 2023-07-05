import { User } from "@prisma/client";
import { FilterUserDTO } from "../../dto/FilterUserDto";

export interface GetAllUsersUseCase {
    execute(filter?: FilterUserDTO): Promise<Array<User>>
}