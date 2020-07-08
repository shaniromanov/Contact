import { Injectable } from '@angular/core';
import { CommService } from './comm.service';
import { RepositoryService } from './repository.service';
import { Observable } from 'rxjs';
import { LoginResponse } from '../DTO/Responses/login-response';
import { LoginRequest } from '../DTO/Requests/login-request';
import { User } from '../DTO/user';
import { RegisterUserResponse } from '../DTO/Responses/register-user-response';

@Injectable()
export class LocalCommService implements CommService{

  constructor(private repositoryService:RepositoryService) { }
  registerUser(request: User): Observable<RegisterUserResponse> {
    return new Observable<LoginResponse>(
      subscriber=>{
        let ret = this.repositoryService.registerUser(request)
        return subscriber.next(ret)
      }
    )
  }
  getUser(request: LoginRequest): Observable<LoginResponse> {
    return new Observable<LoginResponse>(
      subscriber=>{
        let ret = this.repositoryService.getUser(request)

        return subscriber.next(ret)
      }
    )
  }
}
