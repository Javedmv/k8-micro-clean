
import * as repositories from '../infrastructure/database/mongoDb/repositories'
import * as useCases from '../app/usecses'
import {IDependencies} from '../app/interfaces/IDependencies'

export const dependencies: IDependencies = {
    repositories,
    useCases
}
