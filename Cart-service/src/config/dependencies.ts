import { IDependencies } from "../app/interface/IDependencies";
import * as useCases from "../app/useCases"
import * as repositories from "../infrastructure/database/mongoDb/repositories";

export const dependencies: IDependencies = {
  useCases,
  repositories,
};