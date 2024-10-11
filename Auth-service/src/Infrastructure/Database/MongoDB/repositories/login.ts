import bcrypt from "bcryptjs"
import { UserEntity, UserLoginEntity } from "../../../../Domain/Entity"
import { User } from "../Models/loginCridentials"

export const login=async(data:UserLoginEntity): Promise<UserEntity | null > =>{
    try{
        console.log(data)
        const user : UserEntity | null =  await User.findOne({email:data.email})
        console.log(user,'new user,repo,signup')
        if(user){
            const isMatch : boolean = await bcrypt.compare(data.password,user.password)
            if(!isMatch){
                throw new Error("Username or password incorrect");
            }else{
                return user as UserEntity;
            }
        }else{
            throw new Error("User not found!");
        }
    }catch(error:any){
        throw new Error(error?.message);
    }
}