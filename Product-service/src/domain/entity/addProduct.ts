import { Types } from "mongoose";

export interface ProductRequest {

    _id?:Types.ObjectId;
    name:string;
    description:string;
    price:number;
    stock:number;
    
}