import {AdminLoginRequest,AdminEntity} from "../Entity/Index"

export interface loginAdminUseCase {
    execute(credentials: AdminLoginRequest): Promise< AdminEntity | null >;
}