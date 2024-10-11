import {producer} from"..";
import { Types } from "mongoose";
import { ProductRequest } from "../../../domain/entity";

export const productCreatedProducer = async (data : ProductRequest) =>{
    try{
        await producer.connect();

        const message =  {
            topic : 'product',
            messages : [{
                key : "productcreated",
                value : JSON.stringify(data)
            }]
        }
        console.log("kafka productssssss",message);
        
        await  producer.send(message);
    }
    catch(error:any){
        console.error('kafka produce error:',error?.message)
    }
}