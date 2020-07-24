import { Injectable } from '@angular/core';
import { User } from '../DTO/user';
import { LocalCommService } from './local-comm.service';
import { LoginRequest } from '../DTO/Requests/login-request';
import { CommService } from './comm.service';
import { LoginResponse } from '../DTO/Responses/login-response';
import { LoginResponseOk } from '../DTO/Responses/login-response-ok';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthonticationService {
  private currentUser: User;
  private userName: string;
  userNameSubject = new Subject<string>()
  constructor() { }
  public initUser(user:User)
  {
    this.currentUser=JSON.parse(JSON.stringify(user))
    console.log("currentUser ",this.currentUser)
    this.userName=this.currentUser.UserName
    this.userNameSubject.next(this.userName)
  }
  getCurrentUser():User{
    return this.currentUser
  }
 getUserName():string{
    return this.userName
  }
  resetUser(){
    this.currentUser=null
    this.userName=""
  }
  oninitUser():Observable<string>{
    return this.userNameSubject
}
}
