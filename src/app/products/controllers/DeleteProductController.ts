import { NextFunction, Request, Response } from "express";
import { DeleteProductUseCase } from "../useCases";

export class DeleteProductController {
    constructor(private readonly deleteProductUseCase: DeleteProductUseCase) {}

    async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            await this.deleteProductUseCase.execute(+req.params.id)
            res.status(204).end()
        } catch(error) {
            return next(error)
        }
    }
}