import { product } from "../models/productModal";
import { AddProduct } from "../../../../domain/entity/productEntity";


export const insertProduct =async(data:AddProduct)=>{
    try {
        const createdProduct = new product({
             _id:data._id,
             name:data.name,
             description:data.description,
             price:data.price,
             stock:data.stock,
        })
        await createdProduct.save()
    } catch (error:any) {
        throw new Error(error?.message)
    }
}