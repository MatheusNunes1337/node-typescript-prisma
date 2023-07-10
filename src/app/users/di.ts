import { PrismaClient } from ".prisma/client"

import { UserRepository } from "./repositories/UserRepository"
import {CreateUserUseCase, GetAllUsersUseCase} from './useCases'
import {CreateUserController, GetAllUsersController} from './controllers'

const prismaClient = new PrismaClient()
const userRepository = new UserRepository(prismaClient)

const createUserUseCase = new CreateUserUseCase(userRepository)
const getAllUsersUseCase = new GetAllUsersUseCase(userRepository)

const createUserController = new CreateUserController(createUserUseCase)
const getAllUsersController = new GetAllUsersController(getAllUsersUseCase)

export {
    createUserController,
    getAllUsersController
}