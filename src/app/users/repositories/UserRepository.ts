import { User } from '@prisma/client';
import { CreateUserDTO } from "../dto/CreateUserDto";
import { UpdateUserDTO } from "../dto/UpdateUserDto";
import { FilterUserDTO } from "../dto/FilterUserDto";


export interface UserRepository {
    create(user: CreateUserDTO): Promise<User>;
    findById(id: number): Promise<User | null>;
    findAll(): Promise<Array<User> | []>
    findByFilter(filter?: FilterUserDTO ): Promise<Array<User> | []>
    update(user: UpdateUserDTO, id: number): Promise<User>;
    delete(id: number): Promise<void>;
}