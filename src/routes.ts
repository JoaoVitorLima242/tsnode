import { Router } from "express";
import UserController from './controllers/User'

const routes = Router()

routes.get('/users', UserController.index)
routes.get('/', UserController.home)

export default routes