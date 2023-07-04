import { NextFunction, Request, Response } from "express";
import { GetProductByIdUseCase } from "../useCases/getProductById/GetProductByIdUseCase";

export class GetProductByIdController {
    constructor(private readonly getProductByIdUseCase: GetProductByIdUseCase) {}

    async execute(req: Request, res: Response, next: NextFunction) {
        try {
            const product = await this.getProductByIdUseCase.execute(+req.params.id)
            if(product) return res.status(200).json(product)
            else return res.status(204).end()
        } catch(error) {
            return next(error)
        }
        
    }
}