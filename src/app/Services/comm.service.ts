import { Injectable } from '@angular/core';
import { LoginRequest } from '../DTO/Requests/login-request';
import { User } from '../DTO/user';
import { Observable } from 'rxjs';
import { LoginResponse } from '../DTO/Responses/login-response';
import { RegisterUserResponse } from '../DTO/Responses/register-user-response';
import { Contact } from '../DTO/contact';
import { AddContactResponse } from '../DTO/Responses/add-contact-response';
import { ContactRequest } from '../DTO/Requests/contact-request';
import { AddGroupResponse } from '../DTO/Responses/add-group-response';
import { GroupRequest } from '../DTO/Requests/group-request';
import { RegisterUserRequest } from '../DTO/Requests/register-user-request';
import { DeleteGroupResponse } from '../DTO/Responses/delete-group-response';
import { UpdateContactResponse } from '../DTO/Responses/update-contact-response';
import { AddContactToGroupRequest } from '../DTO/Requests/add-contact-to-group-request';
import { AddContactToGroupResponse } from '../DTO/Responses/add-contact-to-group-response';

@Injectable()
export abstract class CommService {
  constructor() { }
  abstract getUser(request: LoginRequest): Observable<LoginResponse>
  abstract registerUser(request: RegisterUserRequest): Observable<RegisterUserResponse>
  abstract addContact(request: ContactRequest): Observable<AddContactResponse>
  abstract addGroup(request: GroupRequest): Observable<AddGroupResponse>
  abstract deleteGroup(index: number): Observable<DeleteGroupResponse>
  abstract updateContact(request: ContactRequest): Observable<UpdateContactResponse>
  abstract AddContactToGroup(request: AddContactToGroupRequest): Observable<AddContactToGroupResponse>
  abstract getContacts(user: User): Observable<Contact[]>
}
