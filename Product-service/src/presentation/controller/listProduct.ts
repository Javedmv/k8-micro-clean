import { Response,NextFunction,Request } from "express";
import { IDependencies } from "../../app/interfaces/IDependencies";
import { Product } from "../../domain/entity";
import { validateProductRequest } from "../../util/productValidation";



export const listProductsController=(dependencies:IDependencies)=>{

    return async(req:Request,res:Response,next:NextFunction)=>{
        const {useCases:{listProductUseCase}} = dependencies;
        try {
            console.log(req.cookies,'-------------------------')
            const token : string | any  = req.cookies.auth;
            console.log("🚀 ~ file: listProducts.ts:10 ~ returnasync ~ token:", token)
            if(!token){
                throw new Error('Authentication failed due to token undefined')
            }

            const products:Product [] | null = await listProductUseCase(dependencies).execute(token)
            
            if (!products) {
                throw new Error('No products found');
            }
            res.status(200).json({ success: true, data: products });
        } catch (error:any) {
            next(error)
        }
    }
}