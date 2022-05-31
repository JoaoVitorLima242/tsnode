import { Request, Response } from 'express'
import User from '../schemas/User'

class UserController {
    public async index(req: Request, res: Response) : Promise<Response> {
        const users = await User.find();

        return res.json(users)
    }
    public async home(req: Request, res: Response) : Promise<Response> {

        return res.send('Hello World')
    }
}

export default new UserController()