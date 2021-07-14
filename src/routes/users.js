import { Router } from 'express'
import AuthController from '../controllers/authController'

const routes = Router()
const authController = new AuthController()

routes.post('/register', authController.register)
routes.post('/authenticate', authController.authenticate)

export default routes;