import { PrismaClient, User } from "@prisma/client";
import { GetResult } from "@prisma/client/runtime";
import { CreateUserDTO } from "../dto/CreateUserDto";
import { FilterUserDTO } from "../dto/FilterUserDto";
import { UpdateUserDTO } from "../dto/UpdateUserDto";
import { UserRepository } from "./UserRepository";


export class UserRepositoryImpl implements UserRepository {
    constructor(private readonly prismaClient: PrismaClient) {}
    
    async create(user: CreateUserDTO): Promise<User> {
        const insertedUser = await this.prismaClient.user.create({
            data: {...user}
        })

        this.prismaClient.$disconnect()
        return insertedUser
    }

    async findAll(): Promise<Array<User> | []> {
        const users = await this.prismaClient.user.findMany()
        this.prismaClient.$disconnect()
        return users
    }

    async findByFilter(filter?: FilterUserDTO): Promise<Array<User> | []> {
        const users = await this.prismaClient.user.findMany({where: filter})
        this.prismaClient.$disconnect()
        return users
    }

    async findById(id: number): Promise<User | null> {
        const user = await this.prismaClient.user.findUnique({where: { id }})
        this.prismaClient.$disconnect()
        return user
    }

    async update(user: UpdateUserDTO, id: number): Promise<User> {
        const updatedUser = await this.prismaClient.user.update({
            where: { id },
            data: user
        })

        this.prismaClient.$disconnect()
        return updatedUser
    }

    async delete(id: number): Promise<void> {
        await this.prismaClient.product.delete({where: { id }})
        this.prismaClient.$disconnect()
    }

}