import { ProductRequest,Product } from "../../domain/entity";

export interface IRepositories {
    addProduct : (data : ProductRequest) => Promise < Product | null >
    listProduct : (token : string) => Promise < Product [] | null >
}