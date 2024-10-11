import {IRepositories } from './IRepositories';
import { IUseCases} from  './IUseCase';

export interface IDependencies {
    repositories : IRepositories;
    useCases : IUseCases;
}