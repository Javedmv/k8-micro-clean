import express, {Application, NextFunction, Request, Response} from 'express'
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import { authRoutes } from "../Infrastructure/Routes/authRoutes";
import { dependencies } from "../Config/dependencies";

dotenv.config();

const app: Application = express()
const PORT: number = Number(process.env.PORT)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", authRoutes(dependencies));

app.listen(PORT,()=>{
    console.log(`The auth-service is listening to the port ${PORT}`);
})

export default app