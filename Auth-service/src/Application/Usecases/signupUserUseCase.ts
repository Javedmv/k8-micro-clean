import { UserEntity } from "../../Domain/Entity";
import { IDependencies } from "../Interfaces/IDependencies";

export const signupUserUseCase=(dependencies:IDependencies)=>{
    const {repositories:{signup}} = dependencies;
    return{
        execute:async (data:UserEntity)=>{
            try{
                return await signup(data)
            }catch(error:any){
                throw new Error(error?.message)
            }
        }
    }
}