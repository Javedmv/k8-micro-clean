import { UserEntity } from "../../../../Domain/Entity";
import { User } from "../Models/loginCridentials";

export const signup = async (data: UserEntity) : Promise < UserEntity | null > => {
    try {
        // console.log(data,"222222222");
        
        const newUser = await User.create(data)
        console.log(newUser,"user created")
        
        if (!newUser) {
            throw new Error("User creation failed!");
        }

        return newUser as UserEntity
    } catch (error: any) {
        throw new Error(error?.message);
    }
}