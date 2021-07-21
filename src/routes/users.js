import { Router } from 'express'
import AuthController from '../controllers/authController'
import ProjectController from '../controllers/projectController'

const routes = Router()
const authController = new AuthController()
const projectController = new ProjectController()
const authMiddleware = require('../middlewares/auth')

routes.get('/project', authMiddleware, projectController.project)
routes.post('/register', authController.register)
routes.post('/authenticate', authController.authenticate)
routes.post('/forgotPassword', authController.forgotPassword)

export default routes;