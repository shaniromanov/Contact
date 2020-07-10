import { Injectable } from '@angular/core';
import { LoginRequest } from '../DTO/Requests/login-request';
import { User } from '../DTO/user';
import { Observable } from 'rxjs';
import { LoginResponse } from '../DTO/Responses/login-response';
import { RegisterUserResponse } from '../DTO/Responses/register-user-response';
import { Contact } from '../DTO/contact';
import { AddContactResponse } from '../DTO/Responses/add-contact-response';
import { ContactRequest } from '../DTO/Requests/contact-request';

@Injectable()
export abstract class CommService {
  constructor() { }
  abstract getUser(request: LoginRequest): Observable<LoginResponse>
  abstract registerUser(request: User): Observable<RegisterUserResponse>
  abstract addContact(request: ContactRequest): Observable<AddContactResponse>
}
