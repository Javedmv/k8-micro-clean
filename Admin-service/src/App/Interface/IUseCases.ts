import {AddUserUseCase, loginAdminUseCase} from '../../Domain//useCaseInterfaces'
import { IDependencies } from './IDependencies'


export interface IUseCases {
    loginAdminUseCase: (dependancies: IDependencies) => loginAdminUseCase
    AddUserUseCase: (depenedancies: IDependencies) => AddUserUseCase
}