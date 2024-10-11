import { CartEntity,AddToCartRequest } from "../../domain/entity/cartEntity";


export interface IRepositories{
    addToCart:(data:AddToCartRequest)=>Promise<CartEntity | null >;
    getCart:(userId:string)=>Promise<CartEntity | null >;
}