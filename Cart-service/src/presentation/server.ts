import express,{Application, Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import {cartRoutes} from "../infrastructure/routes/cart.router"
import { dependencies } from "../config/dependencies";

dotenv.config();

const app:Application  = express();
const PORT:number = Number(process.env.PORT)

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use(cartRoutes(dependencies))

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    const errorResponse = {
      errors: [{ message: err?.message || "Something went wrong" }],
    };
    return res.status(500).json(errorResponse);
  });
  
  app.listen(PORT,()=>{
      console.log(`The cart-service is listening to the port ${PORT}`);
  })

  export default app