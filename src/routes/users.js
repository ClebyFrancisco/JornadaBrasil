import { Router } from "express";
import usersController from '../controllers/usersController'

const routes = Router()
const UsersController = new usersController()

routes.post('/cadastro', UsersController.user)
