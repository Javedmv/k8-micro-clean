import { UserEntity } from "../../Domain/Entity";
import { IDependencies } from "../Interfaces/IDependencies";

export const findUserByEmailUseCase = (dependencies: IDependencies) => {
    const { repositories } = dependencies;

    return {
        execute: async (email: string): Promise<UserEntity | null> => {
           
                return await repositories.findByEmail(email);
                
           
        }
    };
};