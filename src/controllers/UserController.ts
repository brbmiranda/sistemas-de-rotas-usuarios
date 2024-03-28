import { Request, response, Response } from 'express'
import { UserService } from '../services/UserServices'


export class UserController {
    createUser = (request: Request, response: Response) => {
        const userService = new UserService()
        const user = request.body



        if(!user.name){
            return response.status(400).json({ messa: 'bad request! Nome Obrigatório'})
        }

        userService.createUser(user.name, user.email)
        return response.status(201).json({ message: 'Usuário criado' })
    }

    getAllUsers = (request: Request, response: Response) => {
        const userService = new UserService()

        const users = userService.getAllusers()
        return response.status(200).json( users )
    }
}
