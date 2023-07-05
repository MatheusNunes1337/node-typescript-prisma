import { CreateUserDTO } from "./CreateUserDto"

export interface UpdateUserDTO extends Partial<CreateUserDTO> {
    firstname?: string
    lastname?: string
    email?: string
    cpf?: string
    password?: string 
}