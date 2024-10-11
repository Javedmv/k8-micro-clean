import { AdminLoginRequest } from "../../Domain/Entity/Index";
import { IDependencies } from "../Interface/IDependencies";


export const loginAdminUseCase = (dependancies: IDependencies) =>{
    const {repositories: {login} } = dependancies
    return {
        execute : async ( data: AdminLoginRequest ) => {
            try {
                return await login(data)
            } catch (error: any) {
                throw new Error(error?.message)
            }
        }
    }
}