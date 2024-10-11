import { Types } from "mongoose";
import { insertProduct } from "../../database/mongoDb/repositories/addProduct";
import { AddProduct } from "../../../domain/entity/productEntity";

export default async ( data: AddProduct )=>{
    try {
        console.log("🚀 ~ file: productCreatedConsumer.ts:11 ~ data:", data)
        await insertProduct(data)
    } catch (error:any) {
        throw new Error(error?.message)
    }
}