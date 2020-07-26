import { Injectable } from '@angular/core';
import { User } from '../DTO/user';
import { Subject, Observable } from 'rxjs';
import { Contact } from '../DTO/contact';
import { Group } from '../DTO/group';

@Injectable({
  providedIn: 'root'
})
export class AuthonticationService {
  private currentUser: User;
  private userName: string;
  userNameSubject = new Subject<string>()
  constructor() { }
  public initUser(user: User) {
    this.currentUser = JSON.parse(JSON.stringify(user))
    console.log("currentUser ", this.currentUser)
    this.userName = this.currentUser.UserName
    this.userNameSubject.next(this.userName)
  }
  getCurrentUser(): User {
    return this.currentUser
  }
  getUserName(): string {
    return this.userName
  }
  resetUser() {
    this.currentUser = null
    this.userName = ""
  }
  oninitUser(): Observable<string> {
    return this.userNameSubject
  }
  getGroups(): Array<Group> {
    return this.currentUser.groups
  }
  getContacts(): Array<Contact> {
    return this.currentUser.contacts
  }
}
