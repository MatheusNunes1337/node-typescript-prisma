import { NextFunction, Request, Response } from "express";
import { UpdateProductUseCase } from "../useCases/UpdateProduct/UpdateProductUseCase";

export class UpdateProductController {
    constructor(private readonly updateProductUseCase: UpdateProductUseCase) {}

    async execute(req: Request, res: Response, next: NextFunction) {
        try {
            const updatedProduct = await this.updateProductUseCase.execute(req.body, +req.params.id)
            return res.status(200).json(updatedProduct)
        } catch(error) {
            return next(error)
        }
    }
}