import { ObjectId } from "mongoose";

export type Role = 'user' | 'admin';

export interface UserEntity {
    _id?: ObjectId,
    username: string,
    email: string,
    password: string,
    role: Role,
    isBlocked: boolean
}