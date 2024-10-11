import { CartEntity } from "../entity/cartEntity";


export interface IGetCartUseCase {
    execute(userId : string): Promise<CartEntity | null>;
}