import { GlobalResponse } from './global-response';

export abstract class LoginResponse implements GlobalResponse {
    abstract Message(): string 
}
