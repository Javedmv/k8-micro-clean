import { Schema } from "mongoose";
import { insertUser } from "../../database/mongoDb/repositories";
import { IUserRequestEntity } from "../../../domain/entity/userEntity";


export default async (data: IUserRequestEntity )=>{
    try {
        console.log("🚀 ~ file: userCreatedConsumers.ts:17 ~ _id:", data)

        await insertUser(data)

    } catch (error:any) {
        
        throw new Error(error?.message)
    }     
}