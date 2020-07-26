import { Injectable } from '@angular/core';
import { LoginRequest } from '../DTO/Requests/login-request';
import { Observable } from 'rxjs';
import { LoginResponse } from '../DTO/Responses/login-response';
import { RegisterUserResponse } from '../DTO/Responses/register-user-response';
import { AddContactResponse } from '../DTO/Responses/add-contact-response';
import { ContactRequest } from '../DTO/Requests/contact-request';
import { AddGroupResponse } from '../DTO/Responses/add-group-response';
import { GroupRequest } from '../DTO/Requests/group-request';
import { RegisterUserRequest } from '../DTO/Requests/register-user-request';
import { DeleteGroupResponse } from '../DTO/Responses/delete-group-response';
import { UpdateContactResponse } from '../DTO/Responses/update-contact-response';
import { AddContactToGroupRequest } from '../DTO/Requests/add-contact-to-group-request';
import { AddContactToGroupResponse } from '../DTO/Responses/add-contact-to-group-response';
import { DeleteGroupRequest } from '../DTO/Requests/delete-group-request';
import { DeleteContactRequest } from '../DTO/Requests/delete-contact-request';
import { DeleteContactFromGroupRequest } from '../DTO/Requests/delete-contact-from-group-request';
import { DeleteContactFromGroupResponse } from '../DTO/Responses/delete-contact-from-group-response';
import { DeleteGroupFromContactRequest } from '../DTO/Requests/delete-group-from-contact-request';
import { DeleteGroupFromContactResponse } from '../DTO/Responses/delete-group-from-contact-response';
import { UpdateGroupRequest } from '../DTO/Requests/update-group-request';
import { UpdateGroupResponse } from '../DTO/Responses/update-group-response';

@Injectable()
export abstract class CommService {


  constructor() { }
  abstract getUser(request: LoginRequest): Observable<LoginResponse>
  abstract registerUser(request: RegisterUserRequest): Observable<RegisterUserResponse>
  abstract addContact(request: ContactRequest): Observable<AddContactResponse>
  abstract addGroup(request: GroupRequest): Observable<AddGroupResponse>
  abstract deleteGroup(request: DeleteGroupRequest): Observable<DeleteGroupResponse>
  abstract updateContact(request: ContactRequest): Observable<UpdateContactResponse>
  abstract AddContactToGroup(request: AddContactToGroupRequest): Observable<AddContactToGroupResponse>
  abstract deleteContact(request: DeleteContactRequest): Observable<DeleteGroupResponse>
  abstract deleteContactFromGroup(request: DeleteContactFromGroupRequest): Observable<DeleteContactFromGroupResponse>
  abstract deleteGroupFromContact(request: DeleteGroupFromContactRequest): Observable<DeleteGroupFromContactResponse>
  abstract updateGroup(request: UpdateGroupRequest): Observable<UpdateGroupResponse>
}
