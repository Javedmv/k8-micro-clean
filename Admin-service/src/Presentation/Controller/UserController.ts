import { Response, Request, NextFunction } from "express";
import { IDependencies } from "../../App/Interface/IDependencies";
import { User } from "../../Domain/Entity/Index";

export const addUserController = (dependencies: IDependencies) => {
  const {
    useCases: { AddUserUseCase },
  } = dependencies;
  if (!AddUserUseCase) {
    throw new Error("addUserUseCase is not defined in dependencies");
  }
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.body;
      console.log(
        "🚀 ~ file: UserController.ts:11 ~ returnasync ~ userData:",
        userData
      );
      const addedUser: User | null = await AddUserUseCase(dependencies).execute(
        userData
      );
      console.log(
        "🚀 ~ file: UserController.ts:14 ~ returnasync ~ addedUser:",
        addedUser
      );
      res.status(201).json(addedUser);
    } catch (error: any) {
      next(error);
    }
  };
};