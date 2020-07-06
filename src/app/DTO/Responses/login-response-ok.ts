import { LoginResponse } from './login-response';
import { User } from '../user';

export class LoginResponseOk implements LoginResponse {
    Message(): string {
       return "Login Succeeded"
    }
    user:User

    constructor(user:User) {
        this.user=user
    }
}
