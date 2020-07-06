import { RegisterUserResponse } from './register-user-response';

export class RegisterUserResponseUsernameExists implements RegisterUserResponse {
    Message(): string {
      return "Username already exists"
    }
}
