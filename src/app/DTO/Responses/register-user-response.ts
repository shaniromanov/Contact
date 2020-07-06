import { GlobalResponse } from './global-response';

export abstract class RegisterUserResponse implements GlobalResponse{
    abstract Message(): string 
}
