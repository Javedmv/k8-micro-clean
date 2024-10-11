import { UserEntity,UserLoginEntity } from "../Entity";

export interface ILoginUserUseCase{
    execute(data: UserLoginEntity): Promise<UserEntity | null>
}