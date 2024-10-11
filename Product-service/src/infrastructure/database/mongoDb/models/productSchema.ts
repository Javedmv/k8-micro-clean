import mongoose, {Schema} from "mongoose";
import { Product } from "../../../../domain/entity";
import { time } from "console";

const productSchema : Schema = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        description : {
            type:String,
            required:true
        },
        price : {
            type : String,
            required : true
        },
        stock : {
            type :String,
            required : true
        }
    },
    {
        timestamps : true
    }
);

export const product = mongoose.model < Product & Document >(
    "Product",
    productSchema   
);