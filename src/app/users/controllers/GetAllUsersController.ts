import { NextFunction, Request, Response } from "express";
import { GetAllUsersUseCase } from "../useCases/getAllUsers/GetAllUsersUseCase";

export class GetAllUsersController {
    constructor(private readonly getAllUsersUseCase: GetAllUsersUseCase) {}
    
    async execute(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await this.getAllUsersUseCase.execute(req.params)
            res.status(200).json(users)   
        } catch(error) {
            next(error)
        }
    }
}