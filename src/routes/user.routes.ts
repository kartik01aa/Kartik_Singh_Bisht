import {Router} from 'express'
import { loginCustomer, registerCustomer,logoutCustomer } from '../controllers/user.controller'

const customerRouter = Router()

customerRouter.post('/registerUser',registerCustomer);
customerRouter.post('/loginUser',loginCustomer);
customerRouter.get('/logoutUser',logoutCustomer);

export default customerRouter;