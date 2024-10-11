import { AdminEntity, AdminLoginRequest } from "../../../../Domain/Entity/Index";
import { Admin } from "../Models/loginSchema";
import bcrypt from "bcryptjs";

export const login = async (
  data: AdminLoginRequest
): Promise<AdminEntity | null> => {
  try {
    console.log(data, "-----+++++------");
    if (!data.email || !data.password) {
      throw new Error("Email and password are required");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error("Invalid email format");
    }

    if (data.password.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }

    
    const admin: AdminEntity | null = await Admin.findOne({
      email: data.email,
    });
    console.log("🚀 ~ file: adminLogin.ts:8 ~ adminLogin ~ admin:", admin);

    if (admin) {
      const passwordMatch: boolean = await bcrypt.compare(
        data.password,
        admin.password
      );
      if (!passwordMatch) {
        throw new Error("Incorrect email or password");
      } else {
        return admin as AdminEntity;
      }
    } else {
      throw new Error("Admin not found!");
    }
  } catch (error: any) {
    console.log("888888888888888");

    throw new Error(error?.message);
  }
};