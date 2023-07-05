import { NextFunction, Request, Response, Router } from 'express'
import { getAllUsersController } from '../app/users/useCases/getAllUsers'

const userRoutes = Router()

userRoutes.get('/', (req: Request, res: Response, next: NextFunction) => {
    return getAllUsersController.execute(req, res, next)
})

export { userRoutes }