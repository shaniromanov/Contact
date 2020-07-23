import { Injectable } from '@angular/core';
import { User } from '../DTO/user';
import { LocalCommService } from './local-comm.service';
import { LoginRequest } from '../DTO/Requests/login-request';
import { CommService } from './comm.service';
import { LoginResponse } from '../DTO/Responses/login-response';
import { LoginResponseOk } from '../DTO/Responses/login-response-ok';

@Injectable({
  providedIn: 'root'
})
export class AuthonticationService {
  private currentUser: User;
  private userName: string;
  constructor() { }
  public initUser(user:User)
  {
    this.currentUser=JSON.parse(JSON.stringify(user))
    console.log("currentUser ",this.currentUser)
    this.userName=this.currentUser.UserName
  }
  getCurrentUser():User{
    return this.currentUser
  }
 getUserName():string{
    return this.userName
  }
}
