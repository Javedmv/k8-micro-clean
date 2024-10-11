import { Product } from "../entity";

export interface IListProductUseCase{
    execute(token:string):Promise <Product [] | null >
}