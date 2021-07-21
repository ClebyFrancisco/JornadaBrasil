import { Router } from 'express'
import AuthController from '../app/controllers/authController'
import ProjectController from '../app/controllers/projectController'

const routes = Router()
const authController = new AuthController()
const projectController = new ProjectController()
const authMiddleware = require('../app/middlewares/auth')

routes.get('/project', authMiddleware, projectController.project)
routes.post('/register', authController.register)
routes.post('/authenticate', authController.authenticate)
routes.post('/forgotPassword', authController.forgotPassword)
routes.post('/resetPassword', authController.resetPassword)

export default routes
