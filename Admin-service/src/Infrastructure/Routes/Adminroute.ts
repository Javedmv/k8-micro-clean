import {Router} from 'express'
import { IDependencies } from '../../App/Interface/IDependencies'
import { controllers } from '../../Presentation/Controller'


export const adminRouter = (dependancies: IDependencies) => {
    const {login,addUser} = controllers(dependancies)

    const router = Router()

    router.route('/admin-login').post(login)
    router.route('/add-user').post(addUser)

    return router
}