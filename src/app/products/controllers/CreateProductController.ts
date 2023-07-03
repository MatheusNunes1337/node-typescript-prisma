import { NextFunction, Request, Response } from "express";
import { CreateProductService } from "../services/CreateProduct/CreateProductService";

export class CreateProductController {
    constructor (private readonly createProductService: CreateProductService) {}
    async execute(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const product = await this.createProductService.execute(req.body)
            return res.status(201).json(product)
        } catch(error) {
            return next(error)
        }
    }
}