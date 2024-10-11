import { AddToCartRequest , CartEntity} from "../entity/cartEntity"


export interface IaddToCartUseCase{
    execute(data:AddToCartRequest):Promise<CartEntity | null>
}