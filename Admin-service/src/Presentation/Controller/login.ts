import {NextFunction,Request,Response} from "express"
import { IDependencies } from "../../App/Interface/IDependencies"
import { AdminEntity } from "../../Domain/Entity/Index"
import jwt from "jsonwebtoken"


export const loginController =(dependencies:IDependencies)=>{
    console.log(dependencies,"-------------");
    const {useCases:{loginAdminUseCase}} = dependencies;
    
    const loginAdmin = async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const adminCredentials = req.body;
            const admin:AdminEntity | null = await loginAdminUseCase(dependencies).execute(adminCredentials)
            console.log("🚀 ~ file: login.ts:15 ~ loginAdmin ~ admin:", admin)
            
            if(admin){
                if(admin.role === 'admin') {
                let payload = {
                    _id: String(admin?._id),
                    email: admin?.email!,
                    role: admin?.role!,
                  };
                  const accessToken = jwt.sign(
                    payload,
                    String(process.env.ACCESS_TOKEN_SECRET),
                    { expiresIn: "1h" }
                  );
                  console.log(accessToken,'token')
    
                  res.cookie("user_jwt", accessToken, {
                    httpOnly: true,
                  });
        
                res.status(200).json({
                success: true,
                user: admin,
                message: "Admin verified!",
                })
            }else{
                res.status(401).json({ error: "Unauthorized: Insufficient role privileges" });
            }
            }
            else{
                res.status(401).json({ error: "Unauthorized" });
            }
        } catch (error:any) {
            next(error)
        }
    }
    return loginAdmin;
}
   