import { RegisterUserResponse } from './register-user-response';
import { User } from '../user';

export class RegisterUserResponseOk implements RegisterUserResponse{
    Message(): string {
        return "Register User Succeeded"
    }
    user:User

    constructor(user:User) {
        this.user=user
    }
}
