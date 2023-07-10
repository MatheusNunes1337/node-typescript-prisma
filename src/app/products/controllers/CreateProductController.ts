import { NextFunction, Request, Response } from "express";
import { CreateProductUseCase } from "../useCases";

export class CreateProductController {
    constructor (private readonly createProductUseCase: CreateProductUseCase) {}
    async execute(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const product = await this.createProductUseCase.execute(req.body)
            return res.status(201).json(product)
        } catch(error) {
            return next(error)
        }
    }
}