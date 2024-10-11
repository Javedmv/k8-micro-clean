import jwt from "jsonwebtoken";

export const verifyToken = (token : string) : any => {
    const secretkey:jwt.Secret =process.env.AUTH_JWT_SECRET as jwt.Secret;

    try{
        console.log("here");
            const decodedToken = jwt.verify(token,secretkey );

            console.log("🚀 ~ file: verifyToken.ts:8 ~ verifyToken ~ decodedToken:", decodedToken);
            return decodedToken
        
    }
    catch(error :any){
        throw new Error("Product user token verify error    "+error.message)
    }
}