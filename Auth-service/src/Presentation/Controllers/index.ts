import { IDependencies } from "../../Application/Interfaces/IDependencies";
import { loginController } from "./Login";
import { signupController } from "./Signup"

export const controllers = (dependencies: IDependencies)=>{
    return{
        signup: signupController(dependencies),
        login: loginController(dependencies),
    }
}