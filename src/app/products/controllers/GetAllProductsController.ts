import { NextFunction, Request, Response } from "express";
import { GetAllProductsUseCase } from "../useCases";

export class GetAllProductsController {
    constructor (private readonly createProductUseCase: GetAllProductsUseCase) {}
    async execute(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const products = await this.createProductUseCase.execute(req.query)
            return res.status(200).json(products)
        } catch(error) {
            return next(error)
        }
    }
}