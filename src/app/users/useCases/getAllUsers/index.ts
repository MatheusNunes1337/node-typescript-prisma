import { PrismaClient } from "@prisma/client";
import { UserRepositoryImpl } from "../../repositories/UserRepositoryImpl";
import { GetAllUsersUseCaseImpl } from "./GetAllUsersUseCaseImpl";
import { GetAllUsersController } from "../../controllers/GetAllUsersController";

const prismaClient = new PrismaClient()
const userRepository = new UserRepositoryImpl(prismaClient)
const getAllUsersUseCase = new GetAllUsersUseCaseImpl(userRepository)
const getAllUsersController = new GetAllUsersController(getAllUsersUseCase)

export { getAllUsersController }