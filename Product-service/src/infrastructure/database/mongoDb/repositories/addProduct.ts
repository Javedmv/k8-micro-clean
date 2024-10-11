import { Product,ProductRequest } from "../../../../domain/entity";
import { product } from "../models/productSchema";

export const addProduct =  async (data : ProductRequest) : Promise < Product | null > =>{
    try{
        const newProduct = new product(data);
        const saveProduct = await newProduct.save();
        return saveProduct as Product
    }
    catch(error:any){
        console.error("Error adding product : ",  error);
        throw new Error("Failed to add Product  ")   
    }
}