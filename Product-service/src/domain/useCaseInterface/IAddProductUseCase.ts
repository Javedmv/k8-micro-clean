import { promises } from "dns";
import { Product,ProductRequest } from "../entity";

export interface IAddProductUseCase {
    execute(data: ProductRequest): Promise < Product | null >;
}