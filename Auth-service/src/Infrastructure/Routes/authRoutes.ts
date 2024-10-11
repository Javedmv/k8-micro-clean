import { Router } from "express";
import { IDependencies } from "../../Application/Interfaces/IDependencies";
import { controllers } from "../../Presentation/Controllers/index";

export const authRoutes = (dependencies: IDependencies) => {
  const { signup,login } = controllers(dependencies);

  const router = Router();

  router.route("/signup").post(signup);

  router.route("/login").post(login);

  return router;

};