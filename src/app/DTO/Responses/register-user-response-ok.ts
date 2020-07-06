import { RegisterUserResponse } from './register-user-response';

export class RegisterUserResponseOk implements RegisterUserResponse{
    Message(): string {
        return "Register User Succeeded"
    }
}
