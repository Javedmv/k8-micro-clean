import { UserEntity } from "../Entity";

export interface IFindUserByEmailUseCase {
    execute(email: string): Promise<UserEntity | null>;
  }