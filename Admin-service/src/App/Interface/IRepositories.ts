import {AdminEntity, AdminLoginRequest, User, UserData} from '../../Domain/Entity/Index'

export interface IRepositories {
    login: (data: AdminLoginRequest) => Promise < AdminEntity | null >
    addUser: (data: UserData) => Promise < User | null >
}