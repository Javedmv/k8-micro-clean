import {User,UserData} from "../Entity/Index"


export interface AddUserUseCase{
    execute(userData: UserData): Promise< User | null >;
}