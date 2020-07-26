import { Injectable } from '@angular/core';
import { CommService } from './comm.service';
import { LoginRequest } from '../DTO/Requests/login-request';
import { LoginResponse } from '../DTO/Responses/login-response';
import { Observable } from 'rxjs';
import { RegisterUserResponse } from '../DTO/Responses/register-user-response';
import { RegisterUserRequest } from '../DTO/Requests/register-user-request';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private commService: CommService) { }
  findExistsUser(request: LoginRequest): Observable<LoginResponse> {

    return this.commService.getUser(request);
  }


  create(request: RegisterUserRequest): Observable<RegisterUserResponse> {
    return this.commService.registerUser(request)
  }


}
