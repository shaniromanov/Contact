import { Injectable } from '@angular/core';
import { CommService } from './comm.service';
import { RepositoryService } from './repository.service';
import { Observable } from 'rxjs';
import { LoginResponse } from '../DTO/Responses/login-response';
import { LoginRequest } from '../DTO/Requests/login-request';
import { User } from '../DTO/user';
import { RegisterUserResponse } from '../DTO/Responses/register-user-response';
import { Contact } from '../DTO/contact';
import { AddContactResponse } from '../DTO/Responses/add-contact-response';
import { ContactRequest } from '../DTO/Requests/contact-request';
import { GroupRequest } from '../DTO/Requests/group-request';
import { AddGroupResponse } from '../DTO/Responses/add-group-response';
import { RegisterUserRequest } from '../DTO/Requests/register-user-request';

@Injectable()
export class LocalCommService implements CommService{

  constructor(private repositoryService:RepositoryService) { }
  
  addGroup(request: GroupRequest): Observable<AddGroupResponse> {
    return new Observable<AddGroupResponse>(
      subscriber=>{
       
        let ret = this.repositoryService.addGroup(request)

        return subscriber.next(ret)
      }
    )
  }  
  
  registerUser(request: RegisterUserRequest): Observable<RegisterUserResponse> {
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

  addContact(request: ContactRequest): Observable<AddContactResponse>{
    
    return new Observable<LoginResponse>(
      subscriber=>{
       
        let ret = this.repositoryService.addContact(request)

        return subscriber.next(ret)
      }
    )
  }
}
