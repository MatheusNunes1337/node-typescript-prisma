import {Request, Response, NextFunction} from 'express'
import { NotFound } from '../errors/NotFound';

export const errorMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode: number = 500;

    if (error instanceof NotFound) statusCode = 404;
    else statusCode = 400;

    res.status(statusCode).json(statusCode !== 500 ? error : 'Something went wrong');
};
