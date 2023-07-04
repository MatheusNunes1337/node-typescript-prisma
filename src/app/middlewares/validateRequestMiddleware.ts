import { NextFunction, Request, Response } from "express";
import { validate, ValidationError } from "class-validator";
import { plainToClass, plainToInstance } from "class-transformer";

export const validateRequest = (dtoClass: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const dtoObject = plainToInstance(dtoClass, req.body);
        const errors = await validate(dtoObject);
  
        if (errors.length > 0) {
          const validationErrors = errors.map((error: ValidationError) => ({
            field: error.property,
            constraints: error.constraints,
          }));
          return res.status(400).json({ errors: validationErrors });
        }
  
        req.body = dtoObject;
        next();
      } catch (error) {
        return res.status(500).json({ error: "Something went wrong" });
      }
    };
};