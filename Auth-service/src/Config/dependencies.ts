import { IDependencies } from "../Application/Interfaces/IDependencies";
import * as repositories from "../Infrastructure/Database/MongoDB/repositories";
import * as useCases from "../Application/Usecases"

export const dependencies:IDependencies={
    useCases,
    repositories
}