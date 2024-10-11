import { IDependencies } from "../../App/Interface/IDependencies";
import {loginController} from "./login"
import {addUserController} from "./UserController"

export const controllers = (dependencies:IDependencies)=>{
    return{
       login:loginController(dependencies),
       addUser:addUserController(dependencies)
    }
}