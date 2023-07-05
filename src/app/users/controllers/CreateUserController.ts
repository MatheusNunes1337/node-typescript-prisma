import { NextFunction, Request, Response } from "express";
import { CreateUserUseCase } from "../useCases/CreateUser/CreateUserUseCase";

export class CreateUserController {
    constructor(private readonly createUserUseCase: CreateUserUseCase) {}
    
    async execute(req: Request, res: Response, next: NextFunction) {
        try {
            const insertedUser = await this.createUserUseCase.execute(req.body)
            res.status(201).json(insertedUser)   
        } catch(error) {
            next(error)
        }
    }
}