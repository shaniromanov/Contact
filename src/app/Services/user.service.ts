import { Injectable } from '@angular/core';
import { CommService } from './comm.service';
import { LoginRequest } from '../DTO/Requests/login-request';
import { LoginResponse } from '../DTO/Responses/login-response';
import { Observable } from 'rxjs';
import { User } from '../DTO/user';
import { RegisterUserResponse } from '../DTO/Responses/register-user-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private commService:CommService) { }
  findExistsUser(request:LoginRequest): Observable<LoginResponse> {

    return this.commService.getUser(request);
  }
 

  create(request:User):Observable<RegisterUserResponse> {
    return this.commService.registerUser(request)
  }

 
}
