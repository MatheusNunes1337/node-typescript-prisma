import { PrismaClient } from "@prisma/client";
import { UserRepositoryImpl } from "../../repositories/UserRepositoryImpl";
import { CreateUserUseCaseImpl } from "./CreateUserUseCaseImpl";
import { CreateUserController } from "../../controllers/CreateUserController";

const prismaClient = new PrismaClient()
const userRepository = new UserRepositoryImpl(prismaClient)
const createUserUseCase = new CreateUserUseCaseImpl(userRepository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }