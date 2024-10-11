import { IDependencies } from '../App/Interface/IDependencies'
import * as repositories from "../Infrastructure/Database/MongoDb/Repositories"
import * as useCases from '../App/Usecases'


export const dependancies: IDependencies = {
    repositories,
    useCases
}