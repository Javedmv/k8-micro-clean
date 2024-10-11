import { UserEntity } from "../../../../Domain/Entity";
import { User } from "../Models/loginCridentials";

async function findByEmail(email: string): Promise<UserEntity | null> {
    try {
        console.log(email);
        
        const user = await User.findOne({ email });
        return user;
    } catch (error) {
        throw error;
    }
}

export { findByEmail };