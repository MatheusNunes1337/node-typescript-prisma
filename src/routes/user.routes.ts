import { NextFunction, Request, Response, Router } from 'express'
import { createUserController, getAllUsersController } from '../app/users/di'

const userRoutes = Router()

userRoutes.post('/', (req: Request, res: Response, next: NextFunction) => {
    return createUserController.execute(req, res, next)
})

userRoutes.get('/', (req: Request, res: Response, next: NextFunction) => {
    return getAllUsersController.execute(req, res, next)
})

export { userRoutes }