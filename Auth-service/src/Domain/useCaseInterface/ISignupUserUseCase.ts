import { UserEntity } from "../Entity";

export interface ISignupUserUseCase{
    execute (user: UserEntity):Promise< UserEntity | null>
}