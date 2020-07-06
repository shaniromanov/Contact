import { LoginResponse } from './login-response';

export class LoginResponseNotExists implements LoginResponse{
    Message(): string {
        return "Username or password incorrect"
    }
}
