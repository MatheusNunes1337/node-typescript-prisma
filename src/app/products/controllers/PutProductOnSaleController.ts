import { NextFunction, Request, Response } from "express";
import { PutProductOnSaleUseCase } from "../useCases";

export class PutProductOnSaleController {
    constructor(private readonly putProductOnSaleUseCase: PutProductOnSaleUseCase) {}

    async execute(req: Request, res: Response, next: NextFunction) {
        try {
            const {discountPercentage} = req.body
            const productOnSale = await this.putProductOnSaleUseCase.execute(discountPercentage, +req.params.id)
            return res.status(200).json(productOnSale)
        } catch(error) {
            return next(error)
        }
    }
}